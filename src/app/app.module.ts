import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LandingComponent } from './landing/landing.component';
import { MarketComponent } from './market/market.component';
import { RegulatorComponent } from './regulator/regulator.component';
import { CustomerComponent } from './customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SellrecComponent } from './sellrec/sellrec.component';
import { TesterComponent } from './tester/tester.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DemotbarComponent } from './demotbar/demotbar.component';
import { MatMenuModule} from '@angular/material/menu';
import { GoperatorComponent } from './goperator/goperator.component';
import { HistoryComponent } from './history/history.component';
import { RegaccComponent } from './regacc/regacc.component';
import { TermsComponent } from './terms/terms.component';
import { DersComponent } from './ders/ders.component';
import { DownloadComponent } from './download/download.component';

// import { WEB3PROVIDER } from './web3-provider';

const WEB3PROVIDER = new InjectionToken('Web3 provider', {
  providedIn: 'root',
  factory: () => (window as any).ethereum
});


export function enableWeb3Provider(provider) {
  return () => {
    provider.enable();  // Ask the user to enable MetaMask at load time.
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LandingComponent,
    MarketComponent,
    RegulatorComponent,
    CustomerComponent,
    FooterComponent,
    SellrecComponent,
    TesterComponent,
    DrawerComponent,
    DemotbarComponent,
    GoperatorComponent,
    HistoryComponent,
    RegaccComponent,
    TermsComponent,
    DersComponent,
    DownloadComponent  
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: enableWeb3Provider,
      deps: [WEB3PROVIDER],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
