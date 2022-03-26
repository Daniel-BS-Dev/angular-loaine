# angular-loaine

## Comando para instalar o Bootstrap
`
npm install ng2-bootstrap bootstrap --save
`
### angular.json no styles
`
 "../node_modules/bootstrap/dist/css/bootstrap.min.css",
`


## Bloco Principais
- Componentes
- Diretivas - responsavel por modificar o dom
- Roteamento
- Serviços - responsavel por toda logica e tambem pela interação com o backend
- Template - codigo html
- Metadata - é o que permite o angula ler
- Data Binding - interação de componente com os template
- Injeção de Dependência

## Data Binding
è uma forma de associa informações que estão no component para o template
- interpolação - {{ valor }} pega um valor de um atributo ou um metodo evamos conseguir ter a saida
- properte binding - [propriedade]="valor" conseguimos ter a saida do componente para o template
- (evento)="handler" - escutar eventos no template
- [(ngModel)] - conseguimos manter tanto o template quanto o component atualizados
