// Task 1
function sumDigits(num) {
    var sum = 0;
    var numString = num + "";
    for (var i = 0; i < numString.length; i++) {
      sum = sum + Number(numString.charAt(i));
    }
    return sum;
  }
  console.log(sumDigits(12345));
  
  // using recursion
  const findSum = (num) => {
    if (num < 10) {
      return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
  };
  console.log(findSum(2568));
  ///End task 1
  
  //Task 2
  let factory = {
    facName: "Volkswagen Wolfsburg Plant",
    calculateWorkload: function () {
      let results = [];
      for (let i = 0; i < this.employeeWeeklyWorkload.length; i++) {
        results.push(this.employeeWeeklyWorkload[i].workload);
      }
      console.log(results);
    }, //return workHour
    formatArray: function (saxeli) {
      const test = this.find(({ name }) => name === saxeli);
      const timeleft = 5 - test.timeSpent;
      console.log(test, timeleft);
    },
  };
  
  let factoryEmployees = {
    employees: [
      { name: "John", timeSpent: 1 },
      { name: "Sam", timeSpent: 3 },
      { name: "Maria", timeSpent: 2 },
      { name: "Dan", timeSpent: 4 },
      { name: "Lorelai", timeSpent: 5 },
    ],
  };
  
  let workloadData = {
    employeeWeeklyWorkload: [
      { name: "John", workload: 40 },
      { name: "Sam", workload: 25 },
      { name: "Maria", workload: 28 },
      { name: "Dan", workload: 30 },
      { name: "Lorelai", workload: 31 },
    ],
  };
  
  let workloadArry = factory.calculateWorkload.bind(workloadData);
  
  let formatArray = factory.formatArray.bind(factoryEmployees.employees);
  
  workloadArry();
  formatArray("John");
  
  // End task 2
  
  // Task 3
  
  function sumOfNumbers(a, b) {
    return a + b;
  }
  
  let sumDigit = sumOfNumbers.apply(null, [4, 5]);
  console.log(sumDigit);
  
  // End task 3
  
  // Task 4
  
  const checkIfEven = (n) => {
    if (n % 2 == 0) {
      return n;
    }
  
    const newn = n + 1;
  
    return checkIfEven(checkIfEven(newn));
  };
  console.log(checkIfEven(15));