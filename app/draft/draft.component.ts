import {Component} from 'angular2/core';

@Component({
	templateUrl: 'app/draft/draft.component.html',
	styleUrls: ['app/draft/draft.component.css']
})

export class DraftComponent {

	rounds: any[] = [
		{
			"draftRound": 1,
			"drafter": "Andrew",
			"draftPick": "Jennifer Aniston",
			"age": 45
		},
		{
			"draftRound": 1,
			"drafter": "David",
			"draftPick": "J Law",
			"age": 28
		},
		{
			"draftRound": 1,
			"drafter": "Mike",
			"draftPick": "Emma Stone",
			"age": 27
		},
		{
			"draftRound": 1,
			"drafter": "Dale",
			"draftPick": "Lively",
			"age": 28
		},
		{
			"draftRound": 2,
			"drafter": "Dale",
			"draftPick": "Kristen Bell",
			"age": 45
		},
		{
			"draftRound": 2,
			"drafter": "Mike",
			"draftPick": "Emma Watson",
			"age": 28
		},
		{
			"draftRound": 2,
			"drafter": "David",
			"draftPick": "Margot Robbie",
			"age": 27
		},
		{
			"draftRound": 2,
			"drafter": "Andrew",
			"draftPick": "Jessica Alba",
			"age": 28
		}];

	managers: any[] = [
		{
			"Name": "Andrew"
		},
		{
			"Name": "Jake"
		},
		{
			"Name": "Mike"
		},
		{
			"Name": "Dale"
		}

	];

}