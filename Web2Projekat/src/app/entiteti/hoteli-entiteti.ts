export class HoteliEntiteti {
    id: number;
    name: string;
    address: string;
    rate: number;
    pricesFrom: number;
    pricesTo: number;

    constructor(id: number, name: string, address: string, rate: number, pricesFrom: number, pricesTo: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.rate = rate;
        this.pricesFrom = pricesFrom;
        this.pricesTo = pricesTo;
    }
}
