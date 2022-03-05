import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddVisitreportComponent } from '../dialog-add-visitreport/dialog-add-visitreport.component';

export interface Task {
  name: string;
  completed: boolean;

  subtasks?: Task[];
}

@Component({
  selector: 'app-visitreport',
  templateUrl: './visitreport.component.html',
  styleUrls: ['./visitreport.component.scss']
})
export class VisitreportComponent implements OnInit {
  type: string = 'Besuch bei';
  types: string[] = ['Besuch', 'Baustellenbesuch', 'Znüni', 'Mittagessen'];

  task: Task = {
    name: '',
    completed: false,

    subtasks: [
      { name: 'Katalog', completed: false },
      { name: 'Flayer 2', completed: false },
      { name: 'Flayer 3', completed: false },
    ],
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddVisitreportComponent)
  }

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

  onNoClick() {

  }

  saveUser() {

  }

}
