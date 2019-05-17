import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { InventoryComponent } from './inventory.component';

const routes: Routes = [{ path: '', component: InventoryComponent }];

@NgModule({
  declarations: [InventoryComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class StaffsInventoryModule {}
