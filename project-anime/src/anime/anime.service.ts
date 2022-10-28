import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Anime, animeDocument } from './entities/anime.entity';

@Injectable()
export class AnimeService {
  constructor(
    @InjectModel(Anime.name) private animeModel: Model<animeDocument>,
  ) {}

  create(createAnimeDto: CreateAnimeDto) {
    const anime = new this.animeModel(createAnimeDto);
    return anime.save();
  }

  findAll() {
    return this.animeModel.find();
  }

  findOne(id: string) {
    return this.animeModel.findById(id);
  }

  update(id: string, updateAnimeDto: UpdateAnimeDto) {
    return this.animeModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateAnimeDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.animeModel.deleteOne({ _id: id }).exec();
  }
}
