import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LandingComponent } from './landing/landing.component';
import { MarketComponent } from './market/market.component';
import { RegulatorComponent, RegBottomSheet } from './regulator/regulator.component';
import { CustomerComponent, CusBottomSheet, CusBottomWarn } from './customer/customer.component';
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
import { HistoryComponent } from './customer/history/history.component';
import { RegaccComponent } from './regacc/regacc.component';
import { DersComponent } from './regulator/ders/ders.component';
import { DownloadComponent } from './download/download.component';
import { TermsComponent } from './customer/terms/terms.component';


import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { ConsumptionComponent } from './customer/consumption/consumption.component';
import { RegcontrolComponent } from './regulator/regcontrol/regcontrol.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './goperator/account/account.component';
import { CreditsComponent } from './customer/credits/credits.component';


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
    CusBottomSheet, 
    CusBottomWarn, 
    ConsumptionComponent, RegcontrolComponent, AccountComponent, CreditsComponent
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
    MatButtonModule,
    FlexLayoutModule,
    ChartsModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [BottomSheet, RegBottomSheet, CusBottomSheet, CusBottomWarn],
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
