import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonMenuComponent } from './mon-menu/mon-menu.component';
import { SomeFrameworksComponent } from './some-frameworks/some-frameworks.component';
import { UpdateFrameworkComponent } from './update-framework/update-framework.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

const routes: Routes = [
{path:'allframeworks', component:FrameworksComponent},
{path:'update', component:UpdateFrameworkComponent},
{path:'allframeworks/:an/:side', component:SomeFrameworksComponent},
{path:'', redirectTo:'frameworks', pathMatch:'full'},
{path:'**', component:IntrouvableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
