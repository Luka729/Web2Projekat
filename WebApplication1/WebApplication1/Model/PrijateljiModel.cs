using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class PrijateljiModel
    {
        [Key]
        public int Id { get; set; }

        public string IdPosiljaoca { get; set; }

        public string IdPrimaoca { get; set; }

        public bool PrihvatioZahtev { get; set; }


    }
}
