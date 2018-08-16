import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Manage Your Tasks</h1>
      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example.</p>
    </div>
  `,
  styles: []
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
