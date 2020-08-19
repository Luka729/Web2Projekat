export class AutomobiliEntiteti {
    id: number;
    brand: string;
    model: string;
    year: number;
    pricePerDay: number;

    constructor(id: number, brand: string, model: string, year: number, pricePerDay: number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.pricePerDay = pricePerDay;
    }
}
