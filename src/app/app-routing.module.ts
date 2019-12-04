import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { LandingComponent } from './landing/landing.component';
import { TesterComponent } from './tester/tester.component';
import { DownloadComponent } from './download/download.component';
import { SellrecComponent } from './sellrec/sellrec.component';
import { DersComponent } from './regulator/ders/ders.component';
import { CustomerComponent } from './customer/customer.component';
import { ConsumptionComponent } from './customer/consumption/consumption.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'tester', component: TesterComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'sellrec', component: SellrecComponent },
  { path: 'ders', component: DersComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'consumption', component: ConsumptionComponent },
  { path: 'market', component: MarketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
