import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StaffsNewStaffRoutingModule } from './staffs-new-staff-routing.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, StaffsNewStaffRoutingModule]
})
export class StaffsNewStaffModule {}
