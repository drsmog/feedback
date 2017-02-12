import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { FeedbackService} from './feedback/feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
