import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ClerkModule } from './clerk/clerk.module';

@Module({
  imports: [CoreModule, ClerkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
