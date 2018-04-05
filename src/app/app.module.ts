import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { EventDetailPage} from '../pages/event-detail/event-detail';
// import { EventCreatePage} from '../pages/event-create/event-create';
// import { EventListPage} from '../pages/event-list/event-list';
// import { LoginPage } from '../pages/login/login';
// import { ProfilePage } from '../pages/profile/profile';
// import { ResetPasswordPage } from '../pages/reset-password/reset-password';
// import { SignupPage } from '../pages/signup/signup';

import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';



@NgModule({
  declarations: [
    MyApp,
    HomePage
    // EventDetailPage,
    // EventCreatePage,
    // EventListPage,
    // LoginPage,
    // ProfilePage,
    // ResetPasswordPage,
    // SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    AuthProvider,
    EventProvider,
    ProfileProvider
  ]
})
export class AppModule {}
