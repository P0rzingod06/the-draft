import {Component} from '@angular/core';

@Component({
	templateUrl: 'app/draft/draft.component.html',
	styleUrls: ['app/draft/draft.component.css']
})

export class DraftComponent {

	managers: any[] = [
		{
			"name": "Andrew",
			"picks": [{
				"draftRound": 1,
				"draftPick": "Jennifer Aniston",
				"age": 45
			},
			{
				"draftRound": 2,
				"draftPick": "Jessica Alba",
				"age": 28
			}]},
		{
			"name": "Jake",
			"picks": [ {
				"draftRound": 1,
				"draftPick": "J Law",
				"age": 28
			},
			{
				"draftRound": 2,
				"draftPick": "Margot Robbie",
				"age": 27
			}]},
		{
			"name": "Mike",
			"picks": [
				{
					"draftRound": 1,
					"draftPick": "Emma Stone",
					"age": 27
				},
				{
					"draftRound": 2,
					"draftPick": "Emma Watson",
					"age": 28
				}]},
		{
			"name": "Dale",
			"picks": [{
				"draftRound": 1,
				"draftPick": "Lively",
				"age": 28
			},
			{
				"draftRound": 2,
				"draftPick": "Kristen Bell",
				"age": 45
			}]}
	];

}