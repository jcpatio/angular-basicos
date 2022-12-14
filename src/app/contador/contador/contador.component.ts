//importar
import { Component } from '@angular/core'; //importamos un componente de angular


@Component({ //decorador
    selector: 'app-contador', //nombre de la etiqueta
    template: `
    <h1>{{titulo}}</h1>
    <h5>{{base}}</h5>
    <button (click)="acumular(base)">{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    `, //template
})


//clase
export class ContadorComponent {

    //propiedades
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    //metodos
    acumular(valor: number) {
        this.numero += valor;
    }

}
