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

## Pegando parametro da rota
### routing
````
{path:'curso/:id', component: PegandoParametroComponent }
``````
### RoutingWay
````
<section>
  <input type="text" #catchValue />
  <router-outlet></router-outlet>
</section>

<section>
    <a [routerLink]="[ 'curso', catchValue.value ]">name</a>
</section>
``````
### AddRoutingInVariable
````
id: string='';

  constructor(private route: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    //**** essa forma se houver mudaça no id dps da inicialização meu id continua sendo o mesmo **** //
    // this.id = this.route.snapshot.params['id']; 
  
  // ****resolvendo esse problema**** //
  this.route.params.subscribe((params: any) => {
    this.id = params['id'];
  })
  }
``````

## Redirecionamento de Rotas
### Service
````
 courses: any[]=[];

  constructor() { }

  getCourses(){
    return [
      {id:1, name: 'Java'},
      {id:2, name: 'Angular'}
    ]
  }


hasCourse(id : number){
    this.courses = this.getCourses();
    for(let i=0; i< this.courses.length; i++){
      let course = this.courses[i];
      if(course.id == id){
        return course;
      }
    }
    return null;
  }
  ``````
  
  ### Redirecionamento
  ````
id: number=0;
  course: any ='';

  constructor(private service: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.course = this.service.hasCourse(this.id);

      if(this.course == null){
        this.router.navigate(['notFound']);
      }
    })
  }
  ````
