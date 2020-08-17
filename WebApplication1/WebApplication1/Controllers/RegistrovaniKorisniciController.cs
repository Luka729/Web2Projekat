using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using WebApplication1.Klase;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrovaniKorisniciController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly UserManager<RegistrovaniKorisniciKlasa> userManager;

        public RegistrovaniKorisniciController(MyDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("Registrovanje")]
        public async Task<ActionResult<RegistrovaniKorisniciKlasa>> DodajKorisnika(RegistrovaniKorisniciKlasa registrovaniKorisnici)
        {
            if (await userManager.FindByIdAsync(registrovaniKorisnici.eadresaProvera.ToString()) != null)
            {
                return BadRequest(new { message = "Vec postoji korisnik sa takvom e-mail adresom" });
            }

            var resultFind = await userManager.FindByIdAsync(registrovaniKorisnici.eadresaProvera.ToString());
            if (resultFind == null)
            {
                var registerUser = new RegistrovaniKorisniciKlasa()
                {
                    eadresaProvera = registrovaniKorisnici.eadresaProvera,
                    imeProvera = registrovaniKorisnici.imeProvera,
                    prezimeProvera = registrovaniKorisnici.prezimeProvera,
                    gradProvera = registrovaniKorisnici.gradProvera,
                    telefonProvera = registrovaniKorisnici.telefonProvera,
                    lozinkaProvera = registrovaniKorisnici.lozinkaProvera

                };
                try
                {
                    var rezultat = userManager.CreateAsync(registerUser, registrovaniKorisnici.lozinkaProvera);
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
