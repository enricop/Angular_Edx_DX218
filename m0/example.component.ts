import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'example-component',
    templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit{
    public message: string;
    name = 'Angular';
    
    constructor() {
        //this.message = 'Hey Everybody';
    }
    
    ngOnInit() {   
        this.message = 'Hello World';
    }
}