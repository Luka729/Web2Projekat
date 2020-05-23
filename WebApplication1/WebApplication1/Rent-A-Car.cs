﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Rent_A_Car
    {
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Adress { get; set; }

        public string Description { get; set; }

        public string Taxes { get; set; }

        public ICollection<Car> ListOfCars { get; set; }

        public double AverageRate { get; set; }

    }
}
