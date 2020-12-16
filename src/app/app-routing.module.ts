import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {RoomBoardComponent} from './components/room-board/room-board.component';
import {MenuComponent} from './page/menu/menu.component';
import {WorkerBoardComponent} from './components/worker-user/worker-board/worker-board.component';
import {RoomDetailsComponent} from './components/room-details/room-details.component';
import {WorkerComponent} from './components/worker-user/worker/worker.component';
import {CustomerDetailsComponent} from './components/customer-user/customer-details/customer-details.component';
import {CustomerBoardComponent} from './components/customer-user/customer-board/customer-board.component';
import {ReservationCreateComponent} from './components/reservation-create/reservation-create.component';
import {CustomerSignInComponent} from './components/customer-user/customer-sign-in/customer-sign-in.component';
import {CreateWorkerComponent} from './components/worker-user/create-worker/create-worker.component';
import {WorkerEditComponent} from './components/worker-user/worker-edit/worker-edit.component';
import {ReservationBoardComponent} from './components/reservation-board/reservation-board.component';
import {RoomGridComponent} from './components/room-grid/room-grid.component';
import {RoomCreationerComponent} from './components/room-creationer/room-creationer.component';
import {PanelWorkerResponsibilityComponent} from './components/panel-worker-responsibility/panel-worker-responsibility.component';
import {GridRoomWorkerComponent} from './components/grid-room-worker/grid-room-worker.component';

const routes: Routes = [
  {path: '', redirectTo: 'rommboard', pathMatch: 'full'},
  {path: 'signup', component: SignUpComponent},
  {path: 'log', component: CustomerSignInComponent},
  {path: 'roomboard', component: RoomBoardComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'workerboard', component: WorkerBoardComponent},
  {path: 'roomdetails/:id', component: RoomDetailsComponent},
  {path: 'workerdetails/:id', component: WorkerComponent},
  {path: 'customerdetails/:id', component: CustomerDetailsComponent},
  {path: 'profil', component: CustomerDetailsComponent},
  {path: 'customerboard', component: CustomerBoardComponent},
  {path: 'reservationcreate/:id', component: ReservationCreateComponent},
  {path: 'e_worker', component: SignInComponent},
  {path: 'workercreation', component: CreateWorkerComponent},
  {path: 'reservationboard', component: ReservationBoardComponent},
  {path: 'roomgrid', component: RoomGridComponent},
  {path: 'roomadd', component: RoomCreationerComponent},
  {path: 'panel', component: PanelWorkerResponsibilityComponent},
  {path: 'workergrid', component: GridRoomWorkerComponent},
  {path: 'editworker', component: WorkerEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
