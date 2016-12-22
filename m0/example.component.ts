import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'example-component'
    templateUrl: 'app/example.component.html'
})

export class ExampleComponent implements OnInit{
    public message: string;
    
    constructor() {
        //this.message = 'Hey Everybody';
    }
    
    private ngOnInit() {   
        this.message = 'Hello World';
    }
}