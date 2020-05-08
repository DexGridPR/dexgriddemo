import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
// import { LandingComponent } from './landing/landing.component';
import { DemoComponent } from './demo/demo.component';
import { RegulatorComponent, RegBottomSheet } from './regulator/regulator.component';
import { CustomerComponent, CusBottomSheet, CusBottomWarn } from './customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SellrecComponent } from './customer/sellrec/sellrec.component';
import { TesterComponent } from './tester/tester.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DemotbarComponent } from './demotbar/demotbar.component';
import { MatMenuModule} from '@angular/material/menu';
import { GoperatorComponent, BottomSheet } from './goperator/goperator.component';
import { HistoryComponent } from './customer/history/history.component';
import { RegaccComponent } from './goperator/regacc/regacc.component';
import { DersComponent } from './regulator/ders/ders.component';
import { DownloadComponent } from './download/download.component';
import { TermsComponent } from './customer/terms/terms.component';


import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { ConsumptionComponent } from './customer/consumption/consumption.component';
import { RegcontrolComponent } from './regulator/regcontrol/regcontrol.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './goperator/account/account.component';
import { CreditsComponent } from './customer/credits/credits.component';
import { SettingsComponent } from './customer/settings/settings.component';
import { ThemarketComponent } from './customer/themarket/themarket.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// import { Http, Headers } from '@angular/http';
import { NewUserComponent } from './customer/new-user/new-user.component';
// import { CommComponent } from './landing/comm/comm.component';
import { GridmarketComponent } from './goperator/gridmarket/gridmarket.component';
// import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UsersettingsComponent } from './customer/usersettings/usersettings.component';
import { LoginComponent } from './login/login.component';


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
    // LandingComponent,
    DemoComponent,
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
    SettingsComponent,
    BottomSheet,
    RegBottomSheet,
    CusBottomSheet, 
    CusBottomWarn,
    ConsumptionComponent, RegcontrolComponent, AccountComponent, CreditsComponent, SettingsComponent, ThemarketComponent, NewUserComponent, 
    // CommComponent, 
    GridmarketComponent, UsersettingsComponent, LoginComponent
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
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    HttpClientModule,
    // HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [BottomSheet, RegBottomSheet, CusBottomSheet, CusBottomWarn, NewUserComponent, 
    // CommComponent
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
