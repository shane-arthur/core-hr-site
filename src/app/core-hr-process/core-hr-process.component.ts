import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-hr-process',
  templateUrl: './core-hr-process.component.html'
})
export class CoreHrProcessComponent implements OnInit {
  processesList = [];
  process: Process;
  constructor() { }

  ngOnInit() {
    this.populateServices();
  }

  populateServices() {
    // Process 1
    this.process = {} as Process;
    this.process.title = 'Understand';
    this.process.description = 'We take the time to plug into your needs and talent strategy. As a strategic partner we provide market intelligence and advisory to help your organization tell compelling stories & attract the best candidates.';
    this.processesList.push(this.process);

    // Process 2
    this.process = {} as Process;
    this.process.title = 'Interact';
    this.process.description = 'Our search process doesn’t start when a client has a need because we constantly interact with a wide network of candidates. We don’t just reach out to active job seekers, we are tapping into the web of relationships we’ve built using a targeted approach.';
    this.processesList.push(this.process);

    // Process 3
    this.process = {} as Process;
    this.process.title = 'Align';
    this.process.description = 'Getting a candidate and client together is a journey and we work to align interests on the basis of mutual long term benefit. Understanding what motivates our candidates, their aspirations and career goals helps us calibrate the conversations that ultimately lead to a match.';
    this.processesList.push(this.process);

    // Process 4
    this.process = {} as Process;
    this.process.title = 'Match';
    this.process.description = 'By providing candidates with career coaching support, industry perspective and connecting them with experienced professionals throughout the matchmaking process, we dramatically lower the risk of candidates rejecting or reneging on offers.';
    this.processesList.push(this.process);
  }

}

export interface Process {
  title: string;
  description: string;
}

