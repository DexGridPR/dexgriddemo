import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { LandingComponent } from './landing/landing.component';
import { TesterComponent } from './tester/tester.component';
import { DownloadComponent } from './download/download.component';
import { SellrecComponent } from './sellrec/sellrec.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'tester', component: TesterComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'sellrec', component: SellrecComponent },
  { path: 'market', component: MarketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
