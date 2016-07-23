import {Component} from 'angular2/core';
import 'rxjs/Rx'; 
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {DraftComponent} from './draft/draft.component';

@Component({
	selector: 'nav-bar',
	templateUrl: 'app/navBar/nav-bar.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
	{ path: '/Dashboard', name: 'Dashboard', component: 'DashboardComponent', useAsDefault: true }
	{ path: '/Draft', name: 'Draft', component: 'DraftComponent' }
])

export class NavBar {

}