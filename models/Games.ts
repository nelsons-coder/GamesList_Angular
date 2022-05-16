import { trigger } from "@angular/animations";

export class Game {

    name : string;
    id : number;
    description : string;
    type : string;
    price : number;
    developer : string;
    launchDate : Date;
    img : string;
    trailer : string;

    constructor(name : string, id : number, description : string, type : string, price : number, developer : string, launchDate : Date, img : string, trailer : string) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.type = type;
        this.price = price;
        this.developer = developer;
        this.launchDate = launchDate;
        this.img = img;
        this.trailer = trailer;
    }

    priceToString() : string {
        return this.price > 0 ? `${this.price} €` : 'Free';
    }

    adaptTrailer() : string {
        return `https://www.youtube.com/embed/${this.trailer.split('=')[1].split('&')[0]}`;
    }

    adaptDate() : string {
        return this.launchDate.toLocaleDateString();
    }
    

}