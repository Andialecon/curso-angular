import { Component } from "@angular/core";  

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = "Superman";
    edad:number = 43;
    
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    cambiarNombre():void{
        this.nombre="Spiderman";
    }

    get mostrarNombre(){

        return this.nombre;
    }
    cambiarEdad():void{
        this.edad+=1;
    }

    revelarIdentidad():string{
        return `${this.nombre}: ${this.edad}`
    }
    
}