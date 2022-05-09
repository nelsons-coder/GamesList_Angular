export class Game {

    name : string;
    description : string;
    type : string;
    price : number;
    developer : string;
    launchDate : string;
    img : string;
    trailer : string;
    index : number;

    constructor(name : string, description : string, type : string, price : number, developer : string, launchDate : string, img : string, trailer : string) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.price = price;
        this.developer = developer;
        this.launchDate = launchDate;
        this.img = img;
        this.trailer = `https://www.youtube.com/embed/${trailer}`;
        this.index = 1; // Apenas para não inicializar vazio!
    }

    priceToString() : string {
        return this.price > 0 ? `${this.price} €` : 'Free';
    }

}