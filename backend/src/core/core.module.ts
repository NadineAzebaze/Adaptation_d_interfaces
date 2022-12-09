import { Module } from '@nestjs/common';
import { RecipeController } from './recipe/recipe.controller';
import {Recipe} from './recipe/recipe.interface';
import { SocketGateway } from './socket-gateway/socket.gateway';

@Module({
  controllers: [RecipeController],
  providers: [SocketGateway],
  exports: [SocketGateway]
})
export class CoreModule {}
