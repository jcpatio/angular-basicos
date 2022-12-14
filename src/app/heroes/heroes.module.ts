import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //componentes, pipes, directivas
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //cosas que quiero visibles fuera de este modulo
    exports: [
        ListadoComponent
    ],
    //todos los modulos que necesito para que este modulo funcione
    imports: [
        CommonModule //se necesita para las directivas ngIf, ngFor, etc
    ]
})
export class HeroesModule { }
