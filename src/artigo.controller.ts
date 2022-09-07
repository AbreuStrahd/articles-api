import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Artigo } from './artigo.model';
import { ArtigosServices } from "./artigo.services";

@Controller('Artigo')
export class ArtigoController{
    constructor(private artigosServices: ArtigosServices) {

    }

    @Get()
    obterTodos(): Artigo[] {
        return this.artigosServices.obterTodos();
    }

    @Put()
    alterar(@Body() artigo: Artigo) {
        return this.artigosServices.alterar(artigo)
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.artigosServices.apagar(params.id);
    }
}

