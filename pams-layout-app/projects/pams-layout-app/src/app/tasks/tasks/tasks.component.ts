import { Component, OnInit } from '@angular/core';
import { UserService } from '@NickStitely/my-lib';

interface Task {
  id: number;
  type: string;
  name: string;
  createdDate: Date;
}

@Component({
  standalone: false,
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.generateTasks();
  }

  generateTasks(): void {
    const taskTypes = ['Bug', 'Feature', 'Enhancement', 'Documentation', 'Support'];
    const taskNames = [
      'Update user interface',
      'Fix login issue',
      'Implement new dashboard',
      'Update documentation',
      'Optimize database queries',
      'Add export functionality',
      'Fix navigation menu',
      'Implement user settings',
      'Add notification system',
      'Create reporting module'
    ];

    for (let i = 1; i <= 10; i++) {
      const randomType = taskTypes[Math.floor(Math.random() * taskTypes.length)];
      const randomName = taskNames[i - 1];
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30)); // Random date within last 30 days

      this.tasks.push({
        id: i,
        type: randomType,
        name: randomName,
        createdDate: randomDate
      });
    }
  }

  editTask(taskId: number): void {
    // This function intentionally does nothing as per requirements
    console.log(`Edit task ${taskId} clicked`);
  }
}
