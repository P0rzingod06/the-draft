import {Component} from 'angular2/core';

@Component({
	selector: 'main',
	template: `<div><h1>{{pageTitle}}</h1>
        <div>Hello World</div>
    </div>`
})

export class AppComponent {
	pageTitle: String = 'Welcome to The Draft';
};