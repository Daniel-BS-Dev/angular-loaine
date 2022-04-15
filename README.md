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
