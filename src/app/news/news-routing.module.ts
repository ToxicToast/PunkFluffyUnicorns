import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsIndexContainerComponent } from '@news/containers/news-index-container/news-index-container.component';

const routes: Routes = [
  { path: '', component: NewsIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
