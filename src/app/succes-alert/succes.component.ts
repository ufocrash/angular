import { Component } from '@angular/core';

@Component({
    selector: 'app-succes',
    template: `<div class="appSucces"><h4>This is the succes component!!!</h4></div>`,
    styles: [`
        h4{
            color: green;
            text-align:center;
            font-size:30px;
            font-weight:bold;
        }
    `]
})

export class SuccesComponent {}

