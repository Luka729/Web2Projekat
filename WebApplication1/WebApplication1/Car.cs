using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Car
    {
        [Key]
        public string Id { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public int Year { get; set; }

        public int PricePerDay { get; set; }

        public double AverageRate { get; set; }

        public Rent_A_Car Rent_A_CarID { get; set; }
    }
}
