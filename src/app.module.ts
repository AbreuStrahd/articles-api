import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtigoController } from './artigo.controller';
import { ArtigosServices } from './artigo.services';


@Module({
  imports: [] ,
  controllers: [AppController, ArtigoController],
  providers: [AppService, ArtigosServices],
})
export class AppModule {}
