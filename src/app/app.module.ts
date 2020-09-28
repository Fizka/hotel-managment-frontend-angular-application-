import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkerComponent } from './components/worker/worker.component';
import { CreateWorkerComponent } from './components/create-worker/create-worker.component';
import { WorkerBoardComponent } from './components/worker-board/worker-board.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { MenuComponent } from './page/menu/menu.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RoomBoardComponent } from './components/room-board/room-board.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { RoomTabComponent } from './components/room-tab/room-tab.component';
import { WorkerTabComponent } from './components/worker-tab/worker-tab.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerBoardComponent } from './components/customer-board/customer-board.component';
import { ReservationCreateComponent } from './components/reservation-create/reservation-create.component';
import { CustomerSignInComponent } from './components/customer-sign-in/customer-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerComponent,
    CreateWorkerComponent,
    WorkerBoardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SignInComponent,
    SignUpComponent,
    RoomBoardComponent,
    RoomDetailsComponent,
    ReservationDetailsComponent,
    RoomTabComponent,
    WorkerTabComponent,
    CustomerDetailsComponent,
    CustomerBoardComponent,
    ReservationCreateComponent,
    CustomerSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
