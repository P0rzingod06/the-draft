import { Component } from 'angular2/core';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { DraftComponent } from 'app/draft/draft.component';

@Component({
	selector: 'td-app',
	templateUrl: 'app/navBar/nav-bar.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
	{ path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
	{ path: '/draft', name: 'Draft', component: DraftComponent }
])

export class AppComponent {

};