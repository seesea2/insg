import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScraperComponent } from "./scraper.component";

const routes: Routes = [
  {
    path: "",
    component: ScraperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScraperRoutingModule {}
