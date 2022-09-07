import { Injectable } from "@nestjs/common";
import { Artigo } from "./artigo.model";
import * as data1 from "./titles.json";
import * as data2 from "./urls.json";

const title = []
let allTitles = data1.arrayTitles;
allTitles.forEach(data1 => {
    title.push(data1)
    return title 
});

const url = [];
let allUrls = data2.arrayUrls;
allUrls.forEach(data2 => {
    url.push(data2)
    return url
});



@Injectable()
export class ArtigosServices {

    private readonly artigo: Artigo[] =
    [
        new Artigo(title[0], url[0]),
        new Artigo(title[1], url[1]),
        new Artigo(title[2], url[2]),
        new Artigo(title[3], url[3]),
        new Artigo(title[4], url[4]),
        new Artigo(title[5], url[5]),
        new Artigo(title[6], url[6]),
        new Artigo(title[7], url[7]),
        new Artigo(title[8], url[8]),
        new Artigo(title[9], url[9]),
        new Artigo(title[10], url[10]),
        new Artigo(title[11], url[11]),
    ]


    obterTodos(): Artigo[] {
        return this.artigo;
    }

    alterar(artigo: Artigo): Artigo {
        return artigo;
    }

    apagar(id:number){
        this.artigo.pop();
    }
    }