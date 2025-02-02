import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './dashboard/docs/docs.component';
import { NewDialogComponent } from './dashboard/new-dialog/new-dialog.component';
import { ImportDialogComponent } from './dashboard/import-dialog/import-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    NewDialogComponent,
    ImportDialogComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ToastrModule.forRoot({
    closeButton: true,
    timeOut: 3000,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
  })
   ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
