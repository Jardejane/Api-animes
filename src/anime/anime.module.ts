import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { Anime, animeSchema } from './entities/anime.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Anime.name, schema: animeSchema }]),
  ],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
