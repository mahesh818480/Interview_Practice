export const QUIZQUESTIONS:ANGULARQUIZ[] = [
    {
        id: 1,
        question:
            'Which lifecycle hook is called after Angular initializes all data-bound properties of a component?',
        options: ['ngOnInit', 'ngAfterViewInit', 'ngOnChanges', 'constructor'],
        selectedOption: '',
        answer: 'ngOnInit',
    },
    {
        id: 2,
        question: 'Which decorator is used to define an Angular component?',
        options: ['@NgModule', '@Injectable', '@Directive', '@Component'],
        selectedOption: '',
        answer: '@Component',
    },
    {
        id: 3,
        question:
            'Which RxJS operator is commonly used to cancel previous HTTP requests during search?',
        options: ['mergeMap', 'switchMap', 'concatMap', 'forkJoin'],
        selectedOption: '',
        answer: 'switchMap',
    },
    {
        id: 4,
        question: 'What is the purpose of Angular Guards?',
        options: [
            'Handle HTTP requests',
            'Protect routes from unauthorized access',
            'Create reusable components',
            'Manage state',
        ],
        selectedOption: '',
        answer: 'Protect routes from unauthorized access',
    },
    {
        id: 5,
        question:
            'Which guard is used to prevent navigation away from a component with unsaved changes?',
        options: ['CanActivate', 'CanDeactivate', 'CanLoad', 'Resolve'],
        selectedOption: '',
        answer: 'CanDeactivate',
    },
    {
        id: 6,
        question:
            'Which change detection strategy improves Angular application performance?',
        options: ['Default', 'OnPush', 'Reactive', 'Manual'],
        selectedOption: '',
        answer: 'OnPush',
    },
    {
        id: 7,
        question:
            'Which pipe is used to transform Observable values in Angular templates?',
        options: ['DatePipe', 'JsonPipe', 'AsyncPipe', 'UpperCasePipe'],
        selectedOption: '',
        answer: 'AsyncPipe',
    },
    {
        id: 8,
        question: 'Which Angular module is required to use Reactive Forms?',
        options: [
            'FormsModule',
            'ReactiveFormsModule',
            'BrowserModule',
            'HttpClientModule',
        ],
        selectedOption: '',
        answer: 'ReactiveFormsModule',
    },
    {
        id: 9,
        question: 'What is the default change detection strategy in Angular?',
        options: ['OnPush', 'Default', 'Manual', 'Lazy'],
        selectedOption: '',
        answer: 'Default',
    },
    {
        id: 10,
        question: 'Which service is used to make HTTP requests in Angular?',
        options: ['Http', 'HttpRequest', 'HttpClient', 'FetchClient'],
        selectedOption: '',
        answer: 'HttpClient',
    },
    {
        id: 11,
        question:
            'Which RxJS Subject stores the latest emitted value and sends it to new subscribers?',
        options: ['Subject', 'ReplaySubject', 'BehaviorSubject', 'AsyncSubject'],
        selectedOption: '',
        answer: 'BehaviorSubject',
    },
    {
        id: 12,
        question: 'Which Angular feature enables loading modules only when needed?',
        options: [
            'Ahead-of-Time Compilation',
            'Tree Shaking',
            'Lazy Loading',
            'Dependency Injection',
        ],
        selectedOption: '',
        answer: 'Lazy Loading',
    },
    {
        id: 13,
        question:
            'Which decorator is used to receive data from a parent component?',
        options: ['@Output', '@Input', '@ViewChild', '@Inject'],
        selectedOption: '',
        answer: '@Input',
    },
    {
        id: 14,
        question: 'Which decorator is used to emit events from a child component?',
        options: ['@Input', '@Output', '@HostBinding', '@ContentChild'],
        selectedOption: '',
        answer: '@Output',
    },
    {
        id: 15,
        question:
            'Which RxJS operator combines multiple HTTP calls and waits until all complete?',
        options: ['switchMap', 'mergeMap', 'forkJoin', 'zipWith'],
        selectedOption: '',
        answer: 'forkJoin',
    },
    {
        id: 16,
        question: 'What is the purpose of trackBy in *ngFor?',
        options: [
            'Sort items',
            'Filter items',
            'Improve rendering performance',
            'Group items',
        ],
        selectedOption: '',
        answer: 'Improve rendering performance',
    },
    {
        id: 17,
        question: 'Which Angular CLI command generates a new component?',
        options: [
            'ng create component',
            'ng new component',
            'ng g c',
            'ng component',
        ],
        selectedOption: '',
        answer: 'ng g c',
    },
    {
        id: 18,
        question:
            'Which lifecycle hook is called just before Angular destroys a component?',
        options: [
            'ngAfterViewInit',
            'ngOnDestroy',
            'ngOnChanges',
            'ngAfterContentChecked',
        ],
        selectedOption: '',
        answer: 'ngOnDestroy',
    },
    {
        id: 19,
        question: 'What is Dependency Injection in Angular?',
        options: [
            'Injecting CSS',
            'Injecting HTML',
            'Providing dependencies automatically to classes',
            'Loading external APIs',
        ],
        selectedOption: '',
        answer: 'Providing dependencies automatically to classes',
    },
    {
        id: 20,
        question: 'Which Angular file is used to configure application routes?',
        options: [
            'app.component.ts',
            'app.module.ts',
            'app-routing.module.ts',
            'main.ts',
        ],
        selectedOption: '',
        answer: 'app-routing.module.ts',
    },
];

export interface ANGULARQUIZ {
    id: number,
    question: string,
    options: string[],
    selectedOption: string,
    answer: string
}