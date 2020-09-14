using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodatoVremeIbool : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "PrihvatioPozivnicu",
                table: "RezervacijaTabela",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "vremeKreiranjaRezervacije",
                table: "RezervacijaTabela",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrihvatioPozivnicu",
                table: "RezervacijaTabela");

            migrationBuilder.DropColumn(
                name: "vremeKreiranjaRezervacije",
                table: "RezervacijaTabela");
        }
    }
}
