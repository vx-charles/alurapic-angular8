import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginGuard } from "../core/auth/login.guard";
import { HomeComponent } from "./home.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: '', // rota subordinada ao pai, app.routing.module.ts
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // lazy load usa o forChild e forRoot é para o app.routing.module.ts
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {

}
