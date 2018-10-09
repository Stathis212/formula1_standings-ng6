import { HttpErrorInterceptor } from './interceptors';
import { DriversStorage } from './storage';
import { NotFoundPageComponent } from './containers';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { Api } from './services';


export const containers: any = [
  AppComponent,
  NotFoundPageComponent
];

export const components: any = [
  HeaderComponent,
  FooterComponent,
  PreloaderComponent
];

export const interceptors: any = [
  HttpErrorInterceptor
];

export const services: any = [
  Api
];

export const storage: any = [
  DriversStorage
];

