import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // News data
  newsItems = [
    {
      title: 'New System Update Released',
      content: 'The latest system update brings improved performance and new features.',
      date: '2025-11-07'
    },
    {
      title: 'Upcoming Maintenance Schedule',
      content: 'System maintenance is scheduled for next weekend. Please plan accordingly.',
      date: '2025-11-05'
    },
    {
      title: 'Training Sessions Available',
      content: 'New training sessions for the updated modules are now available.',
      date: '2025-11-03'
    }
  ];

  // Weather data
  weatherData = {
    location: 'Washington, DC',
    currentTemp: 52,
    condition: 'Partly Cloudy',
    forecast: [
      { day: 'Today', high: 55, low: 42, condition: 'Partly Cloudy' },
      { day: 'Tomorrow', high: 58, low: 45, condition: 'Sunny' },
      { day: 'Saturday', high: 60, low: 48, condition: 'Sunny' },
      { day: 'Sunday', high: 57, low: 46, condition: 'Cloudy' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
