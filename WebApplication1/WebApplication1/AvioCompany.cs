using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class AvioCompany
    {
        [Key]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Adress { get; set; }

        public string Description { get; set; }

        public ICollection<Destination> Destinations { get; set; }

        public double AverageRate { get; set; }

        public ICollection<Flight> Flights { get; set; }

    }
}
