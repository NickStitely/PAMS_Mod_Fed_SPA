import { Component, OnInit } from '@angular/core';

interface SiteVisit {
  id: number;
  date: string;
  inspector: string;
  status: string;
  notes: string;
}

@Component({
  selector: 'app-grants-site-visits',
  templateUrl: './grants-site-visits.component.html',
  styleUrls: ['./grants-site-visits.component.scss'],
  standalone: false
})
export class GrantsSiteVisitsComponent implements OnInit {
  siteVisits: SiteVisit[] = [
    { 
      id: 1, 
      date: '2023-05-15', 
      inspector: 'Jane Smith', 
      status: 'Completed',
      notes: 'All requirements met. Project progressing as planned.'
    },
    { 
      id: 2, 
      date: '2023-08-22', 
      inspector: 'Robert Johnson', 
      status: 'Completed',
      notes: 'Minor issues identified. Follow-up required in 30 days.'
    },
    { 
      id: 3, 
      date: '2023-11-10', 
      inspector: 'Sarah Williams', 
      status: 'Scheduled',
      notes: 'Final inspection before project completion.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
