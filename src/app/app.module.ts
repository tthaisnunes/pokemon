import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { CardComponent } from './components/card/card.component';
import { AttackDetailsComponent } from './components/attack-details/attack-details.component';
import { CardDetailsComponent } from './containers/card-details/card-details.component';
import { CardListComponent } from './containers/card-list/card-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { ENDPOINTS } from './core/api/api.service';
import { api } from './core/api/api';

const API = { provide: ENDPOINTS, multi: true, useValue: api };

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDetailsComponent,
    AttackDetailsComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCarouselModule.forRoot()
  ],
  providers: [
    API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
