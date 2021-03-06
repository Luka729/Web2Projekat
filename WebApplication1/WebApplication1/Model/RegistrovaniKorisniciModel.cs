﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("RegistrovaniKorisnici")]

    public class RegistrovaniKorisniciModel : IdentityUser
    {
        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string Ime { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string Prezime { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(30)]
        public string Grad { get; set; }

        public bool ImaServis { get; set; }

        [JsonIgnore]
        public ICollection<RegistrovaniKorisniciModel> ListaPrijatelja { get; set; }

        public bool prvaPrijavaAdmina { get; set; }
    }
}
