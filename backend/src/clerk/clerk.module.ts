import { Module } from '@nestjs/common';
import { SocketGateway } from 'src/core/socket-gateway/socket.gateway';
import { ClerkTaskController } from './clerk-task/clerk-task.controller';
import { ClerkTaskService } from './clerk-task/clerk-task.service';

@Module({
  controllers: [ClerkTaskController],
  providers: [ClerkTaskService, SocketGateway],
})
export class ClerkModule {}
