using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodatRentACarAutomobilu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Automobili_RentACar_RentACarModelId",
                table: "Automobili");

            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_AvioKompanija_avioKompanijaId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Automobili_RentACarModelId",
                table: "Automobili");

            migrationBuilder.DropColumn(
                name: "RentACarModelId",
                table: "Automobili");

            migrationBuilder.AlterColumn<int>(
                name: "avioKompanijaId",
                table: "Letovi",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "rentACarId",
                table: "Automobili",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Automobili_rentACarId",
                table: "Automobili",
                column: "rentACarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Automobili_RentACar_rentACarId",
                table: "Automobili",
                column: "rentACarId",
                principalTable: "RentACar",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_AvioKompanija_avioKompanijaId",
                table: "Letovi",
                column: "avioKompanijaId",
                principalTable: "AvioKompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Automobili_RentACar_rentACarId",
                table: "Automobili");

            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_AvioKompanija_avioKompanijaId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Automobili_rentACarId",
                table: "Automobili");

            migrationBuilder.DropColumn(
                name: "rentACarId",
                table: "Automobili");

            migrationBuilder.AlterColumn<int>(
                name: "avioKompanijaId",
                table: "Letovi",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RentACarModelId",
                table: "Automobili",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Automobili_RentACarModelId",
                table: "Automobili",
                column: "RentACarModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Automobili_RentACar_RentACarModelId",
                table: "Automobili",
                column: "RentACarModelId",
                principalTable: "RentACar",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_AvioKompanija_avioKompanijaId",
                table: "Letovi",
                column: "avioKompanijaId",
                principalTable: "AvioKompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
