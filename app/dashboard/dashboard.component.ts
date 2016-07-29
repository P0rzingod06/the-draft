import {Component} from 'angular2/core';

import { ManagerListComponent } from './../managers/managerList.component'

@Component({
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css'],
	directives: [ManagerListComponent]
})

export class DashboardComponent {

}