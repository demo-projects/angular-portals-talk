import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PortalModule} from '@angular/cdk/portal';
import {FooterComponent} from './components/footer.component';
import {NavbarComponent} from './components/navbar.component';
import {HomeComponent} from './views/home.component';
import {DashboardComponent} from './views/dashboard.component';
import {TasksComponent} from './views/tasks.component';
import {SupportComponent} from './views/support.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    TasksComponent,
    SupportComponent],
  imports     : [
    BrowserModule,
    PortalModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'tasks', component: TasksComponent},
      {path: 'support', component: SupportComponent},
    ]),
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
