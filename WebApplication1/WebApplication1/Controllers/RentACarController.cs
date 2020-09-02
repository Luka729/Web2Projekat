﻿using System;
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
        private readonly UserManager<RegistrovaniKorisniciModel> userManager;

        public RentACarController(MyDbContext context, UserManager<RegistrovaniKorisniciModel> user)
        {
            userManager = user;
            _context = context;

        }

        [HttpPost]
        [Route("UpisUBazu")]
        public async Task<Object> UpisUBazu(RentACarKlasa rentACarServisi)
        {
            var rentACar = new RentACarModel();

            var listaRentACar = _context.RentACar;
            if (listaRentACar.Count() == 0)
            {

                rentACar.NazivServisa = rentACarServisi.Naziv;
                rentACar.AdresaServisa = rentACarServisi.Adresa;
                rentACar.PromoOpis = rentACarServisi.PromotivniOpis;
                rentACar.Admin = rentACarServisi.Admin;

                try
                {
                    var rezultat = _context.RentACar.Add(rentACar);
                    _context.SaveChanges();
                    return Ok();

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }

            }
            foreach (var el in listaRentACar)
            {
                if (el.NazivServisa.Equals(rentACarServisi.Naziv))
                {
                    return BadRequest(new { message = "Vec postoji servis sa takvim imenom" });

                }

            }

            rentACar.NazivServisa = rentACarServisi.Naziv;
            rentACar.AdresaServisa = rentACarServisi.Adresa;
            rentACar.PromoOpis = rentACarServisi.PromotivniOpis;
            rentACar.Admin = rentACarServisi.Admin;

            try
            {
                var rezultat = _context.RentACar.Add(rentACar);
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
