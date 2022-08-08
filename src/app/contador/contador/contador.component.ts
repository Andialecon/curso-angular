import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',

    template: `
        <h1>Contador</h1>
        <button id="aumentar" (click)="modificaraContador(5)">+</button>
        <span>{{base}}</span>
        <button id="decrementar" (click)="modificaraContador(-5)"> -- </button> 
    `
})

export class ContadorComponent {
    title: string = 'Contador App';
    base: number = 5;
    students: string[] = ["Ana", "Luis", "Leo"]

    modificaraContador(value: number): void {
        this.base += value
    }
}