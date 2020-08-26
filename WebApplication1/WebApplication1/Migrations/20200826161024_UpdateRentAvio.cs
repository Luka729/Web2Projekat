using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class UpdateRentAvio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Filijale",
                table: "RentACar",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AddColumn<string>(
                name: "Admin",
                table: "RentACar",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Admin",
                table: "AvioKompanija",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Admin",
                table: "RentACar");

            migrationBuilder.DropColumn(
                name: "Admin",
                table: "AvioKompanija");

            migrationBuilder.AlterColumn<string>(
                name: "Filijale",
                table: "RentACar",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
