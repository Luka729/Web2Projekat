using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
: base(options)
        {
        }
        public DbSet<User> Users { get; set; }

        public DbSet<Car> Cars { get; set; }

        public DbSet<Rent_A_Car> Rent_A_Cars { get; set; }

        public DbSet<Flight> Flights { get; set; }

        public DbSet<Flight> AvioCompanies { get; set; }
    }
}
