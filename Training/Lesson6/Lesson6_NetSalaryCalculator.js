//   Net Salary Calculation Function Based on Armenian Tax Laws:
//    The requirement to implement a Net Salary Calculation Function arises from
//    the need to automate salary calculations for employees while adhering to
//    Armenian tax laws. The purpose of this function is to accurately compute
//    an employee’s net salary after deducting the applicable taxes, social
//    security contributions, and stamp duty based on their gross salary.

// Functional Requirements:
// 1. The function should accept a gross salary as an input parameter.
//    - The input should be a positive number representing the total salary before tax deductions.
// 2. The function should validate the input:
//    - If the input is not a number or is less than or equal to 0, an error should be thrown.
// 3. The function should calculate the net salary after deducting applicable taxes and contributions.
//    - The net salary is the final amount received after all mandatory deductions.
// 4. The following deductions should be considered:
//    - **Income Tax:** A flat 20% of the gross salary must be deducted.
//      > Formula: Income Tax = grossSalary * 0.20
//    - **Social Security Contributions:**
//      > The social security contribution is based on the employee’s gross salary, as follows:
//        - **Up to 500,000 AMD**: Deduct 5% of the gross salary.
//          - Formula: Social Security = grossSalary * 0.05
//        - **500,001 to 1,125,000 AMD**: Deduct 10% of the gross salary, then subtract 25,000 AMD.
//          - Formula: Social Security = (grossSalary * 0.10) - 25,000
//        - **Over 1,125,000 AMD**: Only consider the first 1,125,000 AMD for the calculation.
//          - Formula: Social Security = (1,125,000 * 0.10) - 25,000 = 112,500 - 25,000 = 87,500
//      > The maximum social security contribution amount is 87,500 AMD for gross salaries above 1,125,000 AMD.
//    - **Stamp Duty (Դրոշմանիշային վճար):**
//      > The stamp duty is deducted based on the employee’s gross salary as follows:
//        - Up to 100,000 AMD: 1,500 AMD
//        - 100,001 – 200,000 AMD: 3,000 AMD
//        - 200,001 – 500,000 AMD: 5,500 AMD
//        - 500,001 – 1,000,000 AMD: 8,500 AMD
//        - Over 1,000,000 AMD: 15,000 AMD
// 5. The function should return only the net salary amount as a number.
//    - Formula: Net Salary = grossSalary - Income Tax - Social Security - Stamp Duty
//    - The returned value should not include additional details, such as breakdowns of deductions.


function salary (grossSalary) {

    if (typeof grossSalary !== "number" || grossSalary <= 0) {
        return "Enter positive number!"
    }

    let tax = grossSalary * 0.20;
    let socialSecurity;
    let stampDuty;

   if (grossSalary <=500000) {
    socialSecurity = grossSalary * 0.05
   }
   else if (grossSalary > 500000 && grossSalary <= 1125000) {
   socialSecurity = (grossSalary * 0.10) -25000
   }
   else if (grossSalary > 1125000) {
    socialSecurity = 87500
   }

   if(grossSalary <= 100000) {
    stampDuty = 1500
   }
   else if (grossSalary >100000 && grossSalary <= 200000) {
    stampDuty = 3000
   }
   else if (grossSalary > 200000 && grossSalary <= 500000) {
    stampDuty = 5500
   }
   else if (grossSalary > 500000 && grossSalary <= 1000000) {
    stampDuty = 8500
   }
    else if (grossSalary > 1000000) {
        stampDuty = 15000
    }

   let netSalary = grossSalary - tax - socialSecurity - stampDuty

   return netSalary
   
}

    console.log(salary(500000))