using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class AviokompanijaTabela : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AvioKompanija",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(nullable: false),
                    Adresa = table.Column<string>(nullable: false),
                    PromoOpis = table.Column<string>(nullable: false),
                    Ocena = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvioKompanija", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Letovi",
                columns: table => new
                {
                    //ovde dodati lokaciju kretanja i sletanja
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DatumPoletanja = table.Column<DateTime>(nullable: false),
                    DatumSletanja = table.Column<DateTime>(nullable: false),
                    SatPutovanja = table.Column<DateTime>(nullable: false),
                    MinutPutovanja = table.Column<DateTime>(nullable: false),
                    DuzinaPutovanja = table.Column<double>(nullable: false),
                    BrojPresedanja = table.Column<int>(nullable: false),
                    LokacijaPresedanja = table.Column<string>(nullable: true),
                    CenaKarte = table.Column<double>(nullable: false),
                    SlobodnaMesta = table.Column<int>(nullable: false),
                    AvioKompanijaModelId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Letovi", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Letovi_AvioKompanija_AvioKompanijaModelId",
                        column: x => x.AvioKompanijaModelId,
                        principalTable: "AvioKompanija",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_AvioKompanijaModelId",
                table: "Letovi",
                column: "AvioKompanijaModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Letovi");

            migrationBuilder.DropTable(
                name: "AvioKompanija");
        }
    }
}
