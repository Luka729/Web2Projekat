using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("Automobili")]
    public class AutomibilModel
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Brend { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public int Godina { get; set; }

        [Required]
        public double CenaPoDanu { get; set; }

        [JsonIgnore]
        public RentACarModel rentACar { get; set; }

    }
}
