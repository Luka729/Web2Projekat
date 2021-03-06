﻿using System;
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
        
        public string Brend { get; set; }

        public string Model { get; set; }

        public int Godina { get; set; }

        public double CenaPoDanu { get; set; }



        [JsonIgnore]
        public RentACarModel rentACar { get; set; }

    }
}
