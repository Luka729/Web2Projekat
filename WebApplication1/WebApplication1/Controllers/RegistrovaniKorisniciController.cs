using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public RegistrovaniKorisniciController(MyDbContext context, UserManager<RegistrovaniKorisniciModel> user)
        {
            userManager = user;
            _context = context;
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

    }
}
