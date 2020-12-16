import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WorkerComponent} from './components/worker-user/worker/worker.component';
import {CreateWorkerComponent} from './components/worker-user/create-worker/create-worker.component';
import {WorkerBoardComponent} from './components/worker-user/worker-board/worker-board.component';
import {HeaderComponent} from './page/header/header.component';
import {FooterComponent} from './page/footer/footer.component';
import {MenuComponent} from './page/menu/menu.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RoomBoardComponent} from './components/room-board/room-board.component';
import {RoomDetailsComponent} from './components/room-details/room-details.component';
import {RoomTabComponent} from './components/room-tab/room-tab.component';
import {WorkerTabComponent} from './components/worker-user/worker-tab/worker-tab.component';
import {CustomerDetailsComponent} from './components/customer-user/customer-details/customer-details.component';
import {CustomerBoardComponent} from './components/customer-user/customer-board/customer-board.component';
import {ReservationCreateComponent} from './components/reservation-create/reservation-create.component';
import {CustomerSignInComponent} from './components/customer-user/customer-sign-in/customer-sign-in.component';
import {WorkerEditComponent} from './components/worker-user/worker-edit/worker-edit.component';
import {AgGridModule} from 'ag-grid-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReservationBoardComponent} from './components/reservation-board/reservation-board.component';
import {RoomGridComponent} from './components/room-grid/room-grid.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalYesNoComponent} from './components/modal-yes-no/modal-yes-no.component';
import {EditCellRenderComponent} from './components/room-grid/edit-cell-render.component';
import {RoomEditComponent} from './components/room-edit/room-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RoomCreationerComponent} from './components/room-creationer/room-creationer.component';
import {WorkerEditTemplateComponent} from './components/worker-user/worker-board/worker-edit-template.component';
import { PanelWorkerResponsibilityComponent } from './components/panel-worker-responsibility/panel-worker-responsibility.component';
import {MatCardModule} from '@angular/material/card';
import { NewResponsiblilityComponent } from './components/new-responsiblility/new-responsiblility.component';
import {CustomerEditPassComponent} from './components/customer-user/customer-details/customer-edit-pass.component';
import {BlokCustomerComponent} from './components/customer-user/customer-board/blok-customer.component';
import { GridRoomWorkerComponent } from './components/grid-room-worker/grid-room-worker.component';

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
    RoomTabComponent,
    WorkerTabComponent,
    CustomerDetailsComponent,
    CustomerBoardComponent,
    ReservationCreateComponent,
    CustomerSignInComponent,
    WorkerEditComponent,
    ReservationBoardComponent,
    RoomGridComponent,
    ModalYesNoComponent,
    EditCellRenderComponent,
    RoomEditComponent,
    RoomCreationerComponent,
    WorkerEditTemplateComponent,
    PanelWorkerResponsibilityComponent,
    NewResponsiblilityComponent,
    CustomerEditPassComponent,
    BlokCustomerComponent,
    GridRoomWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalYesNoComponent]
})
export class AppModule {
}
