import { Module } from '@nestjs/common';
import { ClerkTaskController } from './clerk-task/clerk-task.controller';
import { ClerkTaskService } from './clerk-task/clerk-task.service';

@Module({
  controllers: [ClerkTaskController],
  providers: [ClerkTaskService]
})
export class ClerkModule {}
