import { Component, OnInit } from '@angular/core';

import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';

import { Manager } from './manager';
import { ManagerService } from './manager.service';

@Component({
	selector: 'manager-create',
	templateUrl: './managers/manager-create.component.html',
	// styleUrls: ['./managers/manager-list.component.css']
	providers: [ManagerService]
})

export class ManagerCreateComponent {
	managers: Manager[];
	createResponse: Manager[];
	errorResponse: String;

	newManager = {};

	constructor(private ManagerService: ManagerService) {

	};

	saveManager(manager: Manager) {
		this.ManagerService.createManager(manager).subscribe(
			response => this.createResponse = response,
			error => this.errorResponse = error
		);
	}
}
