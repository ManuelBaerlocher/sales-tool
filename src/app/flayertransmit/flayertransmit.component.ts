import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


export interface Task {
  name: string;
  completed: boolean;

  subtasks?: Task[];
}


@Component({
  selector: 'app-flayertransmit',
  templateUrl: './flayertransmit.component.html',
  styleUrls: ['./flayertransmit.component.scss']
})
export class FlayertransmitComponent implements OnInit {
  salutation: string = '';
  salutations: string[] = ['per du', 'per Sie'];

  task: Task = {
    name: '',
    completed: false,

    subtasks: [
      { name: 'Flayer 1', completed: false },
      { name: 'Flayer 2', completed: false },
      { name: 'Flayer 3', completed: false },
    ],
  };

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }



  constructor() { }

  ngOnInit(): void {
  }

}
