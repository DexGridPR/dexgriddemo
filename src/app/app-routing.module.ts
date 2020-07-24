import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
// import { LandingComponent } from './landing/landing.component';
import { TesterComponent } from './tester/tester.component';
import { DownloadComponent } from './download/download.component';
import { SellrecComponent } from './customer/sellrec/sellrec.component';
import { DersComponent } from './regulator/ders/ders.component';
import { CustomerComponent } from './customer/customer.component';
import { ConsumptionComponent } from './customer/consumption/consumption.component';
import { TermsComponent } from './customer/terms/terms.component';
import { RegcontrolComponent } from './regulator/regcontrol/regcontrol.component';
import { AccountComponent } from './goperator/account/account.component';
import { CreditsComponent } from './customer/credits/credits.component';
import { SettingsComponent } from './customer/settings/settings.component';
import { ThemarketComponent } from './customer/themarket/themarket.component';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginProducerComponent } from 'src/app/login-producer/login-producer.component';
import { DemoProducerComponent } from 'src/app/demo-producer/demo-producer.component';
import { GeneratorComponent } from 'src/app/generator/generator.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logingenerator', component: LoginProducerComponent },
  { path: 'tester', component: TesterComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'sellrec', component: SellrecComponent },
  { path: 'ders', component: DersComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'consumption', component: ConsumptionComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'regcontrol', component: RegcontrolComponent },
  { path: 'account', component: AccountComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'themarket', component: ThemarketComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'generatordemo', component: DemoProducerComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
