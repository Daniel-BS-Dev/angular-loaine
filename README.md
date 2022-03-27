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

## Ciclo de Vida
- ngOnChanges - antes #2 e quando valor property-binding é atualizado
- ngOnInit - quando Component é iniciado
- ngDoCheck - A cada ciclo de verificação de mudanças
- ngAfterContentInit - de´pois de inserir conteúdo extrno view
- ngAfterContentChecked - a cada verificação de conteúdo inserido
- ngAfterViewChecked - a cada verificação de conteúdo/ conteúdo filho
- ngOnDestroy - antes de diretiva/component ser destruido

## Criando Arquivo
- COMPONENT - ng g component meu-component
- SERVICE - ng g s component meu-service
- DIRECTIVE - ng g d component minha-directive
- PIPE - ng g p component meu-pipe
- CLASS - ng g class component minha-classe
- INTERFACE - ng g interface minha-interface
- ENUM - ng g enum meu-enum

## Modificando a folha de estilo
- ng set defaults.styleExt scss
- ng set defaults.styleExt less
- ng set defaults.styleExt styl

## Comando de ajuda no cli
- ng lint - nos ajuda a encontra error como ponto e virgula...
- ng test - vai executar os teste 

## Quando usar o hidden e o ngIf
- hidden - recomendado para árvore de elementos pequenas
- ngIf - recomendado para árvore de elemento grandes
