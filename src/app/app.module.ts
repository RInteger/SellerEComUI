import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { ContentUploadService } from './content-upload/content-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ContentUploadService],
  bootstrap: [ContentUploadComponent]
})
export class AppModule { }
