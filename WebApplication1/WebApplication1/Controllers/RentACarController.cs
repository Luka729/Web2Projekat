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
    public class RentACarController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly UserManager<RentACarModel> userManager;

        public RentACarController(MyDbContext context, UserManager<RentACarModel> user)
        {
            userManager = user;
            _context = context;

        }

        [HttpPost]
        [Route("UpisUBazu")]
        public async Task<Object> DodajKorisnika(RentACarKlasa rentACarServisi)
        {
            if (await userManager.FindByNameAsync(rentACarServisi.NazivServisa) != null)
            {
                return BadRequest(new { message = "Vec postoji servis sa takvim imenom" });
            }

            var resultFind = await userManager.FindByNameAsync(rentACarServisi.NazivServisa);
            if (resultFind == null)
            {
                var rentACar = new RentACarModel()
                {
                    NazivServisa = rentACarServisi.NazivServisa,
                    AdresaServisa = rentACarServisi.AdresaServisa,
                    PromoOpis = rentACarServisi.PromoOpis,
                    Admin = rentACarServisi.Admin,

                };
                try
                {               
                    return Ok(rentACar);

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
