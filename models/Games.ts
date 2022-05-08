export class Game {

    name : string;
    description : string;
    type : string;
    price : number;
    developer : string;
    launchDate : string;
    img : string;
    trailer : string;

    constructor(name : string, description : string, type : string, price : number, developer : string, launchDate : string, img : string, trailer : string) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.price = price;
        this.developer = developer;
        this.launchDate = launchDate;
        this.img = img;
        this.trailer = `https://www.youtube.com/embed/${trailer}`;
    }
}