/* eslint-disable */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
  await app.listen(3000).then(() =>{
    // eslint-disable-next-line
    console.log("The server listen on : http://localhost:3000")
  })

}
bootstrap();
