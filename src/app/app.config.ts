import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), //Captura errores globales
    provideZonelessChangeDetection(), //Habilita deteccion de cambios sin Zone.js
    provideRouter(routes), //Para poder utilizar rutas (Habilita routing)
    provideHttpClient(), //Habilitamos HttpClient en toda la app
  ]
};
