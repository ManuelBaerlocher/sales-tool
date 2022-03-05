import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FlayertransmitComponent } from './flayertransmit/flayertransmit.component';
import { PendingissuesComponent } from './pendingissues/pendingissues.component';
import { VisitreportComponent } from './visitreport/visitreport.component';




const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'flayer', component: FlayertransmitComponent},
  { path: 'pending', component: PendingissuesComponent},
  { path: 'visitreport', component: VisitreportComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }