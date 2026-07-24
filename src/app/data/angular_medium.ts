export const mediumQuestionsPart1 = [
  {
    id: 1,
    question: "Which RxJS operator cancels the previous inner Observable when a new value is emitted?",
    options: ["mergeMap", "concatMap", "switchMap", "map"],
    answer: "switchMap"
  },
  {
    id: 2,
    question: "Which Subject stores the latest emitted value and immediately sends it to new subscribers?",
    options: ["Subject", "ReplaySubject", "BehaviorSubject", "AsyncSubject"],
    answer: "BehaviorSubject"
  },
  {
    id: 3,
    question: "Which RxJS operator is mainly used for debugging or performing side effects?",
    options: ["tap", "map", "filter", "reduce"],
    answer: "tap"
  },
  {
    id: 4,
    question: "Which operator transforms emitted values into a new Observable?",
    options: ["map", "switchMap", "filter", "tap"],
    answer: "switchMap"
  },
  {
    id: 5,
    question: "Which operator combines multiple Observables and emits only after all complete?",
    options: ["combineLatest", "forkJoin", "zip", "merge"],
    answer: "forkJoin"
  },
  {
    id: 6,
    question: "Which RxJS operator filters emitted values based on a condition?",
    options: ["map", "filter", "tap", "scan"],
    answer: "filter"
  },
  {
    id: 7,
    question: "Which Subject type does NOT store previously emitted values?",
    options: ["BehaviorSubject", "ReplaySubject", "Subject", "AsyncSubject"],
    answer: "Subject"
  },
  {
    id: 8,
    question: "Which operator delays emitting values until the user stops typing for a specified time?",
    options: ["delay", "debounceTime", "throttleTime", "interval"],
    answer: "debounceTime"
  },
  {
    id: 9,
    question: "Which operator ignores consecutive duplicate values?",
    options: ["distinctUntilChanged", "filter", "skip", "take"],
    answer: "distinctUntilChanged"
  },
  {
    id: 10,
    question: "Which operator emits only the first specified number of values?",
    options: ["take", "skip", "filter", "map"],
    answer: "take"
  },
  {
    id: 11,
    question: "Which operator is commonly used with destroy$ to prevent memory leaks?",
    options: ["takeUntil", "take", "first", "skip"],
    answer: "takeUntil"
  },
  {
    id: 12,
    question: "Which operator transforms every emitted value without changing the Observable itself?",
    options: ["map", "tap", "filter", "switchMap"],
    answer: "map"
  },
  {
    id: 13,
    question: "Which Subject can replay multiple previous values to new subscribers?",
    options: ["BehaviorSubject", "ReplaySubject", "Subject", "AsyncSubject"],
    answer: "ReplaySubject"
  },
  {
    id: 14,
    question: "Which Subject emits only the last value when it completes?",
    options: ["ReplaySubject", "BehaviorSubject", "AsyncSubject", "Subject"],
    answer: "AsyncSubject"
  },
  {
    id: 15,
    question: "Which RxJS operator is best suited for search API requests?",
    options: ["mergeMap", "concatMap", "switchMap", "zip"],
    answer: "switchMap"
  },
  {
    id: 16,
    question: "Which Angular module is required for Reactive Forms?",
    options: ["FormsModule", "ReactiveFormsModule", "BrowserModule", "CommonModule"],
    answer: "ReactiveFormsModule"
  },
  {
    id: 17,
    question: "Which class represents a single input field in Reactive Forms?",
    options: ["FormArray", "FormGroup", "FormControl", "FormBuilder"],
    answer: "FormControl"
  },
  {
    id: 18,
    question: "Which class represents a collection of FormControls?",
    options: ["FormControl", "FormBuilder", "FormGroup", "Validators"],
    answer: "FormGroup"
  },
  {
    id: 19,
    question: "Which class is used for managing a dynamic list of form controls?",
    options: ["FormArray", "FormGroup", "FormControl", "NgForm"],
    answer: "FormArray"
  },
  {
    id: 20,
    question: "Which service helps create Reactive Forms with less boilerplate code?",
    options: ["FormBuilder", "HttpClient", "Renderer2", "Injector"],
    answer: "FormBuilder"
  },
  {
    id: 21,
    question: "Which method updates every value in a FormGroup and requires all controls to be present?",
    options: ["patchValue()", "setValue()", "reset()", "updateValue()"],
    answer: "setValue()"
  },
  {
    id: 22,
    question: "Which method allows updating only selected controls in a FormGroup?",
    options: ["setValue()", "patchValue()", "reset()", "markAllAsTouched()"],
    answer: "patchValue()"
  },
  {
    id: 23,
    question: "Which Observable emits whenever a form's value changes?",
    options: ["statusChanges", "valueChanges", "formChanges", "inputChanges"],
    answer: "valueChanges"
  },
  {
    id: 24,
    question: "Which built-in validator checks whether a field has a value?",
    options: ["Validators.email", "Validators.required", "Validators.min", "Validators.pattern"],
    answer: "Validators.required"
  },
  {
    id: 25,
    question: "Which property indicates whether a Reactive Form is valid?",
    options: ["dirty", "touched", "valid", "pending"],
    answer: "valid"
  }
];
