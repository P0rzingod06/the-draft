import { Component, OnInit } from 'angular2/core';

import { Manager } from './manager.ts';
import { ManagerService } from './manager.service';

@Component ({
	selector: 'manager-list',
	templateUrl: './manager-list.html',
	styleUrls: ['./manager-list.component.css']
})

export class ManagerListComponent implements OnInit{
	managers: Manager[];
	errorMessage: string;

	constructor(private ManagerService:ManagerService){

	};

	// getManagers(): Manager[] {
	// 	return new Manager({_id:1,firstName:'Mike',lastName:'Ga',logoUrl:'N/A'});
	// }

	ngOninit(): void {
		this.ManagerService.getManagers().subscribe(
			managers => this.managers = managers,
			error => this.errorMessage = <any>error
			);
	}
}