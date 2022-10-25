import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type animeDocument = Anime & Document;

@Schema()
export class Anime {
  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop()
  character: string;

  @Prop()
  year: number;

  @Prop()
  description: string;
}

export const animeSchema = SchemaFactory.createForClass(Anime);
