import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './private/header/header.component';
import { MainComponent } from './private/main/main.component';
import { PrivateComponent } from './private/private.component';
import { AppRouting } from './app-routing.module';
import { DashboardComponent } from './private/main/dashboard/dashboard.component';
import { TeamsComponent } from './private/main/teams/teams.component';
import { MatchesComponent } from './private/main/matches/matches.component';
import { ProfileComponent } from './private/main/profile/profile.component';
import { TeamComponent } from './private/main/teams/team/team.component';
import { AddPlayerComponent } from './private/main/teams/team/add-player/add-player.component';
import { EditTeamComponent } from './private/main/teams/team/edit-team/edit-team.component';
import { MyProfileComponent } from './private/main/profile/my-profile/my-profile.component';
import { PlayerProfileComponent } from './private/main/profile/player-profile/player-profile.component';
import { EditProfileComponent } from './private/main/profile/edit-profile/edit-profile.component';
import { MenuService } from './shared/menu.service';
import { ClickOutsideDirective } from './shared/click-outside.directive';
import { CreateTeamComponent } from './private/main/teams/create-team/create-team.component';
import { PreviousUrlService } from './shared/prevUrl.service';
import { CreateMatchComponent } from './private/main/matches/create-match/create-match.component';
import { TeamRequestsComponent } from './private/main/teams/team-requests/team-requests.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PrivateComponent,
    DashboardComponent,
    TeamsComponent,
    MatchesComponent,
    ProfileComponent,
    TeamComponent,
    EditTeamComponent,
    AddPlayerComponent,
    MyProfileComponent,
    PlayerProfileComponent,
    EditProfileComponent,
    ClickOutsideDirective,
    CreateTeamComponent,
    CreateMatchComponent,
    TeamRequestsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [MenuService, PreviousUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
