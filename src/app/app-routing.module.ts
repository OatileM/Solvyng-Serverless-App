import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/profile',
    pathMatch: 'full',
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: 'signIn',
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },

      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'upload',
    component: UploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
