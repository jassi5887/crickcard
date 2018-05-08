import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './private/main/dashboard/dashboard.component';
import { TeamsComponent } from './private/main/teams/teams.component';
import { MatchesComponent } from './private/main/matches/matches.component';
import { ProfileComponent } from './private/main/profile/profile.component';
import { TeamComponent } from './private/main/teams/team/team.component';
import { EditTeamComponent } from './private/main/teams/team/edit-team/edit-team.component';
import { AddPlayerComponent } from './private/main/teams/team/add-player/add-player.component';
import { PlayerProfileComponent } from './private/main/profile/player-profile/player-profile.component';
import { MyProfileComponent } from './private/main/profile/my-profile/my-profile.component';
import { EditProfileComponent } from './private/main/profile/edit-profile/edit-profile.component';
import { CreateTeamComponent } from './private/main/teams/create-team/create-team.component';
import { CreateMatchComponent } from './private/main/matches/create-match/create-match.component';
import { TeamRequestsComponent } from './private/main/teams/team-requests/team-requests.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatchComponent } from './private/main/matches/match/match.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { HomeComponent } from './public/home/home.component';

const appRoutes: Routes = [
    { path: '', component: PrivateComponent, canActivate: [AuthGuardService], children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'teams', component: TeamsComponent, children: [
            { path: 'create', component: CreateTeamComponent },
            { path: 'requests', component: TeamRequestsComponent },
            { path: ':id', component: TeamComponent, children: [
                { path: 'add', component: AddPlayerComponent },
                { path: 'edit', component: EditTeamComponent }
            ]}
        ]},
        { path: 'matches', component: MatchesComponent, children: [
            { path: 'create', component: CreateMatchComponent },
            { path: ':id', component: MatchComponent }
        ]},
        { path: 'profile', component: ProfileComponent, children: [
            { path: '', component: MyProfileComponent, children: [
                { path: 'edit', component: EditProfileComponent }
            ]},
            { path: ':id', component: PlayerProfileComponent }
        ]}
    ]},
    { path: '', component:  PublicComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]},
    { path: 'page-not-found', component: PageNotFoundComponent }, 
    { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRouting {
    
}