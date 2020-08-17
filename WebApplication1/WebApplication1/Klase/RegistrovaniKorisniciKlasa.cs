using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Klase
{
    public class RegistrovaniKorisniciKlasa
    {

        //[Key, DatabaseGenerated(DatabaseGeneratedOption.None)]

        [Key]
        public string eadresaProvera { get; set; }

        public string imeProvera { get; set; }

        public string prezimeProvera { get; set; }

        public string gradProvera { get; set; }

        public string telefonProvera { get; set; }

        public string lozinkaProvera { get; set; }


    }

}