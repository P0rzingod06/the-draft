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
		}]

}