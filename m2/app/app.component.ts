import {Component} from '@angular/core';
import {TextGenerator} from './demo.module';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent {
    public count : number = 2;
    public indicator : boolean = true;
    public messages : string[] = ['Alpha', 'Bravo', 'Charlie'];
    public title : string = 'Template Binding';
    
    public message : string;
    constructor() {
        let generator = new TextGenerator();
        this.message = generator.GetText();
    }
}
