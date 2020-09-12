using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodataSedista2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_SlobodnaMestaId",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "SlobodnaMestaId",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "SlobodnaMesta",
                table: "Letovi",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SlobodnaMestaModelId",
                table: "Letovi",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_SlobodnaMestaModelId",
                table: "Letovi",
                column: "SlobodnaMestaModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaModelId",
                table: "Letovi",
                column: "SlobodnaMestaModelId",
                principalTable: "Sedista",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaModelId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_SlobodnaMestaModelId",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "SlobodnaMesta",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "SlobodnaMestaModelId",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "SlobodnaMestaId",
                table: "Letovi",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_SlobodnaMestaId",
                table: "Letovi",
                column: "SlobodnaMestaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Sedista_SlobodnaMestaId",
                table: "Letovi",
                column: "SlobodnaMestaId",
                principalTable: "Sedista",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
