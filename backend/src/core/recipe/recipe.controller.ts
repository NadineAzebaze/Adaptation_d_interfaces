import { Controller, Get, HttpCode, HttpException, HttpStatus, Param } from '@nestjs/common';
import { default as MockedRecipes } from '../../mocks/recipes.mock.json';
import { Recipe } from './recipe.interface';

@Controller('recipe')
export class RecipeController {
    recipes: Recipe[] = MockedRecipes;

    @Get()
    async getRecipes(): Promise<Recipe[]> {
        return this.recipes;
    }

    @Get(":id")
    async getRecipe(@Param() params: { id: String }): Promise<Recipe> {
        const recipe = this.recipes.find(r => r.id === params.id);
        if(!recipe)
            throw new HttpException("Recipe not found.", HttpStatus.NOT_FOUND);
        return recipe;
    }
}
