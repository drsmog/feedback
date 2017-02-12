import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Feedback } from './feedback.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedbackService {

  private headers = new Headers({
    'Content-type': 'application/json'
  });
  private url = 'api/feedback';

  getTestData() {
    return this.http.get(this.url).toPromise()
      .then(response => {
        console.log(response);
        return response.json().data;
      });
  }

  submitNewFeedback(feedback: Feedback) {
    return this.http.post(this.url,
      JSON.stringify(feedback),
      { headers: this.headers }).toPromise()
      .then(res => res.json().data);
  }

  constructor(private http: Http) { }



}
