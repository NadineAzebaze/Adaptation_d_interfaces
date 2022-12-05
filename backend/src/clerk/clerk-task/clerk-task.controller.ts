import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
import { ClerkTask } from './clerk-task.interface';
import { ClerkTaskService } from './clerk-task.service';
import { TASK_LIST as MockedClerkTasks} from "../../mocks/clerk-task.mock";
import {Recipe} from "../../core/recipe/recipe.interface";

@Controller('clerk-task')
export class ClerkTaskController {
    tasks: ClerkTask[] = MockedClerkTasks;
    @Get()
    async getClerkTask(): Promise<ClerkTask[]> {
        return this.tasks;
    }

  constructor(private service: ClerkTaskService) {}

  @Get(":id")
  public  get(@Param() params: { id: String }): ClerkTask {
        const clerkTask = this.tasks.find(r => r.id === params.id);
        if(!clerkTask)
            throw new HttpException("Task not found.", HttpStatus.NOT_FOUND);
        return clerkTask;
  }


}
