import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>{{title}}</div>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
}