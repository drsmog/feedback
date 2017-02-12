import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { Feedback } from  './feedback.model'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  submitFeedback(title, description) {
    let newFeedback = new Feedback();
    newFeedback.title = title;
    newFeedback.description = description;

    this.feedbackService.submitNewFeedback(newFeedback);
  }

}
