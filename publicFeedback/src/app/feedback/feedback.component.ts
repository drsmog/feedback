import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { Feedback } from  './feedback.model'
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],

})
export class FeedbackComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: 'api/feedback/files'});

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  submitFeedback(title, description) {
    this.uploader.setOptions({url:'api/feedback/58/files'});
    let newFeedback = new Feedback();
    newFeedback.title = title;
    newFeedback.description = description;

    this.feedbackService.submitNewFeedback(newFeedback)
    .then(feedbackId => {
      let uri =`api/feedback/${feedbackId}/files`;
      this.uploader.setOptions({url:uri});
      this.uploader.uploadAll();
    })

  }

}
