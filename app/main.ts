import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './module';
import{ enableProdMode } from '@angular/core';

const platform = platformBrowserDynamic().bootstrapModule(AppModule);
