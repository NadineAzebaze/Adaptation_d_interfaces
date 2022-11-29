import { Module } from '@nestjs/common';
import { RecipeController } from './recipe/recipe.controller';
import {Recipe} from './recipe/recipe.interface';

@Module({
  controllers: [RecipeController]
})
export class CoreModule {}
