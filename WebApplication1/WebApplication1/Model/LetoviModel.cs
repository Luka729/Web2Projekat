using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("Letovi")]
    public class LetoviModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime DatumPoletanja { get; set; }

        [Required]
        public DateTime DatumSletanja{ get; set; }

        [Required]
        public DateTime SatPutovanja { get; set; }

        [Required]
        public DateTime MinutPutovanja { get; set; }

        [Required]
        public double DuzinaPutovanja { get; set; }

        public int BrojPresedanja { get; set; }

        public string LokacijaPresedanja { get; set; }

        [Required]
        public double CenaKarte { get; set; }

        [Required]
        public int SlobodnaMesta { get; set; }

        [Required]
        public string LokacijaPoletanja { get; set; }

        [Required]
        public string LokacijaSletanja { get; set; }

        [JsonIgnore]
        public AvioKompanijaModel avioKompanija { get; set; }

    }
}
