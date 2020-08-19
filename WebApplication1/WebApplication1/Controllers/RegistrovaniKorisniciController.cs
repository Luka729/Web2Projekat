using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
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

    }

}
