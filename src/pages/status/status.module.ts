import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    StatusPage,
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
  ],
  entryComponents: [
    LoginPage,
    HomePage,
  ],
})
export class StatusPageModule {}
