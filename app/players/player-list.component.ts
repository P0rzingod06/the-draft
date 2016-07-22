import {Component} from 'angular2/core';

import {IPlayer} from './player';

@Component({
	templateURL: 'app/players/player-list.component.html',
	styleUrls: ['app/players/player-list.component.css']
})

export class PlayerListComponent {
	players: IPlayer[];

	getPlayers(): IPlayer[] {
		return [{ id: 1, firstName: 'Mike', lastName: 'Gassert', logoURL: 'N/A' }]
	}
}