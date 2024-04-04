import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {initializeFaro} from '../src/app/Obs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  initializeFaro();