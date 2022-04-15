# angular-loaine

## Criando um modulo local
- comando para criar o modulo
`````
ng g m nome
``````
- se eu for trabalhar com requisições ou formulario preciso importa o HttpModule e o formModule
- para usar uma component dentro de uma modulo local eu devo colocar o nome dele na declarations do meu modulo
- dentro do meu modulo criado eu devo criar o exports, esse export eu coloco o component que quero expor a outros modulo dentro dele eu coloco o nome do meu component que desejo compartilhar
- dentro do meu module principal eu declaro o meu modulo criado no array de imports
- para compartilhar serviços eu etenho que declarar ele detro de um array de providers

## Associando informaçoes que estão em meu components para o template

{{ valor }} - interpolação 
[propriedade] = "valor" - properte biding
(evento) = "handler" - escutados eventos do template
[(ngModel)]="propriedade" - matem tanto o template quanto o componente atualizado

## Exemplo de como usar
``````
- <img src="{{ urlImage }}">
- <img [src]="urlImage">
``````

## Properte biding class
``````
<select #myvalue (change)="0">
    <option value="success">sucesso</option>
    <option value="info">informação</option>
    <option value="danger">perigo</option>
</select>

<br/><br/><br/><br/>

<div [class.success]="myvalue.value == 'success'">
    sucesso
</div>
<div [class.info]="myvalue.value == 'info'">
    informação
</div>
<div [class.danger]="myvalue.value == 'danger'">
    perigo
</div>

usando interpolação

<div class="{{ myvalue.value }} ">
    sucesso
</div>

mostrando e escondendo a div
<div [style.display]="myvalue == 'danger' ? 'block' : 'none'">
    sucesso
</div>


``````

## Directive Background
``````

@Directive({
  selector: '[appDirectBackground]' -> nome que vou usar
})
export class DirectBackgroundDirective {

  // ouvindo um evento
  @HostListener('mouseenter') onMouseOver(){  -> evento aconteceu
    this.background='yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){   -> evento aconteceu
   this.background='white';
  }

  // mudando o background
  @HostBinding('style.backgroundColor') background: string=''; -> o que eu vou fazer quando acontecer o evento

  constructor() { }

}
``````

## Directives Com Input
````

import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectBackground]'
})
export class DirectBackgroundDirective {

 @Input() colorDefault: string = 'white';
 @Input() colorChange: string = 'yellow';

  // ouvindo um evento
  @HostListener('mouseenter') onMouseOver(){
    this.background= this.colorChange;
  }

  @HostListener('mouseleave') onMouseLeave(){
   this.background= this.colorDefault;
  }

  // mudando o background
  @HostBinding('style.backgroundColor') background: string='';

  constructor() { }

  ngOnInit(): void {
    this.background = 'blue';
  }
}
``````

## Service Compartilhando informações
### service
````

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycoursesService {

  listNewCurseCreated = new EventEmitter(); // vai ficar escutando uma mudança

  listCourse: string[] = ['Java', 'C#','PHP', 'C++','C'];

  constructor() { }

  onNewCourse(course: string){
    this.listCourse.unshift(course);
    this.listNewCurseCreated.emit(course); // emitindo a mudança
  }
}

````

### pegando a mudança
````
export class ViewCourseCreatedComponent implements OnInit {

  listNewCourse : string[] = [];

  constructor(private service: MycoursesService) { }

  ngOnInit(): void {
    this.service.listNewCurseCreated.subscribe(x => {
        this.listNewCourse.push(x);

      })
  }

}
````
