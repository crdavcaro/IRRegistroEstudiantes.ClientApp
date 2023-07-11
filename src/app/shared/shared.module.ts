import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports : [
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
