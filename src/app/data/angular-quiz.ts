export const QUIZQUESTIONS:ANGULARQUIZ[] = [
   {
    id: 1,
    question: "Which decorator is used to define an Angular component?",
    options: ["@NgModule", "@Injectable", "@Component", "@Directive"],
    answer: "@Component"
  },
  {
    id: 2,
    question: "Which lifecycle hook is called after Angular initializes all data-bound properties?",
    options: ["ngOnDestroy", "ngOnInit", "ngAfterViewInit", "constructor"],
    answer: "ngOnInit"
  },
  {
    id: 3,
    question: "Which directive is used for conditional rendering?",
    options: ["*ngFor", "*ngIf", "ngSwitch", "ngStyle"],
    answer: "*ngIf"
  },
  {
    id: 4,
    question: "Which directive is used to loop through a list?",
    options: ["*ngIf", "*ngFor", "ngClass", "ngStyle"],
    answer: "*ngFor"
  },
  {
    id: 5,
    question: "Which module is required to use HttpClient?",
    options: ["FormsModule", "BrowserModule", "HttpClientModule", "CommonModule"],
    answer: "HttpClientModule"
  },
  {
    id: 6,
    question: "Which service is used to make HTTP requests in Angular?",
    options: ["Http", "HttpClient", "FetchClient", "ApiService"],
    answer: "HttpClient"
  },
  {
    id: 7,
    question: "Which module is required for Reactive Forms?",
    options: ["FormsModule", "ReactiveFormsModule", "RouterModule", "CommonModule"],
    answer: "ReactiveFormsModule"
  },
  {
    id: 8,
    question: "Which directive provides two-way data binding?",
    options: ["ngClass", "ngIf", "ngModel", "ngFor"],
    answer: "ngModel"
  },
  {
    id: 9,
    question: "Which syntax is used for property binding?",
    options: ["()", "[]", "{{}}", "[()]"],
    answer: "[]"
  },
  {
    id: 10,
    question: "Which syntax is used for event binding?",
    options: ["()", "[]", "{{}}", "[()]"],
    answer: "()"
  },
  {
    id: 11,
    question: "Which syntax is used for interpolation?",
    options: ["()", "{{}}", "[]", "[()]"],
    answer: "{{}}"
  },
  {
    id: 12,
    question: "Which decorator is used to inject a service into Angular's DI system?",
    options: ["@Directive", "@Component", "@Injectable", "@Pipe"],
    answer: "@Injectable"
  },
  {
    id: 13,
    question: "Which decorator receives data from a parent component?",
    options: ["@Output", "@Input", "@ViewChild", "@Inject"],
    answer: "@Input"
  },
  {
    id: 14,
    question: "Which decorator is used to send events from child to parent?",
    options: ["@Input", "@Output", "@Injectable", "@HostListener"],
    answer: "@Output"
  },
  {
    id: 15,
    question: "Which Angular module is used for routing?",
    options: ["FormsModule", "RouterModule", "BrowserModule", "CommonModule"],
    answer: "RouterModule"
  },
  {
    id: 16,
    question: "Which lifecycle hook is called before a component is destroyed?",
    options: ["ngAfterViewInit", "ngOnDestroy", "ngOnChanges", "ngDoCheck"],
    answer: "ngOnDestroy"
  },
  {
    id: 17,
    question: "Which Angular CLI command creates a new component?",
    options: ["ng component", "ng create component", "ng g c", "ng new component"],
    answer: "ng g c"
  },
  {
    id: 18,
    question: "Which pipe automatically subscribes to an Observable?",
    options: ["DatePipe", "CurrencyPipe", "AsyncPipe", "JsonPipe"],
    answer: "AsyncPipe"
  },
  {
    id: 19,
    question: "Which pipe converts an object into JSON format?",
    options: ["AsyncPipe", "JsonPipe", "DatePipe", "SlicePipe"],
    answer: "JsonPipe"
  },
  {
    id: 20,
    question: "Which module is imported by default in the root Angular module?",
    options: ["CommonModule", "BrowserModule", "FormsModule", "RouterModule"],
    answer: "BrowserModule"
  },
  {
    id: 21,
    question: "Which lifecycle hook is triggered whenever an @Input property changes?",
    options: ["ngOnInit", "ngOnDestroy", "ngOnChanges", "ngAfterViewInit"],
    answer: "ngOnChanges"
  },
  {
    id: 22,
    question: "Which directive is used to dynamically add or remove CSS classes?",
    options: ["ngStyle", "ngClass", "ngIf", "ngSwitch"],
    answer: "ngClass"
  },
  {
    id: 23,
    question: "Which directive is used to dynamically apply inline styles?",
    options: ["ngStyle", "ngClass", "ngFor", "ngIf"],
    answer: "ngStyle"
  },
  {
    id: 24,
    question: "Which Angular CLI command starts the development server?",
    options: ["ng start", "ng build", "ng serve", "ng run"],
    answer: "ng serve"
  },
  {
    id: 25,
    question: "Which file is the entry point of an Angular application?",
    options: ["app.module.ts", "index.html", "main.ts", "polyfills.ts"],
    answer: "main.ts"
  },
  {
    id: 26,
    question: "Which lifecycle hook is called after the component's view has been initialized?",
    options: ["ngOnInit", "ngAfterViewInit", "ngOnChanges", "ngOnDestroy"],
    answer: "ngAfterViewInit"
},
{
    id: 27,
    question: "Which Angular module contains common directives like *ngIf and *ngFor?",
    options: ["FormsModule", "BrowserModule", "CommonModule", "RouterModule"],
    answer: "CommonModule"
},
{
    id: 28,
    question: "Which directive is used to display one of many possible views?",
    options: ["*ngFor", "ngSwitch", "*ngIf", "ngTemplateOutlet"],
    answer: "ngSwitch"
},
{
    id: 29,
    question: "Which pipe transforms text to uppercase?",
    options: ["TitleCasePipe", "UpperCasePipe", "LowerCasePipe", "SlicePipe"],
    answer: "UpperCasePipe"
},
{
    id: 30,
    question: "Which pipe transforms text to lowercase?",
    options: ["UpperCasePipe", "LowerCasePipe", "TitleCasePipe", "JsonPipe"],
    answer: "LowerCasePipe"
},
{
    id: 31,
    question: "Which pipe formats a JavaScript Date object?",
    options: ["CurrencyPipe", "DatePipe", "AsyncPipe", "JsonPipe"],
    answer: "DatePipe"
},
{
    id: 32,
    question: "Which pipe is used to format currency values?",
    options: ["NumberPipe", "PercentPipe", "CurrencyPipe", "DecimalPipe"],
    answer: "CurrencyPipe"
},
{
    id: 33,
    question: "Which pipe formats a number as a percentage?",
    options: ["CurrencyPipe", "DecimalPipe", "PercentPipe", "SlicePipe"],
    answer: "PercentPipe"
},
{
    id: 34,
    question: "Which decorator is used to create a custom pipe?",
    options: ["@Component", "@Directive", "@Pipe", "@Injectable"],
    answer: "@Pipe"
},
{
    id: 35,
    question: "Which Angular feature allows code splitting and loading modules on demand?",
    options: ["Dependency Injection", "Lazy Loading", "Data Binding", "Tree Shaking"],
    answer: "Lazy Loading"
},
{
    id: 36,
    question: "Which routing guard is used to protect a route before navigation?",
    options: ["CanDeactivate", "CanActivate", "Resolve", "CanMatch"],
    answer: "CanActivate"
},
{
    id: 37,
    question: "Which routing guard prevents leaving a page with unsaved changes?",
    options: ["CanActivate", "Resolve", "CanDeactivate", "CanMatch"],
    answer: "CanDeactivate"
},
{
    id: 38,
    question: "Which Angular feature allows navigation between views?",
    options: ["Services", "Routing", "Pipes", "Lifecycle Hooks"],
    answer: "Routing"
},
{
    id: 39,
    question: "Which directive displays the matched routed component?",
    options: ["routerLink", "routerView", "router-outlet", "routeComponent"],
    answer: "router-outlet"
},
{
    id: 40,
    question: "Which directive is used to navigate between routes?",
    options: ["routerLink", "router-outlet", "navigateTo", "routerNavigate"],
    answer: "routerLink"
},
{
    id: 41,
    question: "Which service provides information about the current route?",
    options: ["Router", "ActivatedRoute", "Location", "Navigation"],
    answer: "ActivatedRoute"
},
{
    id: 42,
    question: "Which service is used to navigate programmatically?",
    options: ["HttpClient", "Router", "ActivatedRoute", "LocationStrategy"],
    answer: "Router"
},
{
    id: 43,
    question: "Which decorator accesses a child component or DOM element?",
    options: ["@Input", "@Output", "@ViewChild", "@Inject"],
    answer: "@ViewChild"
},
{
    id: 44,
    question: "Which decorator accesses projected content from a parent component?",
    options: ["@ContentChild", "@ViewChild", "@Input", "@Output"],
    answer: "@ContentChild"
},
{
    id: 45,
    question: "Which Angular feature is used to share data between unrelated components?",
    options: ["Pipes", "Services", "Directives", "Modules"],
    answer: "Services"
},
{
    id: 46,
    question: "Which binding updates the UI when component data changes?",
    options: ["Interpolation", "Data Binding", "Dependency Injection", "Lazy Loading"],
    answer: "Data Binding"
},
{
    id: 47,
    question: "Which Angular concept creates a single instance of a service?",
    options: ["Routing", "Singleton Service", "Directive", "Pipe"],
    answer: "Singleton Service"
},
{
    id: 48,
    question: "Which Angular file contains application configuration and bootstrap information?",
    options: ["main.ts", "app.component.ts", "angular.json", "package.json"],
    answer: "main.ts"
},
{
    id: 49,
    question: "Which command creates a new Angular application?",
    options: ["ng create", "ng init", "ng new", "ng app"],
    answer: "ng new"
},
{
    id: 50,
    question: "Which command builds an Angular project for production?",
    options: ["ng serve", "ng build", "ng build --configuration production", "ng deploy"],
    answer: "ng build --configuration production"
},
{
    id: 51,
    question: "Which RxJS class represents a stream of asynchronous data?",
    options: ["Promise", "Observable", "Subject", "BehaviorSubject"],
    answer: "Observable"
},
{
    id: 52,
    question: "Which method is used to listen to an Observable?",
    options: ["listen()", "watch()", "subscribe()", "then()"],
    answer: "subscribe()"
},
{
    id: 53,
    question: "Which RxJS Subject stores the latest emitted value?",
    options: ["Subject", "ReplaySubject", "BehaviorSubject", "AsyncSubject"],
    answer: "BehaviorSubject"
},
{
    id: 54,
    question: "Which Angular feature improves *ngFor performance by identifying list items uniquely?",
    options: ["trackBy", "ngClass", "ngStyle", "ViewChild"],
    answer: "trackBy"
},
{
    id: 55,
    question: "Which Angular change detection strategy improves performance?",
    options: ["Default", "OnPush", "Manual", "Lazy"],
    answer: "OnPush"
},
{
    id: 56,
    question: "Which operator is commonly used to cancel previous HTTP requests during search?",
    options: ["mergeMap", "concatMap", "switchMap", "forkJoin"],
    answer: "switchMap"
},
{
    id: 57,
    question: "Which RxJS operator is used to combine multiple HTTP requests and wait until all complete?",
    options: ["switchMap", "mergeMap", "forkJoin", "zip"],
    answer: "forkJoin"
},
{
    id: 58,
    question: "Which Angular feature is used to organize related components and services?",
    options: ["Component", "Module", "Pipe", "Directive"],
    answer: "Module"
},
{
    id: 59,
    question: "Which lifecycle hook is called after every change detection cycle?",
    options: ["ngDoCheck", "ngOnInit", "ngOnDestroy", "ngAfterViewInit"],
    answer: "ngDoCheck"
},
{
    id: 60,
    question: "Which Angular CLI command generates a service?",
    options: ["ng g service", "ng service", "ng new service", "ng create service"],
    answer: "ng g service"
},
{
    id: 61,
    question: "Which Angular CLI command generates a module?",
    options: ["ng g module", "ng module", "ng new module", "ng create module"],
    answer: "ng g module"
},
{
    id: 62,
    question: "Which Angular CLI command generates a directive?",
    options: ["ng directive", "ng g directive", "ng create directive", "ng new directive"],
    answer: "ng g directive"
},
{
    id: 63,
    question: "Which Angular CLI command generates a pipe?",
    options: ["ng pipe", "ng g pipe", "ng create pipe", "ng new pipe"],
    answer: "ng g pipe"
},
{
    id: 64,
    question: "Which Angular CLI command generates a guard?",
    options: ["ng g guard", "ng guard", "ng create guard", "ng new guard"],
    answer: "ng g guard"
},
{
    id: 65,
    question: "Which file contains Angular project dependencies?",
    options: ["angular.json", "package.json", "main.ts", "tsconfig.json"],
    answer: "package.json"
},
{
    id: 66,
    question: "Which configuration file contains Angular CLI project settings?",
    options: ["package.json", "angular.json", "main.ts", "tsconfig.app.json"],
    answer: "angular.json"
},
{
    id: 67,
    question: "Which decorator creates a custom directive?",
    options: ["@Directive", "@Component", "@Injectable", "@Pipe"],
    answer: "@Directive"
},
{
    id: 68,
    question: "Which Angular feature allows creating reusable UI elements?",
    options: ["Component", "Service", "Module", "Pipe"],
    answer: "Component"
},
{
    id: 69,
    question: "Which lifecycle hook is executed only once during a component's lifetime?",
    options: ["ngOnInit", "ngDoCheck", "ngAfterViewChecked", "ngOnChanges"],
    answer: "ngOnInit"
},
{
    id: 70,
    question: "Which Angular service is commonly used to share data between components?",
    options: ["HttpClient", "Router", "Custom Service", "ActivatedRoute"],
    answer: "Custom Service"
},
{
    id: 71,
    question: "Which Angular feature allows creating forms using FormGroup and FormControl?",
    options: ["Template-driven Forms", "Reactive Forms", "Dynamic Forms", "Standalone Forms"],
    answer: "Reactive Forms"
},
{
    id: 72,
    question: "Which directive is used to apply multiple CSS classes conditionally?",
    options: ["ngStyle", "ngClass", "ngIf", "ngFor"],
    answer: "ngClass"
},
{
    id: 73,
    question: "Which Angular feature reduces the initial bundle size by loading modules only when needed?",
    options: ["Ahead-of-Time Compilation", "Lazy Loading", "Tree Shaking", "Dependency Injection"],
    answer: "Lazy Loading"
},
{
    id: 74,
    question: "Which lifecycle hook is called immediately before ngOnDestroy?",
    options: ["ngAfterViewChecked", "ngDoCheck", "There is no lifecycle hook immediately before ngOnDestroy", "ngAfterContentInit"],
    answer: "There is no lifecycle hook immediately before ngOnDestroy"
},
{
    id: 75,
    question: "Which Angular feature helps automatically inject dependencies into components and services?",
    options: ["Routing", "Dependency Injection", "Interpolation", "Data Binding"],
    answer: "Dependency Injection"
},
{
    id: 76,
    question: "Which Angular feature is used to navigate between different pages?",
    options: ["Routing", "Pipes", "Services", "Directives"],
    answer: "Routing"
},
{
    id: 77,
    question: "Which HTML element is used to display routed components?",
    options: ["router-view", "router-link", "router-outlet", "ng-router"],
    answer: "router-outlet"
},
{
    id: 78,
    question: "Which directive is used to navigate to another route from a template?",
    options: ["routerLink", "navigate", "routerNavigate", "routeTo"],
    answer: "routerLink"
},
{
    id: 79,
    question: "Which lifecycle hook is called after Angular checks the component's content for the first time?",
    options: ["ngAfterContentInit", "ngAfterViewInit", "ngOnInit", "ngDoCheck"],
    answer: "ngAfterContentInit"
},
{
    id: 80,
    question: "Which lifecycle hook is called after Angular checks the component's view for the first time?",
    options: ["ngAfterContentInit", "ngAfterViewInit", "ngOnInit", "ngAfterContentChecked"],
    answer: "ngAfterViewInit"
},
{
    id: 81,
    question: "Which decorator is used to access multiple child elements or components?",
    options: ["@ViewChildren", "@ViewChild", "@ContentChild", "@Input"],
    answer: "@ViewChildren"
},
{
    id: 82,
    question: "Which decorator is used to access multiple projected content elements?",
    options: ["@ContentChildren", "@ViewChildren", "@ContentChild", "@Output"],
    answer: "@ContentChildren"
},
{
    id: 83,
    question: "Which Angular feature allows creating reusable business logic?",
    options: ["Services", "Components", "Pipes", "Modules"],
    answer: "Services"
},
{
    id: 84,
    question: "Which method is commonly used to navigate programmatically using the Router service?",
    options: ["redirect()", "go()", "navigate()", "route()"],
    answer: "navigate()"
},
{
    id: 85,
    question: "Which lifecycle hook is called after every check of the component's view?",
    options: ["ngAfterViewChecked", "ngAfterViewInit", "ngOnChanges", "ngOnInit"],
    answer: "ngAfterViewChecked"
},
{
    id: 86,
    question: "Which lifecycle hook is called after every check of projected content?",
    options: ["ngAfterContentChecked", "ngAfterViewChecked", "ngOnInit", "ngDoCheck"],
    answer: "ngAfterContentChecked"
},
{
    id: 87,
    question: "Which Angular decorator is used to listen for DOM events on the host element?",
    options: ["@HostBinding", "@HostListener", "@Input", "@Output"],
    answer: "@HostListener"
},
{
    id: 88,
    question: "Which Angular decorator is used to bind a property to the host element?",
    options: ["@HostBinding", "@HostListener", "@Directive", "@Injectable"],
    answer: "@HostBinding"
},
{
    id: 89,
    question: "Which Angular file contains the root component?",
    options: ["main.ts", "app.component.ts", "app.module.ts", "index.html"],
    answer: "app.component.ts"
},
{
    id: 90,
    question: "Which command is used to install project dependencies?",
    options: ["npm install", "ng install", "npm start", "ng update"],
    answer: "npm install"
},
{
    id: 91,
    question: "Which command checks the Angular CLI version?",
    options: ["ng version", "ng check", "ng info", "npm version"],
    answer: "ng version"
},
{
    id: 92,
    question: "Which Angular feature allows creating custom HTML elements using components?",
    options: ["Angular Elements", "Angular Modules", "Angular Pipes", "Angular Signals"],
    answer: "Angular Elements"
},
{
    id: 93,
    question: "Which Angular feature is used to optimize DOM rendering in large lists?",
    options: ["trackBy", "ngStyle", "ViewChild", "Signals"],
    answer: "trackBy"
},
{
    id: 94,
    question: "Which binding syntax combines property binding and event binding?",
    options: ["()", "[]", "[()]", "{{}}"],
    answer: "[()]"
},
{
    id: 95,
    question: "Which Angular feature is used to validate user input in forms?",
    options: ["Validators", "Pipes", "Resolvers", "Interceptors"],
    answer: "Validators"
},
{
    id: 96,
    question: "Which Angular class is used to group multiple FormControls?",
    options: ["FormArray", "FormBuilder", "FormGroup", "FormControl"],
    answer: "FormGroup"
},
{
    id: 97,
    question: "Which Angular class represents a single form input?",
    options: ["FormArray", "FormControl", "FormGroup", "Validator"],
    answer: "FormControl"
},
{
    id: 98,
    question: "Which Angular class is used to manage a dynamic list of form controls?",
    options: ["FormGroup", "FormArray", "FormBuilder", "FormControl"],
    answer: "FormArray"
},
{
    id: 99,
    question: "Which service is used to simplify the creation of reactive forms?",
    options: ["FormBuilder", "HttpClient", "ActivatedRoute", "Renderer2"],
    answer: "FormBuilder"
},
{
    id: 100,
    question: "Which Angular package contains Reactive Forms?",
    options: [
        "@angular/core",
        "@angular/router",
        "@angular/forms",
        "@angular/common"
    ],
    answer: "@angular/forms"
}
];

export interface ANGULARQUIZ {
    id: number,
    question: string,
    options: string[],
    answer: string
}