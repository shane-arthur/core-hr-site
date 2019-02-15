import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-hr-services',
  templateUrl: './core-hr-services.component.html'
})
export class CoreHrServicesComponent implements OnInit {
  servicesList = [];
  service: Service;
  constructor() { }

  ngOnInit() {
    this.populateServices();
  }

  populateServices() {
    // Service 1
    this.service = {} as Service;
    this.service.imageUrl = '/assets/images/suitcase.svg';
    this.service.title = 'Executive search';
    this.service.description = 'High impact organizational leaders are’nt usually looking for new opportunities and often don’t respond to solicitations. They’re focused on their career and not necessarily looking for a change, making it difficult to reach them. We have deep experience connecting with executives and generating interest in your opportunity.';
    this.servicesList.push(this.service);

    // Service 2
    this.service = {} as Service;
    this.service.imageUrl = '/assets/images/target.svg';
    this.service.title = 'Permanent search';
    this.service.description = 'Over the years we’ve established a proprietary database of high quality candidates as well as a unique search methodology. As a result, we can consistently present high quality candidates in an efficient manner.';
    this.servicesList.push(this.service);

    // Service 3
    this.service = {} as Service;
    this.service.imageUrl = '/assets/images/network.svg';
    this.service.title = 'Contract staffing solutions';
    this.service.description = 'We have a network of contractors we maintain long term relationships with, which we can tap into directly or receive referrals from. This allows us to quickly identify and provide high quality contractors even under the most stringent time constraints.';
    this.servicesList.push(this.service);
  }

}

export interface Service {
  name?: string;
  imageUrl: string;
  title: string;
  description: string;
}
