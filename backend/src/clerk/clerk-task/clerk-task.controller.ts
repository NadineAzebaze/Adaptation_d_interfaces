import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ClerkTask } from './clerk-task.interface';
import { ClerkTaskService } from './clerk-task.service';

@Controller('clerk-task')
export class ClerkTaskController {

    constructor(private service: ClerkTaskService) {}

    @Get()
    public getAll(): ClerkTask[] {
        return this.service.getAll();
    }

    @Get(":id")
    public get(@Param() params: { id: string }): ClerkTask {
        var result = this.service.get(params.id);
        if(!result)
            throw new HttpException("Task not found.", HttpStatus.NOT_FOUND);
        return result;
    }
}
