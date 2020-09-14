import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ProyectosComponent } from '../app/proyectos/proyectos.component';
import { ContactoComponent } from '../app/contacto/contacto.component';
import { PerfilComponent } from '../app/perfil/perfil.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proyecto', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent }, 
  { path: 'perfil', component: PerfilComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
