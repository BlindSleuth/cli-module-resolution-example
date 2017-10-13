import { Component } from '@angular/core';

const logger = require('required-module/logger');
logger.printToConsole();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
