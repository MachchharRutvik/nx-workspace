import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UserListComponent } from './user-list/user-list.component';
import { CardModule } from '@test/card';
import { MaterialComponentsModule } from '@test/material-components';
import { HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

 


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, UserListComponent],
  imports: [
    BrowserModule,HttpClientModule,CardModule,MaterialComponentsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ToastrModule.forRoot(),
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [UserListComponent],
})
export class AppModule {}
