import {Component} from '@angular/core';

import {Player} from './player';

@Component({
	selector: 'player-list',
	templateUrl: './players/player-list.component.html',
	styles: [require('./player-list.component.scss')]
})

export class PlayerListComponent {
	players: Player[];

	getPlayers(): Player[] {
		return [{ id: 1, firstName: 'Mike', lastName: 'Gassert', logoURL: 'N/A' },
		{id:2, firstName:'Dale', lastName:'Race', logoURL:'N/A'}]
	}
}
