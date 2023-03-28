import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './Components/about/about.component';
// import { ContactComponent } from './Components/contact/contact.component';
// import { HomeComponent } from './Components/home/home.component';

// import { PortofolioComponent } from './Components/portofolio/portofolio.component';

const routes: Routes = [

  // { path:'portofolio',component:PortofolioComponent},
  // { path:'about',component:AboutComponent},
  // { path:'contact',component:ContactComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
