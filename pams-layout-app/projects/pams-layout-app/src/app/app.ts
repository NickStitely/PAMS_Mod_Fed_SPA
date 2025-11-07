import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterModule } from './master/master.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pams-layout-app');
}
