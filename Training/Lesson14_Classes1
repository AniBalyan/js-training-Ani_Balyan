
/*
Homework: Create an `Employee` Class (No Inheritance)

🚀 Objective:
Create a JavaScript class named `Employee` that represents an employee with strict validation rules 
and meaningful output using getters and methods.

✅ Properties:
Your class should have the following properties, all validated via setters:

1. name (String):
   - Must be between 2 and 15 characters.
   - Must be a string.
   - Normalized: first letter uppercase, the rest lowercase.

2. surname (String):
   - Same validation rules and normalization as name.

3. email (String):
   - Must follow the basic format: x.x@xx.
   - Should be trimmed (no leading/trailing spaces).
   - Must be converted to lowercase.

4. phoneNumber (String):
   - Must be a string.
   - Must be exactly 9 digits.
   - Must start with one of the valid Armenian mobile prefixes: 
     091, 093, 094, 095, 096, 097, 098, or 099.
   - No extra characters allowed (only digits, no "+" or dashes).

5. position (String):
   - Must be between 2 and 50 characters.

6. salary (Number):
   - Must be a number.
   - Must be greater than or equal to 68,000 AMD (minimum net salary in Armenia).

7. isRemote (Boolean):
   - Must be either true or false.

All values must be assigned through their respective setters during object construction. 
If any validation fails, throw an Error with a descriptive message.

📤 Getter:
Create a getter named `info` that returns a complete summary of the employee:

Example:
"Employee information: Bob Henderson is a QA Automation Engineer. He works remotely. 
His salary is 670000 AMD. Phone number: 098666666. 
Email: bob.henderson@email.com"

- If `isRemote` is false, the sentence should say: "He works on-site."

🔧 Methods:

1. giveRaise(amount):
   - Increases the salary by the given amount (number).
   - Validates that the input is a number.

2. raiseSalary(percent):
   - Increases the employee’s current salary by the given percent.
   - The percent input:
     - Must be a number.
     - Must be greater than 0.
   - Throws an error if input is invalid.

3. changePosition(newPosition):
   - Changes the employee’s position to the given value.
   - Validation rules:
     - Must be a string.
     - Must be between 2 and 50 characters.
   - Throws an error if the input is invalid.
*/

class Employee {
    constructor(name, surname, email, phoneNumber, position, salary, isRemote){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.salary = salary;
        this.isRemote = isRemote;
    }

    get name () {
        return this._name;
    }

    set name(employeeName) {
        if (typeof employeeName !== "string") {
            throw new Error("Name must be a string.");
        }

        if (employeeName.length < 2 || employeeName.length > 15) {
            throw new Error("Name should be between 2 and 15 characters.");
        }
        
        employeeName = employeeName[0].toUpperCase() + employeeName.slice(1).toLowerCase();
        this._name = employeeName;
    }
    
    get surname () {
        return this._surname;
    }

    set surname(employeeSurname) {
        if (typeof employeeSurname !== "string") {
            throw new Error("Surname must be a string.");
        }

        if (employeeSurname.length < 2 || employeeSurname.length > 15) {
            throw new Error("Surname should be between 2 and 15 characters.");
        }
        
        employeeSurname = employeeSurname[0].toUpperCase() + employeeSurname.slice(1).toLowerCase();
        this._surname = employeeSurname;
    }

    get email () {
        return this._email;
    }

    set email (employeeEmail) {
        if (typeof employeeEmail !== "string") {
            throw new Error("Email must be a string.");
          }
        const trimmedEmail = employeeEmail.trim().toLowerCase();
        const basicFormat = /^[^@]+@[^@]+\.[^@]+$/;
        if (!basicFormat.test(trimmedEmail)) {
            throw new Error("Email must follow the basic format: x.x@xx.");
        }
        this._email = trimmedEmail;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(employeePhoneNumber) {
        if (typeof employeePhoneNumber !== "string") {
            throw new Error ("Phone number should be string!");
        }

        if (employeePhoneNumber.length !== 9) {
            throw new Error ("Phone number should be 9 digits.");
        }

        const digitsOnly = /^\d{9}$/;
        if (!digitsOnly.test(employeePhoneNumber)) {
            throw new Error("Phone number must be exactly 9 digits and contain only numbers.");
        }

        const validPrefixes = ["091", "093", "094", "095", "096", "097", "098", "099"];
        const prefix = employeePhoneNumber.slice(0, 3);
        if (!validPrefixes.includes(prefix)) {
            throw new Error(`Phone number must start with a valid Armenian mobile prefix.`);
        }
    
        this._phoneNumber = employeePhoneNumber;
    }

    get position() {
        return this._position;
    }

    set position(employeePosition) {
        if (typeof employeePosition !== "string") {
            throw new Error("Position should be string");
        }

        if (employeePosition.length < 2 || employeePosition.length > 50) {
            throw new Error("Position should be between 2 and 50 characters");
        }
        this._position = employeePosition;
    }

    get salary() {
        return this._salary;
    }

    set salary(employeeSalary) {
        if (typeof employeeSalary !== "number") {
            throw new Error("Salary should be number.");
        }

        if (employeeSalary < 68000) {
            throw new Error("Salary should be >= AMD 68,000");
        }
        this._salary = employeeSalary;
    }

    get isRemote() {
        return this._isRemote;
    }

    set isRemote(employeeIsRemote) {
        if (typeof employeeIsRemote !== "boolean") {
            throw new Error("isRemote must be a boolean.");
        }
        this._isRemote = employeeIsRemote;
    }

    giveRaise(amount) {
        if (typeof amount !== "number") {
            throw new Error ("Raise should be number.")
        }
        this.salary += amount
    }

    raiseSalary(percent) {
        if (typeof percent !== "number") {
            throw new Error ("Raise percent should be number.")
        }
        if(percent <= 0) {
            throw new Error ("Raise percent must be greater than 0")
        }
        this.salary += this.salary * percent / 100
    }

    changePosition(newPosition) {
        if (typeof newPosition !== "string") {
            throw new Error ("New position must be string.")
        }

        if (newPosition.length < 2 || newPosition.length > 50) {
            throw new Error("New position should be between 2 and 50 characters.");
        }

        this.position = newPosition
    }


    get info () {
        return `Employee information: ${this.name} ${this.surname} is a ${this.position}. ${this.isRemote ? "Works remotely" : "Works on-site"}. Salary is ${this.salary} AMD. Phone number: ${this.phoneNumber}. Email: ${this.email}`;
    }
}

try {
    const emp = new Employee(
      "john",
      "smith",
      "TEST@TEST.Com",
      "091234567",
      "QA",
      100000, 
      true
    );

    console.log(emp.info);

    emp.raiseSalary(50)
    emp.giveRaise(50000);
    emp.changePosition("Senior QA")
    

    console.log(emp.info);
  } catch (err) {
    console.log(err.message); 
  }
  
 
