export class gameAPI {
    id : number;
    name :string;
    background_image : string;
    rating_top : number;
    released : Date;

    constructor(id : number, name : string, img : string, rating : number, released : Date){
        this.id = id;
        this.name = name;
        this.background_image = img;
        this.rating_top = rating;
        this.released = released;
    }
}