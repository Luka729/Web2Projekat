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
        #region DobaviAutoSaID
        [HttpGet]
        [Route("DobaviAutoSaID/{id}")]
        public IActionResult DobaviAutoSaID(string id)
        {

            var listaKola = _context.AutomibilTabela;

           
            var rezultat = new AutomibilModel();
            foreach (var el in listaKola)
            {

                if (el.Id == Int32.Parse(id))
                {
                    rezultat = el;
                }

            }

            return Ok(rezultat);
        }
        #endregion

        #region izmenaPodatakaRAC
        [HttpPost]
        [Route("IzmenaPodataka")]
        public async Task<Object> IzmenaPodataka(RentACarKlasa racKlasa)
        {

            var listaRac = _context.RentACar;

            foreach (var el in listaRac)
            {
                if(el.Admin == racKlasa.Admin)
                {
                    try
                    {
                        el.AdresaServisa = racKlasa.Adresa;
                        el.NazivServisa = racKlasa.Naziv;
                        el.PromoOpis = racKlasa.PromotivniOpis;
                        _context.Update(el);
                        break;
                    }
                    catch (Exception e)
                    {
                        return BadRequest();

                    }
                }
            }
            _context.SaveChanges();
            return Ok();
            
           

        }

        #endregion

        #region dobaviPodatkeRAC
        [HttpGet]
        [Route("DobaviPodatkeRAC/{userName}")]
        public IActionResult DobaviPodatkeRAC(string userName)
        {
            var rac = _context.RentACar;
            if (rac == null)
            {
                return NotFound("Ne postoje korisnici u bazi podataka");

            }
            var rezultat = new RentACarModel();

            foreach (var el in rac)
            {
                if (el.Admin == userName)
                {
                    rezultat = el;
                }

            }
            return Ok(rezultat);
        }

        #endregion

        #region dobaviListuKola

        [HttpGet]
        [Route("DobaviListuKola/{naziv}")]
        public IActionResult DobaviListuKola(string naziv)
        {

            var lista = _context.RentACar;
            var listaKola = _context.AutomibilTabela;

            if (lista == null)
            {
                return NotFound("Ne postoje Avio kompanije u bazi podataka");

            }
            var rezultat = new List<AutomibilModel>();
            foreach (var el in lista)
            {
                if (el.NazivServisa == naziv)
                {
                    foreach (var kola in listaKola)
                    {
                        if (kola.rentACar.Id == el.Id)
                        {
                            rezultat.Add(kola);
                        }
                    }
                }

            }

            return Ok(rezultat);
        }
        #endregion

        #region dodajKola
        [HttpPost]
        [Route("DodajKola/{userName}")]
        public async Task<Object> DodajKola(AutomibilModel autoModel, string userName)
        {
            var listaRentACar = _context.RentACar;



            foreach (var rentACar in listaRentACar)
            {
                if (rentACar.SpisakAutomobila == null)
                {
                    rentACar.SpisakAutomobila = new List<AutomibilModel>();
                }

                if (rentACar.Admin == userName)
                {
                    rentACar.SpisakAutomobila.Add(autoModel);
                    _context.AutomibilTabela.Add(autoModel);
                    break;
                }
            }
            _context.SaveChanges();

            return Ok();
        }
        #endregion

        #region upisUBazu
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
                var admin = await userManager.FindByNameAsync(rentACarServisi.Admin);
                admin.ImaServis = true;

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
            var adminn = await userManager.FindByNameAsync(rentACarServisi.Admin);
            adminn.ImaServis = true;

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
        #endregion

        #region dobaviListuRAC
        [HttpGet]
        [Route("DobaviListuRentACarServisa")]
        public IActionResult DobaviListuRentACarServisa()
        {
            var lista = _context.RentACar;
            if (lista == null)
            {
                return NotFound("Ne postoje Rent-A-Car servisi u bazi podataka");

            }
            var rezultat = new List<RentACarModel>();

            foreach (var el in lista)
            {

                rezultat.Add(el);


            }
            return Ok(rezultat);
        }
        #endregion

        #region RezervisiAuto
        [HttpPost]
        [Route("RezervisiAuto")]
        public async Task<Object> RezervisiAuto(RezervisanaKolaModel model)
        {
            bool upisanoUBazu = false;
            var listaKola = _context.AutomibilTabela;
            var listaRezervisanihKola = _context.RezervisanaKolaTabela;
            int komparacijaPocetkaRezervacija;
            int komparacijaPocetkaKrajaRezervacije;
            int komparacijaKrajPocetakRezervacija;
            int komparacijaKrajaRezervacija;
            int br = 0;

            int komparacijaMedjusobnoUModelu = DateTime.Compare(model.KrajRezervacije, model.PocetakRezervacije);

            if(komparacijaMedjusobnoUModelu < 0)
            {
                return BadRequest("Ne moze kraj rezervacije da bude pre pocetka rezervacije");
            }

            if(listaRezervisanihKola.Count() == 0)
            {
                _context.RezervisanaKolaTabela.Add(model);
                _context.SaveChanges();
                
                return Ok();

            }

            while (br < listaRezervisanihKola.Count()) {

                

                foreach (var rezervisana in listaRezervisanihKola)
                {
                    upisanoUBazu = false;

                    if (rezervisana.IdKola == model.IdKola)
                    {
                        komparacijaPocetkaRezervacija = DateTime.Compare(model.PocetakRezervacije, rezervisana.PocetakRezervacije);
                        komparacijaPocetkaKrajaRezervacije = DateTime.Compare(model.PocetakRezervacije, rezervisana.KrajRezervacije);
                        komparacijaKrajaRezervacija = DateTime.Compare(model.KrajRezervacije, rezervisana.KrajRezervacije);
                        komparacijaKrajPocetakRezervacija = DateTime.Compare(model.KrajRezervacije, rezervisana.PocetakRezervacije);

                        if (komparacijaKrajPocetakRezervacija > 0)
                        {
                            if (komparacijaPocetkaKrajaRezervacije > 0)
                            {
                                _context.RezervisanaKolaTabela.Add(model);
                                upisanoUBazu = true;
                                //break;
                            }
                     
                        }

                        if (komparacijaPocetkaKrajaRezervacije < 0)
                        {
                            if (komparacijaKrajPocetakRezervacija < 0)
                            {
                                _context.RezervisanaKolaTabela.Add(model);
                                upisanoUBazu = true;
                                //break;
                            }
                        }

                        if (komparacijaKrajPocetakRezervacija < 0)
                        {
                            _context.RezervisanaKolaTabela.Add(model);
                            upisanoUBazu = true;
                            //break;

                        }

                        if (komparacijaPocetkaKrajaRezervacije > 0)
                        {
                            _context.RezervisanaKolaTabela.Add(model);
                            upisanoUBazu = true;
                            //break;
                        }
                    }
                    else
                    {
                        foreach (var kola in listaKola)
                        {
                            if (kola.Id == Int32.Parse(model.IdKola))
                            {
                                komparacijaPocetkaRezervacija = DateTime.Compare(model.PocetakRezervacije, rezervisana.PocetakRezervacije);
                                komparacijaPocetkaKrajaRezervacije = DateTime.Compare(model.PocetakRezervacije, rezervisana.KrajRezervacije);
                                komparacijaKrajaRezervacija = DateTime.Compare(model.KrajRezervacije, rezervisana.KrajRezervacije);
                                komparacijaKrajPocetakRezervacija = DateTime.Compare(model.KrajRezervacije, rezervisana.PocetakRezervacije);

                                if (komparacijaKrajPocetakRezervacija > 0)
                                {
                                    if (komparacijaPocetkaKrajaRezervacije > 0)
                                    {
                                        _context.RezervisanaKolaTabela.Add(model);
                                        upisanoUBazu = true;
                                        //break;
                                    }
                                }

                                if (komparacijaPocetkaKrajaRezervacije < 0)
                                {
                                    if (komparacijaKrajPocetakRezervacija < 0)
                                    {
                                        _context.RezervisanaKolaTabela.Add(model);
                                        upisanoUBazu = true;
                                        //break;
                                    }
                                }

                                if (komparacijaKrajPocetakRezervacija < 0)
                                {
                                    _context.RezervisanaKolaTabela.Add(model);
                                    upisanoUBazu = true;
                                    //break;

                                }

                                if (komparacijaPocetkaKrajaRezervacije > 0)
                                {
                                    _context.RezervisanaKolaTabela.Add(model);
                                    upisanoUBazu = true;
                                    //break;
                                }

                            }
                        }
                    }
                    br++;

                    if (!upisanoUBazu)
                    {
                        break;
                    }
                }

                break;
                
            }

            _context.SaveChanges();
            if (upisanoUBazu)
            {
                return Ok();
            }

            else
            {
                return BadRequest("Neuspesna rezervacija automobila");
            }
        }

        #endregion


        #region dodajFilijalu
        [HttpPost]
        [Route("DodajFilijalu/{userName}")]
        public async Task<Object> DodajFilijalu(FilijaleTabela filijale, string userName)
        {
            var listaRentACar = _context.RentACar;



            foreach (var rentACar in listaRentACar)
            {
                if (rentACar.Filijale == null)
                {
                    rentACar.Filijale = new List<FilijaleTabela>();
                }

                if (rentACar.Admin == userName)
                {
                    
                    rentACar.Filijale.Add(filijale);
                    _context.FilijaleTabela.Add(filijale);
                    break;
                }
            }
            _context.SaveChanges();

            return Ok();
        }
        #endregion

        #region DobaviListuFilijala
        [HttpGet]
        [Route("DobaviListuFilijala/{userName}")]
        public IActionResult DobaviListuFilijala(string userName)
        {
            var rezultat = new List<FilijaleTabela>();
            var listaFilijala = _context.FilijaleTabela;
            foreach (var el in listaFilijala)
            {
                if(el.Admin == userName)
                {
                    rezultat.Add(el);
                }
            }

            return Ok(rezultat);
        }

        #endregion

        #region obrisiFilijalu
        [HttpPost]
        [Route("ObrisiFilijalu/{userName}")]
        public async Task<Object> ObrisiFilijalu(FilijaleTabela filijale, string userName)
        {
            var listaFilijali = _context.FilijaleTabela;

            foreach (var filijala in listaFilijali)
            {
                    if (filijala.Admin == userName && filijala.AdresaFilijale == filijale.AdresaFilijale )
                    {
           
                            _context.FilijaleTabela.Remove(filijala);
                            break;
                        
                    }     
            }
            _context.SaveChanges();

            return Ok();
        }
        #endregion

        #region izmeniFilijalu
        [HttpPost]
        [Route("IzmeniFilijalu/{id}")]
        public async Task<Object> IzmeniFilijalu(FilijaleTabela filijale, string id)
        {
            var listaFilijali = _context.FilijaleTabela;

            foreach (var filijala in listaFilijali)
            {
                if (filijala.Id == Int32.Parse(id))
                {
                    filijala.AdresaFilijale = filijale.AdresaFilijale;
                    filijala.GradFilijale = filijale.GradFilijale;
                    filijala.DrzavaFilijale = filijale.DrzavaFilijale;
                    _context.FilijaleTabela.Update(filijala);
                    break;

                }
            }
            _context.SaveChanges();

            return Ok();
        }
        #endregion
    }
}
