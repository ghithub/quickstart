import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>{{title}}</div><my-heroes></my-heroes>`
})
export class AppComponent {
    title = 'Tour of Heroes';
}