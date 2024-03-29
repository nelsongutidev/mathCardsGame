import { Component, OnInit } from '@angular/core';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true
})
export class SettingsComponent implements OnInit {
  faUndo = faUndo;
  constructor() {}

  ngOnInit(): void {}
}
