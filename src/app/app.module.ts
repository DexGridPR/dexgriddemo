import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LandingComponent } from './landing/landing.component';
import { MarketComponent } from './market/market.component';
import { RegulatorComponent, RegBottomSheet } from './regulator/regulator.component';
import { CustomerComponent, CusBottomSheet } from './customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SellrecComponent } from './sellrec/sellrec.component';
import { TesterComponent } from './tester/tester.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DemotbarComponent } from './demotbar/demotbar.component';
import { MatMenuModule} from '@angular/material/menu';
import { GoperatorComponent, BottomSheet } from './goperator/goperator.component';
import { HistoryComponent } from './history/history.component';
import { RegaccComponent } from './regacc/regacc.component';
import { TermsComponent } from './terms/terms.component';
import { DersComponent } from './regulator/ders/ders.component';
import { DownloadComponent } from './download/download.component';

import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';


// import { WEB3PROVIDER } from './web3-provider';

const WEB3PROVIDER = new InjectionToken('Web3 provider', {
  providedIn: 'root',
  factory: () => (window as any).ethereum
});


// export function enableWeb3Provider(provider) {
//   console.log("Running app.module function enableWeb3Provider");
//   console.log("Provider:", provider)
//   return () => {
//     provider.enable();  // Ask the user to enable MetaMask at load time.
//   };
// }

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
    DownloadComponent,
    BottomSheet,
    RegBottomSheet,
    CusBottomSheet
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBottomSheetModule,
    MatCardModule,
    MatProgressBarModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [BottomSheet, RegBottomSheet, CusBottomSheet],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: enableWeb3Provider,
    //   deps: [WEB3PROVIDER],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
