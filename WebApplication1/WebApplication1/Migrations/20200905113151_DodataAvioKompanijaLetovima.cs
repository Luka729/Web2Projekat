using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class DodataAvioKompanijaLetovima : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_AvioKompanija_AvioKompanijaModelId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_AvioKompanijaModelId",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "AvioKompanijaModelId",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "avioKompanijaId",
                table: "Letovi",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_avioKompanijaId",
                table: "Letovi",
                column: "avioKompanijaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_AvioKompanija_avioKompanijaId",
                table: "Letovi",
                column: "avioKompanijaId",
                principalTable: "AvioKompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_AvioKompanija_avioKompanijaId",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_avioKompanijaId",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "avioKompanijaId",
                table: "Letovi");

            migrationBuilder.AddColumn<int>(
                name: "AvioKompanijaModelId",
                table: "Letovi",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_AvioKompanijaModelId",
                table: "Letovi",
                column: "AvioKompanijaModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_AvioKompanija_AvioKompanijaModelId",
                table: "Letovi",
                column: "AvioKompanijaModelId",
                principalTable: "AvioKompanija",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
