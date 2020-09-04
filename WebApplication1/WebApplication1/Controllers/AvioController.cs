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

        [HttpGet]
        [Route("DobaviListuAvioKompanija")]
        public IActionResult DobaviListuAvioKompanija()
        {
            var lista = _context.Aviokompanija;
            if (lista == null)
            {
                return NotFound("Ne postoje Avio kompanije u bazi podataka");

            }
            var rezultat = new List<AvioKompanijaModel>();

            foreach (var el in lista)
            {

                rezultat.Add(el);


            }
            return Ok(rezultat);
        }

        [HttpPost]
        [Route("DodajLet/{userName}")]
        public async Task<Object> DodajLet(LetoviModel letModel, string userName)
        {
            var listaAvio = _context.Aviokompanija;
            foreach (var el in listaAvio)
            {
                if (el.spisakLetova == null)
                {
                    el.spisakLetova = new List<LetoviModel>();
                }

                if (el.Admin == userName)
                {
                    el.spisakLetova.Add(letModel);
                    _context.LetoviTabela.Add(letModel);
                    break;
                }
            }
            _context.SaveChanges();

            return Ok();
        }
    }


}