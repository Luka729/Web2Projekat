using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class AvioKompanije : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AvioCompany",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Adress = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    AverageRate = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvioCompany", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Destination",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    AvioCompanyId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destination", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Destination_AvioCompany_AvioCompanyId",
                        column: x => x.AvioCompanyId,
                        principalTable: "AvioCompany",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Flight",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    DepartureDate = table.Column<string>(nullable: true),
                    LandingDate = table.Column<string>(nullable: true),
                    HourFlight = table.Column<int>(nullable: false),
                    Minutes = table.Column<int>(nullable: false),
                    Length = table.Column<int>(nullable: false),
                    NumberOfTransit = table.Column<int>(nullable: false),
                    LocationOfTransit = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false),
                    AvailableSeats = table.Column<int>(nullable: false),
                    aivoCompIDId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flight", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Flight_AvioCompany_aivoCompIDId",
                        column: x => x.aivoCompIDId,
                        principalTable: "AvioCompany",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Destination_AvioCompanyId",
                table: "Destination",
                column: "AvioCompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Flight_aivoCompIDId",
                table: "Flight",
                column: "aivoCompIDId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destination");

            migrationBuilder.DropTable(
                name: "Flight");

            migrationBuilder.DropTable(
                name: "AvioCompany");
        }
    }
}
