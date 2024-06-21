function findPairWithSum(numbers, targetSum) {

    const resultPairs = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        resultPairs.push([numbers[i], numbers[j]]);
      }
    }
}
    if(resultPairs.length === 0){
        return "Pair not found..";
    }else{
        return resultPairs
    }
    
  }

// First test
number1 = [10, 15, 1, 5, 7, 8, 3];
targetSum = 18;
console.log("The input for the test 2 => ", number1);
console.log("TargetSum for the test 2 =>", targetSum);
const finalResult = findPairWithSum(number1, targetSum);
console.log("Final result for Test 2 => ", finalResult); //successfuly found the pairs in the array.

//Second Test
number2 = [5, 2, 6, 8, 1, 9];
targetSum = 12;
console.log("The input for the test 2 => ", number2);
console.log("TargetSum for the test 2 =>", targetSum);
const finalResult2 = findPairWithSum(number2, targetSum);
console.log("Final result for Test 2 => ", finalResult2); //Pair not found in the array.

//Third Test
number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
targetSum = 9;
console.log("The input for the test 3 => ", number3);
console.log("TargetSum for the test 3 =>", targetSum);
const finalResult3 = findPairWithSum(number3, targetSum);
console.log("Final result for Test 3 => ", finalResult3); //successfuly found the pairs in the array.