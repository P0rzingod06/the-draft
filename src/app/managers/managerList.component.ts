import { Component, OnInit } from '@angular/core';

import { DataGridModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';

import { Manager } from './manager';
import { ManagerService } from './manager.service';

@Component({
	selector: 'manager-list',
	templateUrl: './manager-list.component.html',
	styleUrls: ['./manager-list.component.scss'],
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
