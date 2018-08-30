import { Component } from '@angular/core';

@Component({
    selector: 'app-succes',
    template: `
    <div class="appSucces">
        <h4>Congratulations!!!</h4>
        <p>You are the best!</p>
    </div>`,
    styles: [`
        h4{
            color: green;
            text-align:center;
            font-size:30px;
            font-weight:bold;
        }

        p{
            text-align:center;
        }
    `]
})

export class SuccesComponent {}

