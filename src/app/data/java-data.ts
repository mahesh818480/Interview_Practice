import { Question } from "../services/question.service";

export const JAVA_QUESTIONS:Question[] =[
     {
      id: 1,
      title: 'Find Largest and Second Largest Number',
      description: 'Find the largest number and SecondLarge Number in an array.',
      starterCode: `
       public class Main{
         public static void findLargeThreeNumbers(){
            int[] largeNum ={10,20,30,10,40,90,50};
            int firstLarge=0;
            int secondLarge =0;
            int thirdNum =0;
                for(int num : largeNum){
                    if(num > firstLarge){
                        thirdNum = secondLarge;
                        secondLarge = firstLarge;
                        firstLarge = num;
                    } else if (num > secondLarge) {
                        thirdNum = secondLarge;
                        secondLarge= num;
                    }else if(num > thirdNum){
                        thirdNum= num;
                    }
                }
                System.out.println(firstLarge+" "+secondLarge+" "+thirdNum);
           }
         public static void main(String[] args){
             findLargeThreeNumbers();
         }
       }
`,
      outPut: ''
    },
];
