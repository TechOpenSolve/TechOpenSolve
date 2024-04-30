import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WomenInTechComponent } from './components/pages/women-in-tech/women-in-tech.component';
import { CareerGrowthComponent } from './components/pages/career-growth/career-growth.component';
import { EmploymentComponent } from './components/pages/employment/employment.component';
import { WorkEnvComponent } from './components/pages/work-env/work-env.component';
import { FreelancingComponent } from './components/pages/freelancing/freelancing.component';
import { CommunityComponent } from './components/pages/community/community.component';
import { OpenSourceComponent } from './components/pages/open-source/open-source.component';
import { HiringProcessComponent } from './components/hiring-process/hiring-process.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'women-in-tech', component: WomenInTechComponent },
  { path: 'career-growth', component: CareerGrowthComponent },
  { path: 'hiring-process', component: HiringProcessComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'work-environment', component: WorkEnvComponent },
  { path: 'freelancing', component: FreelancingComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'open-source', component: OpenSourceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];
