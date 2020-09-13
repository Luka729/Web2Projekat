using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodataRezervacija3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sedista_RezervacijaTabela_RezervacijaModelId",
                table: "Sedista");

            migrationBuilder.DropIndex(
                name: "IX_Sedista_RezervacijaModelId",
                table: "Sedista");

            migrationBuilder.DropColumn(
                name: "RezervacijaModelId",
                table: "Sedista");

            migrationBuilder.AddColumn<int>(
                name: "rezervacijaId",
                table: "Sedista",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sedista_rezervacijaId",
                table: "Sedista",
                column: "rezervacijaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sedista_RezervacijaTabela_rezervacijaId",
                table: "Sedista",
                column: "rezervacijaId",
                principalTable: "RezervacijaTabela",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sedista_RezervacijaTabela_rezervacijaId",
                table: "Sedista");

            migrationBuilder.DropIndex(
                name: "IX_Sedista_rezervacijaId",
                table: "Sedista");

            migrationBuilder.DropColumn(
                name: "rezervacijaId",
                table: "Sedista");

            migrationBuilder.AddColumn<int>(
                name: "RezervacijaModelId",
                table: "Sedista",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sedista_RezervacijaModelId",
                table: "Sedista",
                column: "RezervacijaModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sedista_RezervacijaTabela_RezervacijaModelId",
                table: "Sedista",
                column: "RezervacijaModelId",
                principalTable: "RezervacijaTabela",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
