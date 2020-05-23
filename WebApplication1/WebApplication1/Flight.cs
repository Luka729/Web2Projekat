using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Flight
    {
        [Key]
        public string Id { get; set; }

        public string DepartureDate { get; set; }

        public string LandingDate { get; set; }

        public int HourFlight { get; set; }

        public int Minutes { get; set; }

        public int Length { get; set; }

        public int NumberOfTransit { get; set; }  //presedanje

        public string LocationOfTransit { get; set; }

        public int Price { get; set; }

        public int AvailableSeats { get; set; }

        public AvioCompany aivoCompID { get; set; }
    }
}
