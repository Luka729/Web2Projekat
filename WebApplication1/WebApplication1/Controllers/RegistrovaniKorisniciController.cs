using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using WebApplication1.Klasa;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrovaniKorisniciController : ControllerBase
    {
        
        private readonly MyDbContext _context;
        private readonly UserManager<RegistrovaniKorisniciModel> userManager;
        private readonly ApplicationSettings _appSettings;

        public RegistrovaniKorisniciController(MyDbContext context, UserManager<RegistrovaniKorisniciModel> user, IOptions<ApplicationSettings> appSettings)
        {
            userManager = user;
            _context = context;
            _appSettings = appSettings.Value;

        }

        #region Verifikacija

        [HttpGet]
        [Route("Verifikacija/{id}")]
        public async Task Verifikacija(string id)
        {
            var user = await userManager.FindByIdAsync(id);
            try
            {
                user.EmailConfirmed = true;
                _context.Update(user);
                _context.SaveChanges();

            }
            catch (Exception e)
            {

            }
        }
        #endregion

        #region registrovanje
        [HttpPost]
        [Route("Registrovanje")]
        public async Task<Object> DodajKorisnika(RegistrovaniKorisniciKlasa registrovaniKorisnici)
        {
            if (await userManager.FindByEmailAsync(registrovaniKorisnici.Email) != null)
            {
                return BadRequest(new { message = "Vec postoji korisnik sa takvom e-mail adresom" });
            }

            var resultFind = await userManager.FindByEmailAsync(registrovaniKorisnici.Email);
            if (resultFind == null)
            {
                var registerUser = new RegistrovaniKorisniciModel()
                {
                    Email = registrovaniKorisnici.Email,
                    Ime = registrovaniKorisnici.Ime,
                    Prezime = registrovaniKorisnici.Prezime,
                    Grad = registrovaniKorisnici.Grad,
                    PhoneNumber = registrovaniKorisnici.Telefon,
                    UserName = registrovaniKorisnici.UserName,
                    PasswordHash = registrovaniKorisnici.Lozinka,

                };
                try
                {


                    var rezultat = await userManager.CreateAsync(registerUser, registrovaniKorisnici.Lozinka.ToString());
                    var sendMailThread = new Thread(async () =>
                    {
                        var message = new MailMessage();
                        message.From = new System.Net.Mail.MailAddress("webprogramiranje2@gmail.com");
                        message.To.Add(registerUser.Email);
                        message.Subject = "Verifikacija email adrese ";
                        message.Body = "Da biste se prijavili, kliknite na sledeci link http://localhost:58544/api/RegistrovaniKorisnici/Verifikacija/" + registerUser.Id;

                        using (var smtpClient = new SmtpClient())
                        {
                            smtpClient.Host = "smtp.gmail.com";
                            smtpClient.Port = 587;
                            smtpClient.EnableSsl = true;
                            smtpClient.UseDefaultCredentials = false;

                            smtpClient.Credentials = new NetworkCredential("webprogramiranje2@gmail.com", "lukaikristina1");

                            await smtpClient.SendMailAsync(message);
                        }
                    });

                    sendMailThread.Start();

                    if (registrovaniKorisnici.Rola == "main_admin")
                    {
                        await userManager.AddToRoleAsync(registerUser, "main_admin");
                        await userManager.AddClaimAsync(registerUser, new Claim(ClaimTypes.Role, "main_admin"));
                    }
                    else if (registrovaniKorisnici.Rola == "avio_admin")
                    {

                        await userManager.AddToRoleAsync(registerUser, "avio_admin");
                        await userManager.AddClaimAsync(registerUser, new Claim(ClaimTypes.Role, "avio_admin"));

                    }
                    else if (registrovaniKorisnici.Rola == "car_admin")
                    {
                        await userManager.AddToRoleAsync(registerUser, "car_admin");
                        await userManager.AddClaimAsync(registerUser, new Claim(ClaimTypes.Role, "car_admin"));
                    }
                    else
                    {
                        await userManager.AddToRoleAsync(registerUser, "regular_user");
                        await userManager.AddClaimAsync(registerUser, new Claim(ClaimTypes.Role, "regular_user"));
                    }

                    registrovaniKorisnici.Id = registerUser.Id;

                    return Ok(rezultat);

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }

            }
            else
            {
                return BadRequest(new { message = "Ne valja" });
            }
        }

        #endregion

        #region izmenaPodataka
        [HttpPost]
        [Route("IzmenaPodataka")]
        public async Task<Object> AzuriranjePodatakaKorisnika(RegistrovaniKorisniciKlasa registrovaniKorisnici)
        {
            var user = await userManager.FindByNameAsync(registrovaniKorisnici.UserName);
            try
            {
                user.Ime = registrovaniKorisnici.Ime;
                user.Prezime = registrovaniKorisnici.Prezime;
                user.UserName = registrovaniKorisnici.UserName;
                user.Email = registrovaniKorisnici.Email;
                user.Grad = registrovaniKorisnici.Grad;
                user.PhoneNumber = registrovaniKorisnici.Telefon;
                user.PasswordHash = registrovaniKorisnici.Lozinka;

                _context.Update(user);
                _context.SaveChanges();
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest();

            }

        }

        #endregion

        #region logovanje
        [HttpPost]
        [Route("Logovanje")]
        public async Task<Object> Login(LogovaniKorisniciKlasa model)
        {
            var user = await userManager.FindByNameAsync(model.UserName);

            if (user != null && await userManager.CheckPasswordAsync(user, model.Password) && user.EmailConfirmed)
            {
                var role = await userManager.GetRolesAsync(user);

                IdentityOptions options = new IdentityOptions();

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim(options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }
        #endregion

        #region dobaviCarAdmina

        [HttpGet]
        [Route("DobaviCarAdmina")]
        public IActionResult DobaviCarAdmina()
        {
            var admini = _context.RegistrovaniKorisnici;
            if (admini == null)
            {
                return NotFound("Ne postoje admini u bazi podataka");

            }
            var rezultat = new List<RegistrovaniKorisniciModel>();

            foreach (var admin in admini)
            {
                if (admin.UserName.Contains("CarAdmin") && admin.ImaServis == false)
                {
                    rezultat.Add(admin);
                }

            }
            return Ok(rezultat);
        }
        #endregion

        #region dobaviAvioAdmina

        [HttpGet]
        [Route("DobaviAvioAdmina")]
        public IActionResult DobaviAvioAdmina()
        {
            var admini = _context.RegistrovaniKorisnici;
            if (admini == null)
            {
                return NotFound("Ne postoje admini u bazi podataka");

            }
            var rezultat = new List<RegistrovaniKorisniciModel>();

            foreach (var admin in admini)
            {
                if (admin.UserName.Contains("AvioAdmin") && admin.ImaServis == false)
                {
                    rezultat.Add(admin);
                }

            }
            return Ok(rezultat);
        }
        #endregion

        #region dobaviPodatkeKorisnika

        [HttpGet]
        [Route("DobaviPodatkeKorisnika/{userName}")]
        public IActionResult DobaviPodatkeKorisnika(string userName)
        {
            var korisnici = _context.RegistrovaniKorisnici;
            if (korisnici == null)
            {
                return NotFound("Ne postoje korisnici u bazi podataka");

            }
            var rezultat = new RegistrovaniKorisniciModel();

            foreach (var korisnik in korisnici)
            {
                if (korisnik.UserName == userName)
                {
                    rezultat = korisnik;
                }

            }
            return Ok(rezultat);
        }

        #endregion

        #region drustveneMreze

        [HttpPost]
        [Route("DrustveneMrezeLogin")]
        public async Task<Object> SocialLogin([FromBody] LogovaniKorisniciKlasa loginModel)
        {
            var test = _appSettings.JWT_Secret;            
            if (VerifyToken(loginModel.IdToken))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)                   
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);

                return Ok(new { token });
            }

            return Ok();
        }
        private const string GoogleApiTokenInfoUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={0}";

        public bool VerifyToken(string providerToken)
        {
            var httpClient = new HttpClient();
            var requestUri = new Uri(string.Format(GoogleApiTokenInfoUrl, providerToken));

            HttpResponseMessage httpResponseMessage;

            try
            {
                httpResponseMessage = httpClient.GetAsync(requestUri).Result;
            }
            catch (Exception ex)
            {
                return false;
            }

            if (httpResponseMessage.StatusCode != HttpStatusCode.OK)
            {
                return false;
            }

            var response = httpResponseMessage.Content.ReadAsStringAsync().Result;
            var googleApiTokenInfo = JsonConvert.DeserializeObject<GoogleApiTokenInfo>(response);

            return true;
        }

        #endregion

        #region listaKorisnika
        [HttpGet]
        [Route("DobaviListuKorisnika/{userName}")]

        public IActionResult DobaviListuKorisnika(string userName) 
        {
            var lista = _context.RegistrovaniKorisnici;
            if (lista == null) 
            {
                return BadRequest("Ne postoje registrovani korisnici u bazi podataka");
            }
            var rezultat = new List<RegistrovaniKorisniciModel>();

            foreach (var el in lista)
            {
                if(el.UserName != userName) 
                {
                    if (!el.UserName.Contains("Admin")) 
                    {
                        rezultat.Add(el);
                    }
                }              
            }

            return Ok(rezultat);
        }

        #endregion

        #region DodavanjePrijatelja
        [HttpPost]
        [Route("DodavanjePrijatelja")]

        public async Task<Object> DodavanjePrijatelja(PrijateljiModel model) 
        {
            var listaZahteva = _context.PrijateljiTabela;
            foreach (var el in listaZahteva)
            {
                if((el.IdPosiljaoca == model.IdPosiljaoca && el.IdPrimaoca == model.IdPrimaoca)||(el.IdPosiljaoca == model.IdPrimaoca && el.IdPrimaoca == model.IdPosiljaoca)) 
                {
                    return BadRequest();
                }
            }
            _context.PrijateljiTabela.Add(model);
            _context.SaveChanges();
            return Ok();
        }

        #endregion

        #region listaZahteva
        [HttpGet]
        [Route("DobaviListuZahteva/{userName}")]

        public async Task<Object> DobaviListuZahteva(string userName)
        {
            var lista = _context.PrijateljiTabela;
            if (lista == null)
            {
                return BadRequest("Ne postoje registrovani korisnici u bazi podataka");
            }
            var rezultat = new List<RegistrovaniKorisniciModel>();

            foreach (var el in lista)
            {
                if (el.IdPrimaoca == userName && !el.PrihvatioZahtev)
                {
                    var zahtev = await userManager.FindByNameAsync(el.IdPosiljaoca);
                    
                    rezultat.Add(zahtev);
                    
                }
            }

            return Ok(rezultat);
        }
        #endregion

        #region prihvatiPrijatelja
        [HttpPost]
        [Route("PrihvatiPrijatelja")]

        public async Task<Object> PrihvatiPrijatelja(PrijateljiModel model) 
        {
            var listaPrijatelja = _context.PrijateljiTabela;
            foreach (var el in listaPrijatelja)
            {
                if ((el.IdPosiljaoca == model.IdPosiljaoca && el.IdPrimaoca == model.IdPrimaoca) || (el.IdPosiljaoca == model.IdPrimaoca && el.IdPrimaoca == model.IdPosiljaoca))
                {
                    el.PrihvatioZahtev = true;
                }
            }
            _context.SaveChanges();
          
            return Ok();
        }
        #endregion

        #region odbijPrijatelja
        [HttpPost]
        [Route("OdbijPrijatelja")]

        public async Task<Object> OdbijPrijatelja(PrijateljiModel model)
        {
            var listaZahteva = _context.PrijateljiTabela;
            if (!model.PrihvatioZahtev) 
            {
                foreach (var el in listaZahteva)
                {
                    if ((el.IdPosiljaoca == model.IdPosiljaoca && el.IdPrimaoca == model.IdPrimaoca) || (el.IdPosiljaoca == model.IdPrimaoca && el.IdPrimaoca == model.IdPosiljaoca))
                    {
                        _context.PrijateljiTabela.Remove(el);
                    }
                }
            }
            _context.SaveChanges();

            return Ok();
        }
        #endregion

        #region listaPrijatelja
        [HttpGet]
        [Route("ListaPrijatelja/{userName}")]

        public IActionResult ListaPrijatelja(string userName)
        {
            var listaKorisnika = _context.RegistrovaniKorisnici;
            var lista = _context.PrijateljiTabela;
            if (lista == null)
            {
                return BadRequest("Ne postoje registrovani korisnici u bazi podataka");
            }
            var rezultat = new List<RegistrovaniKorisniciModel>();

            foreach (var el in lista)
            {
                if (el.IdPosiljaoca == userName)
                {
                    if (el.PrihvatioZahtev)
                    {
                        foreach (var korisnik in listaKorisnika)
                        {
                            if(korisnik.UserName == el.IdPrimaoca)
                            {
                                rezultat.Add(korisnik);
                            }
                        }
                    }
                }
                else if(el.IdPrimaoca == userName)
                {
                    if (el.PrihvatioZahtev)
                    {
                        foreach (var korisnik in listaKorisnika)
                        {
                            if (korisnik.UserName == el.IdPosiljaoca)
                            {
                                rezultat.Add(korisnik);
                            }
                        }
                    }
                }
                else
                {
                    
                }

                
            }

            return Ok(rezultat);
        }
        #endregion
    }
}