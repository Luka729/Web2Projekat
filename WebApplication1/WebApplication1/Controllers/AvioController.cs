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
    public class AvioController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly UserManager<RegistrovaniKorisniciModel> userManager;

        public AvioController(MyDbContext context, UserManager<RegistrovaniKorisniciModel> user)
        {
            userManager = user;
            _context = context;

        }

        #region izmenaPodatakaAvioKompanije
        [HttpPost]
        [Route("IzmenaPodataka")]
        public async Task<Object> IzmenaPodataka(AvioKlasa avioKlasa)
        {

            var listaAvio = _context.Aviokompanija;

            foreach (var el in listaAvio)
            {
                if (el.Admin == avioKlasa.Admin)
                {
                    try
                    {
                        el.Adresa = avioKlasa.Adresa;
                        el.Naziv = avioKlasa.Naziv;
                        el.PromoOpis = avioKlasa.PromotivniOpis;
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

        #region dobaviPodatkeAvioKompanije
        [HttpGet]
        [Route("DobaviPodatkeAvioKompanije/{userName}")]
        public IActionResult DobaviPodatkeAvioKompanije(string userName)
        {
            var listaAvio = _context.Aviokompanija;
            if (listaAvio == null)
            {
                return NotFound("Ne postoje korisnici u bazi podataka");

            }
            var rezultat = new AvioKompanijaModel();

            foreach (var el in listaAvio)
            {
                if (el.Admin == userName)
                {
                    rezultat = el;
                }

            }
            return Ok(rezultat);
        }

        #endregion

        #region upisUBazu
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
                var admin = await userManager.FindByNameAsync(avioKompanija.Admin);
                admin.ImaServis = true;

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
            var adminn = await userManager.FindByNameAsync(avioKompanija.Admin);
            adminn.ImaServis = true;

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
        #endregion

        #region dobaviListuLetova
        [HttpGet]
        [Route("DobaviListuLetova/{naziv}")]
        public IActionResult DobaviListuLetova(string naziv)
        {

            var lista = _context.Aviokompanija;
            var listaLetova = _context.LetoviTabela;

            if (lista == null)
            {
                return NotFound("Ne postoje Avio kompanije u bazi podataka");

            }
            var rezultat = new List<LetoviModel>();
            foreach (var el in lista)
            {
                if (el.Naziv == naziv)
                {
                    foreach (var let in listaLetova)
                    {
                        if (let.avioKompanija == null)
                        {
                            continue;
                        }
                        if (let.avioKompanija.Id == el.Id)
                        {
                            rezultat.Add(let);
                        }
                    }
                }

            }

            return Ok(rezultat);
        }
        #endregion

        #region dobaviListuAvioKompanija
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
        #endregion

        #region dodajLet
        [HttpPost]
        [Route("DodajLet/{userName}")]
        public async Task<Object> DodajLet(LetoviModel letModel, string userName)
        {
            var listaAvio = _context.Aviokompanija;
            var listaSedista = _context.SedistaTabela;
            int poredjenjeDatuma = DateTime.Compare(letModel.DatumSletanja, letModel.DatumPoletanja);
            foreach (var el in listaAvio)
            {
                if (el.spisakLetova == null)
                {
                    el.spisakLetova = new List<LetoviModel>();
                }

                if (el.Admin == userName)
                {
                    if (poredjenjeDatuma >= 0)
                    {

                        List<SedistaTabela> sedista = new List<SedistaTabela>();
                        SedistaTabela sediste;
                        for (int i = 0; i < letModel.SlobodnaMesta; i++)
                        {
                            sediste = new SedistaTabela() { IdLeta = 7, BrojSedista = i, Zauzeto = false };
                            sedista.Add(sediste);
                            _context.SedistaTabela.Add(sediste);
                        }

                        
                        letModel.SlobodnaMestaModel = sedista;
                        el.spisakLetova.Add(letModel);
                        _context.LetoviTabela.Add(letModel);

                        

                        break;
                    }
                    else
                    {
                        return BadRequest("Datum sletanja ne moze biti pre datuma poletanja");
                    }
                }

            }
            _context.SaveChanges();
            foreach (var item in _context.SedistaTabela)
            {
                if(item.IdLeta == 7) 
                {
                    item.IdLeta = letModel.Id;
                }
                
            }
            _context.SaveChanges();
            return Ok();

        }
        #endregion

        [HttpGet]
        [Route("DobaviListuLetova/{PolazniAerodrom}/{OdredisniAerodrom}/{DatumPolaska}/{DatumPovratka}")]
        public IActionResult DobaviListuLetova(string PolazniAerodrom, string OdredisniAerodrom, DateTime DatumPolaska, DateTime DatumPovratka)
        {

            var lista = _context.LetoviTabela;
            if (lista == null)
            {
                return NotFound("Ne postoje Avio kompanije u bazi podataka");

            }
            var rezultat = new List<LetoviModel>();

            foreach (var el in lista)
            {
                int komparacijaDatumaPoletanja = DateTime.Compare(el.DatumPoletanja.Date, DatumPolaska.Date);
                int komparacijaDatumaSletanja = DateTime.Compare(el.DatumSletanja.Date, DatumPovratka.Date);
                if (el.LokacijaPoletanja == PolazniAerodrom && el.LokacijaSletanja == OdredisniAerodrom && komparacijaDatumaPoletanja == 0 && komparacijaDatumaSletanja == 0)
                {
                    rezultat.Add(el);
                }

            }
            return Ok(rezultat);
        }

        [HttpGet]
        [Route("DobaviLet/{id}")]

        public IActionResult DobaviLet(string id)
        {

            var listaLetova = _context.LetoviTabela;
            var rezultat = new LetoviModel();

            foreach (var el in listaLetova)
            {

                if (el.Id == Int32.Parse(id))
                {
                    rezultat = el;
                    break;
                }
            }

            return Ok(rezultat);
        }

        [HttpGet]
        [Route("DobaviSedista/{id}")]

        public IActionResult DobaviSedista(string id)//idLeta
        {

            var listaSedista = _context.SedistaTabela;
            var rezultat = new List<SedistaTabela>();

            foreach (var el in listaSedista)
            {
                if (el.IdLeta == Int32.Parse(id))
                {
                    rezultat.Add(el);
                }
            }

            return Ok(rezultat);
        }

        [HttpGet]
        [Route("Rezervisi/{letId}/{ticketIDs}/{userId}")]

        public async Task<Object> Rezervisi(string letId, string ticketIDs, string userId) 
        {
            var listaRezervacija = _context.RezervacijaTabela;
            RezervacijaModel model = new RezervacijaModel();
            var listaSedista = _context.SedistaTabela;
            string[] mojrR = null;
            model.IdKorisnika = userId;
            model.IdLetova = int.Parse(letId);

            var listaSdista = _context.SedistaTabela;
           
                foreach (var i in listaSedista)
                {
                    mojrR = ticketIDs.Split(',');
                    foreach (var u in mojrR)
                    {
                        if (i.BrojSedista.ToString() == u)
                        {
                            i.Zauzeto = true;                   
                        }
                    }
                   
                }  
            
            _context.SaveChanges();

            model.BrojevisSedista = ticketIDs;

            if (listaRezervacija == null) 
            {
                listaRezervacija.Add(model);
                _context.SaveChanges();

            }
            else
            {

                listaRezervacija.Add(model);
                _context.SaveChanges();



            }
            var listaLetova = _context.LetoviTabela;


          




            return Ok();
        }

    }


}