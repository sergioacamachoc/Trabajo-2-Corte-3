import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CoccionComponent } from './components/coccion/coccion.component';
import { DecoradorComponent } from './components/decorador/decorador.component';
import { ElaboracionComponent } from './components/elaboracion/elaboracion.component';
import { FinalComponent } from './components/final/final.component';
import { HornoComponent } from './components/horno/horno.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { PasteleroComponent } from './components/pastelero/pastelero.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'main',component:MainComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'pastelero',component:PasteleroComponent},
    {path:'decorador',component:DecoradorComponent},
    {path:'ingredientes',component:IngredientesComponent},
    {path:'elaboracion',component:ElaboracionComponent},
    {path:'coccion',component:CoccionComponent},
    {path:'horno',component:HornoComponent},
    {path:'final',component:FinalComponent},
    {path:'solicitud',component:SolicitudComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CoccionComponent,
    DecoradorComponent,
    ElaboracionComponent,
    FinalComponent,
    HornoComponent,
    IngredientesComponent,
    PasteleroComponent,
    SolicitudComponent,
    MenuComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
