using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class RezervisanaKolaModel
    {
        [Key]
        public int Id { get; set; }
        public string IdKorisnika {get; set;}

        public string IdKola { get; set; }

        public DateTime PocetakRezervacije { get; set; }

        public DateTime KrajRezervacije { get; set; }
    }
}
