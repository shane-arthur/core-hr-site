import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreHrHeaderComponent } from './core-hr-header/core-hr-header.component';
import { CoreHrFooterComponent } from './core-hr-footer/core-hr-footer.component';
import { CoreHrApproachComponent } from './core-hr-approach/core-hr-approach.component';
import { CoreHrServicesComponent } from './core-hr-services/core-hr-services.component';
import { CoreHrProcessComponent } from './core-hr-process/core-hr-process.component';
import { CoreHrContactUsComponent } from './core-hr-contact-us/core-hr-contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreHrHeaderComponent,
    CoreHrFooterComponent,
    CoreHrApproachComponent,
    CoreHrServicesComponent,
    CoreHrProcessComponent,
    CoreHrContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
