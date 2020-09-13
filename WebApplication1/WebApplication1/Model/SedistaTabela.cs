using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [Table("Sedista")]
    public class SedistaTabela
    {
        [Key]
        public int Id { get; set; }

        public int IdLeta { get; set; }

        public int BrojSedista { get; set; }

        public bool Zauzeto { get; set; }

        public RezervacijaModel rezervacija { get; set; }
    }
}
