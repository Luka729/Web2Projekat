﻿using System;
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
                    var sendMailThread = new Thread(async () => {
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

        
        [HttpPost]
        [Route("Logovanje")]
        public async Task<Object> Login(LogovaniKorisniciKlasa model)
        {

            var user = await userManager.FindByNameAsync(model.UserName);

            if (user != null && await userManager.CheckPasswordAsync(user, model.Lozinka))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim("Roles", "admin")
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
                    //Key min: 16 characters
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
    }
}