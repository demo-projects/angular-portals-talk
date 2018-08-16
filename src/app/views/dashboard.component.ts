import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">The Dashboard</h1>
      <p class="lead">This dashboard will be available to registered users only</p>
    </div>
  `,
})
export class DashboardComponent  {}
