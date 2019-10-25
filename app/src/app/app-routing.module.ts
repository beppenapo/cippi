import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { MediaComponent } from './media/media.component';
import { MapComponent} from './map/map.component';
import { PartnerComponent} from './partner/partner.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'media', component: MediaComponent},
  { path: 'map', component: MapComponent},
  { path: 'partner', component: PartnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
