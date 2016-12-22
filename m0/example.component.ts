import {Component} from '@angular/core';

@Component({
    selector: 'example-component'
    template: `<h2>Greeting</h2><p>{{message}}</p>`
})
export class ExampleComponent{
    public message: string;
    
    constructor() {
    
    }
}