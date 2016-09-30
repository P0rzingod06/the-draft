import { Component, OnInit } from '@angular/core';

import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';

import { Manager } from './manager';
import { ManagerService } from './manager.service';

@Component({
	selector: 'manager-list',
	templateUrl: 'app/managers/manager-list.component.html',
	// styleUrls: ['app/managers/manager-list.component.css']
	providers: [ManagerService]
})

export class ManagerListComponent {
	managers: Manager[];
	errorMessage: string;

	constructor(private ManagerService: ManagerService) {
		this.ManagerService.getManagers().subscribe(
			managers => this.managers = managers,
			error => this.errorMessage = <any>error
		);
	};
}