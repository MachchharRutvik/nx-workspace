import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormComponent } from './form/form.component';
import { UiModule } from '@test/ui';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, FormComponent],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UiModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormComponent],
})
export class AppModule {}
