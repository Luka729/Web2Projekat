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
    public class AvioController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly UserManager<RegistrovaniKorisniciModel> userManager;

        public AvioController(MyDbContext context, UserManager<RegistrovaniKorisniciModel> user)
        {
            userManager = user;
            _context = context;

        }

        [HttpPost]
        [Route("UpisUBazu")]
        public async Task<Object> UpisUBazu(AvioKlasa avioServisi)
        {
            var avioKompanija = new AvioKompanijaModel();

            var listaAvioKompanija = _context.Aviokompanija;
            if (listaAvioKompanija.Count() == 0)
            {

                avioKompanija.Naziv = avioServisi.Naziv;
                avioKompanija.Adresa = avioServisi.Adresa;
                avioKompanija.PromoOpis = avioServisi.PromotivniOpis;
                avioKompanija.Admin = avioServisi.Admin;

                try
                {
                    var rezultat = _context.Aviokompanija.Add(avioKompanija);
                    _context.SaveChanges();
                    return Ok();

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }

            }
            foreach (var el in listaAvioKompanija)
            {
                if (el.Naziv.Equals(avioServisi.Naziv))
                {
                    return BadRequest(new { message = "Vec postoji servis sa takvim imenom" });

                }

            }

            avioKompanija.Naziv = avioServisi.Naziv;
            avioKompanija.Adresa = avioServisi.Adresa;
            avioKompanija.PromoOpis = avioServisi.PromotivniOpis;
            avioKompanija.Admin = avioServisi.Admin;

            try
            {
                var rezultat = _context.Aviokompanija.Add(avioKompanija);
                _context.SaveChanges();
                return Ok();

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }



        }
    }
}