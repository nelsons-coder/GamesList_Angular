import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { SafePipe } from './safe.pipe';
import { HttpClientModule } from "@angular/common/http";
import { GameApiComponent } from './game-api/game-api.component';
import { CommonModule } from "@angular/common";
import { GameCardComponent } from './game-card/game-card.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    HomeComponent,
    CardComponent,
    NotfoundComponent,
    SafePipe,
    GameApiComponent,
    GameCardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
