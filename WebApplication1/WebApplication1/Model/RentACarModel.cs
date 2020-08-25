﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("RentACar")]

    public class RentACarModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string NazivServisa { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string AdresaServisa { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string PromoOpis { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public double CenovnikUsluga { get; set; }

        [Required]
        public ICollection<AutomibilModel> SpisakAutomobila { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string Filijale { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public double Ocena { get; set; }

    }
}
