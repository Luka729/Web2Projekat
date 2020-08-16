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
    public class RegistrovaniKorisniciKontroleri : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly UserManager<RegistrovaniKorisniciKlasa> userManager;

        public RegistrovaniKorisniciKontroleri(MyDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("Registrovanje")]
        public async Task<ActionResult<RegistrovaniKorisniciKlasa>> DodajKorisnika(RegistrovaniKorisniciKlasa registrovaniKorisnici)
        {
            if (await userManager.FindByEmailAsync(registrovaniKorisnici.eadresaProvera) != null){
                return BadRequest(new { message = "Vec postoji korisnik sa takvom e-mail adresom" });
            }
            try
            {
                var rezultat = userManager.CreateAsync(registrovaniKorisnici, registrovaniKorisnici.lozinkaProvera);
                return Ok(rezultat);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

    }
}
