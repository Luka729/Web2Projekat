using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Klase;

namespace WebApplication1
{
    public class MyDbContext :  IdentityDbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
: base(options) 
        {

    }
        public DbSet<RegistrovaniKorisniciKlasa> RegistrovaniKorisnici { get; set; }

    }
}
