import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroeBorrado:string[]=[];
  
  heroes:string[] = ["Batman", "RobinHood", "Hercules"];
  borrarHeroe():void{ 
    if(this.heroes.length){
      let result:string = this.heroes.shift() ||'';
      this.heroeBorrado.push(result);
    }
  }
}
