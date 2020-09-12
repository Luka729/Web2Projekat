using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Klasa;
using WebApplication1.Model;

namespace WebApplication1
{
    public class MyDbContext : IdentityDbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        public DbSet<RegistrovaniKorisniciModel> RegistrovaniKorisnici { get; set; }
        public DbSet<RentACarModel> RentACar { get; set; }
        public DbSet<AutomibilModel> AutomibilTabela { get; set; }

        public DbSet<AvioKompanijaModel> Aviokompanija { get; set; }

        public DbSet<LetoviModel> LetoviTabela { get; set; }

        public DbSet<RezervisanaKolaModel> RezervisanaKolaTabela { get; set; }

        public DbSet<PrijateljiModel> PrijateljiTabela { get; set; }

        public DbSet<FilijaleTabela> FilijaleTabela { get; set; }

        public DbSet<SedistaTabela> SedistaTabela { get; set; }



    }
}
