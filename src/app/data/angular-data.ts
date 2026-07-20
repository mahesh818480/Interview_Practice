import { Question } from "../services/question.service";

  export const ANGULAR_QUESTION: Question[] = [
    {
      id: 1,
      title: 'Remove Duplicates',
      description: 'Remove duplicate values from an array.',
      starterCode: `
       duplicates = [10, 30, 20, 10, 40, 30, 60];
       arr = [];

      ngOnInit(){
        for (let data of this.duplicates) {
          if (!this.arr.includes(data)) {
            this.arr.push(data);
             }
          }
    console.log(this.arr)
      }
`,
      outPut: ''
    },
    {
      id: 2,
      title: 'Remove Duplicates in Array of Objects',
      description: 'Remove duplicate values from an array of Objects.',
      starterCode: `
        data = [
          { id: 1, name: 'Mahesh', city: 'Hyd' },
          { id: 2, name: 'Arjun', city: 'sprt' },
          { id: 1, name: 'Surya', city: 'Bng' },
          { id: 4, name: 'Aravind', city: 'khm' },
      ];
         ngOnInit() {
            const dupData = this.data.filter((val, index, array) => {
            return index === array.findIndex((ele) => ele.id === val.id);
              });
              console.log(dupData)
  }
`,
      outPut: ''
    },
    {
      id: 3,
      title: 'Reverse String Without reverse()',
      description: 'Reverse a string without using reverse().',
      starterCode: `
    name = 'Mahesh';
    strReverse = ''; 

    ngOnInit() {
      for (let i = this.name.length - 1; i >= 0; i--) {
         this.strReverse += this.name[i];
         }
       console.log(this.strReverse)
    }`,
      outPut: ''
    },
    {
      id: 4,
      title: 'Palindrome',
      description: 'Check whether a string is palindrome.',
      starterCode: `
        ngOnInit() {

          // Palindrome with Reverse Method
              const paliData = 'madam';
              const pali = paliData.split('').reverse().join('');
                  if (paliData == pali) {
                    console.log('This is the Palindroe...');
                  }

          // with out Reverse Method
            const paliData1 = 'madam';
            let str = '';
              const pali1 = paliData1.split('').join('');
              for (let i = pali1.length - 1; i >= 0; i--) {
                str += pali1[i];
              }
              if (paliData1 === str) {
                console.log('This is the Palindroe...*****');
              }
      `,
      outPut: ''
    },
    {
      id: 5,
      title: 'Find Largest and Second Largest Number',
      description: 'Find the largest number and SecondLarge Number in an array.',
      starterCode: `
      salary = [10000, 40000, 12000, 5000, 50400]; 
      ngOnInit() {
          let firstHighest = 0;
          let SecondHighest = 0;

        for (let slry of this.salary) {
          if (slry > firstHighest) {
            SecondHighest = firstHighest;
            firstHighest = slry;
          } else if (slry > SecondHighest) {
            SecondHighest = slry;
          }
        }
        console.log(firstHighest, '---', SecondHighest);
    }
      `,
      outPut: ''
    },
    {
      id: 6,
      title: 'Count Vowels',
      description: 'Find the vowels in a string and find position.',
      starterCode: `
        ngOnInit() {
          let name ="mahesh";
          let vowels="aeiou";
          for(let i =0;i< name.length;i++){
            if(vowels.includes(name[i])){
              name[i]
              console.log(i,'index',name[i])
            }
          }
        }`,
      outPut: ''
    },
    {
      id: 7,
      title: 'Anagram',
      description: 'Check whether two strings are anagrams.',
      starterCode: `
        ngOnInit() {
            const oneString = 'listen';
            const SecondString = 'silent';
            const firstStr = oneString.split('').sort();
            const SecondStr = SecondString.split('').sort();
          if (firstStr.length == SecondStr.length) {
            const result = firstStr.every((val, index) => {
              return val === SecondStr[index]
            });
            console.log('0000', result);
        }
            //Using For loop 

            let isAnagram = true;

              if (firstStr.length === SecondStr.length) {
                for (let i = 0; i < ddd.length; i++) {
                  if (firstStr[i] !== SecondStr[i]) {
                    isAnagram = false;
                    break;
                  }
                }
              } else {
                isAnagram = false;
              }

              console.log(isAnagram,"Its return True that is string is anagram ");
      }
      `,
      outPut: ''
    },
    {
      id: 8,
      title: 'FizzBuzz',
      description: 'Print FizzBuzz from 1 to 100.',
      starterCode: `
        ngOnInit(){
          for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              console.log("FizzBuzz");
            } else if (i % 3 === 0) {
              console.log("Fizz");
            } else if (i % 5 === 0) {
              console.log("Buzz");
            } else {
              console.log(i);
            }
          }
        }
      `,
      outPut: ''
    },
    {
      id: 9,
      title: 'Pagination',
      description: 'Pagination in array',
      starterCode: `
          <table border=1>
            <th>Name</th>
            <th>ID</th>
            <th>City</th>
            <th>Policy Name</th>
            <th>Policy Number</th>
            <th>Premium Amount</th>
            <tr *ngFor="let user of pagenateData">
              <td>{{user.name}}</td>
              <td>{{user.age}}</td>
              <td>{{user.city}}</td>
              <td>{{user.policyName}}</td>
              <td>{{user.policyNumber}}</td>
              <td>{{user.premiumAmount}}</td>
            </tr>
            
          </table>
          <button (click)="previousPage()" [disabled] ="currentPage === 1">previous</button>
          <span *ngFor="let a of pages">{{a}}</span>
          <button (click)="next()" [disabled]="currentPage === totalPage">NEXT</button>

         currentPage = 1;
         pageSize = 5;

         ngOnInit(){
            get pagenateData() {
              const startPage = (this.currentPage - 1) * this.pageSize;
              return this.userData.slice(startPage, startPage + this.pageSize);
            }
            get pages() {
              return Array.from({ length: this.totalPage }, (_, i) => i + 1);
            }
            next() {
              console.log(this.currentPage, '=', this.totalPage);
              if (this.currentPage < this.totalPage) {
                this.currentPage++;
              }
            }
            previousPage() {
              if (this.currentPage > 1) {
                this.currentPage--;
              }
              console.log(this.currentPage, '==TriggerPrevious', this.pagenateData);
            }
            get totalPage() {
              return Math.ceil(this.userData.length / this.pageSize);
            }

         }
}`,
      outPut: ''
    },
    {
      id: 10,
      title: 'Group Objects by a Property',
      description: 'Dynamic Object Key Creation, Array to Object Transformation',
      starterCode: `
         data = [
            { id: 1, name: 'Mahesh' },
            { id: 2, name: 'Arjun' },
            { id: 2, name: 'Arjun' },
            { id: 1, name: 'Mahesh' },
            { id: 3, name: 'Surya' },
          ];
       ngOnInit() {
          const arrayObject = this.data.reduce((acc, item) => {
              if (!acc[item.name]) {
                acc[item.name] = [];
              }
              acc[item.name].push({
                id: item.id,
              });
              return acc;
            }, {});

            // Using ForEach
            let result = {};
              this.data.forEach((val) => {
                if (!result[val.name]) {
                  result[val.name] = [];
                }
                result[val.name].push(val);
              });
              console.log(result);
       }
       `,
      outPut: `
        {Mahesh: Array[1], Arjun: Array[1], Surya: Array[1], Aravind: Array[1]}
          Aravind: Array[1]
          0: Object
            id: 4
            name: "Aravind"
          Arjun: Array[1]
          Mahesh: Array[1]
          Surya: Array[1]
      `
    },
    {
      id: 11,
      title: 'print Fibonacci series ',
      description: 'print Fibonacci series ',
      starterCode: `
      fibonacci: number[] = [];
           ngOnInit() {
              let first = 0;
              let second = 1;
              this.fibonacci = [first, second];
              for (let i = 1; i <= 10; i++) {
                let next = first+second;
                this.fibonacci.push(next);
                first = second;
                second = next;
              }
              console.log(this.fibonacci, 'fibonacci');
            }
       `,
      outPut: '0,1,1,2,3,5,8,13,21,34,55,89'
    },
    {
      id: 12,
      title: 'Count the Occurrence of Each Element ',
      description: 'Count the Occurrence of Each Element',
      starterCode: ` 
     data = ["apple", "banana", "apple", "orange", "apple"];
         ngOnInit() {
            let object = {};
              for (let a of this.data) {
                if (object[a]) {
                  object[a]++;
                } else {
                  object[a] = 1;
                }
              }
            console.log(object);
          }
          // Output :{apple: 3, banana: 1, orange: 1}
       `,
      outPut: '{apple: 3, banana: 1, orange: 1}'
    },
    {
      id: 13,
      title: ' Merge Two Objects',
      description: ' merge two objects using the spread operator (...). When both objects have the same key, the value from the later object overrides the earlier one.',
      starterCode: ` 
         ngOnInit() {
            const obj1 = { b: 2 ,a: 1,};
            const obj2 = { b: 5, c: 10 };
            console.log(Object.assign(obj1,obj2))
            
            // use Spred Operator

            const result = { ...obj2, ...obj1 };
            console.log(result);
          }
       `,
      outPut: '{a: 1, b: 5, c: 10}'
    },
    {
      id: 14,
      title: 'Search Filter',
      description: 'Search the values in array of objects',
      starterCode: `
       search: String = '';
       dammyArray = []; 

         ngOnInit() {
            this.dammyArray = this.userData;
          }
          searchFilter() {
            this.dammyArray = this.userData.filter((va) =>
              va.name.toLocaleLowerCase().includes(this.search)
            );
            console.log(this.dammyArray, '===>>', this.userData);
          }
          // Html File...
            <input type="text" [(ngModel)]="search" (keyup)="searchFilter()">
            <div *ngFor="let a of dammyArray">
              <p>{{a.name}}</p>
            </div>
       `,
      outPut: ''
    },
  ];