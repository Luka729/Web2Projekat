using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("AvioKompanija")]
    public class AvioKompanijaModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Naziv { get; set; }

        [Required]
        public string Adresa { get; set; }

        [Required]
        public string PromoOpis { get; set; }

        [Required]
        public ICollection<LetoviModel> spisakLetova { get; set; }

        [Required]
        public int Ocena { get; set; }


    }
}
