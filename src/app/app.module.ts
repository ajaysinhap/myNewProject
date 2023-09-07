import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';        
import { getAuth, provideAuth } from '@angular/fire/auth';        
import { getFirestore, provideFirestore } from '@angular/fire/firestore';        
import { getStorage, provideStorage } from '@angular/fire/storage';        
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics'; 

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),     
    provideFirestore(() => getFirestore()),  
    provideAuth(() => getAuth()),  
    provideStorage(() => getStorage()),  
    provideAnalytics(() => getAnalytics()),

   
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
