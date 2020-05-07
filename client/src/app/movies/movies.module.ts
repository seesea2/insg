import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@shared/shared.module";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, SharedModule, MoviesRoutingModule],
})
export class MoviesModule {}
