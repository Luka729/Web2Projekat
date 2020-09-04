using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodavanjeMestaSletanjaPoletanja : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LokacijaPoletanja",
                table: "Letovi",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LokacijaSletanja",
                table: "Letovi",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LokacijaPoletanja",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "LokacijaSletanja",
                table: "Letovi");
        }
    }
}
