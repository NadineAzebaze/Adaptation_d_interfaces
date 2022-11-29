import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: "*"
  }
})
export class SocketGateway {
  @WebSocketServer()
  private server: Server;

  public emit(topic: string, content: any) {
    this.server.emit(topic, content);
  }
}
