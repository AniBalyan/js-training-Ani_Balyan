    /*
Homework: Create a `Car` Class with Inheritance, Encapsulation, and Polymorphism in JavaScript

🚀 **Objective**:
Create a `Car` superclass and two subclasses: `ElectricCar` and `GasCar` with inheritance, encapsulation, and polymorphism.

---

### **Super Class: `Car`**

✅ **Properties**:
- `make` (String): Must be a non-empty string. Capitalize first letter.
- `model` (String): Must be a non-empty string. Capitalize first letter.
- `year` (Number): Must be >= 1886. Defaults to 2025 if not provided.

✅ **Methods**:
- **Setters** and **Getters** for `make`, `model`, and `year`.
- **Private Method** `#checkServiceStatus()`: Logs `"Service status: OK"`.
- **Static Method** `vehicleType()`: Returns `"Car"`.
- **`displayDetails()`**: Returns `"This is a car model [model] of the year [year]."`

---

### **Child Class: `ElectricCar`**

✅ **Properties**:
- `batteryCapacity` (Number): Indicates the battery capacity in kWh (default: `50`).
- `electricRange` (Number): Indicates the maximum driving range on a single charge in kilometers (default: `350`).
- `chargingTime` (Number): Time in hours to fully charge the car (default: `8`).

✅ **Methods**:
- **Constructor**: Call `super(make, model, year)` and initialize `batteryCapacity`, `electricRange`, and `chargingTime`.
- **Setter and Getter** for `batteryCapacity`, `electricRange`, and `chargingTime`.
- **`chargeBattery()`**: Logs `"Charging the battery..."`.
- **`displayDetails()`**: Override to return `"This is an Electric Car model [model] of the year [year], with a [batteryCapacity] kWh battery, [electricRange] km range, and charging time of [chargingTime] hours."`
- **Static Method** `isEcoFriendly()`: Returns `true`.

---

### **Child Class: `GasCar`**

✅ **Properties**:
- `fuelCapacity` (Number): Indicates the fuel tank capacity in liters (default: `50`).
- `fuelEfficiency` (Number): Indicates the fuel efficiency in kilometers per liter (default: `15`).
- `emissions` (Number): CO2 emissions in grams per kilometer (default: `120`).

✅ **Methods**:
- **Constructor**: Call `super(make, model, year)` and initialize `fuelCapacity`, `fuelEfficiency`, and `emissions`.
- **Setter and Getter** for `fuelCapacity`, `fuelEfficiency`, and `emissions`.
- **`refuel()`**: Logs `"Refueling the car..."`.
- **`displayDetails()`**: Override to return `"This is a Gas Car model [model] of the year [year], with a [fuelCapacity]L fuel tank, [fuelEfficiency] km/L efficiency, and [emissions] g/km CO2 emissions."`
- **Static Method** `isEcoFriendly()`: Returns `false`.

---

### **Requirements**:
- Use **inheritance** (`super()`).
- Implement **encapsulation** (private properties, setters, getters).
- Apply **polymorphism** (override `displayDetails()`).
- Implement **static methods**.

---
*/

    
    class Car {
        constructor(make, model, year = 2025) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        get make() {
            return this._make;
        }

        set make(carMake) {
            if (typeof carMake !== "string" || carMake.trim().length === 0) {
                throw new Error("Car make should be a non-empty string");
            }
            this._make = carMake[0].toUpperCase() + carMake.slice(1).toLowerCase();
        }

        get model() {
            return this._model;
        }

        set model(carModel) {
            if (typeof carModel !== "string" || carModel.trim().length === 0) {
                throw new Error("Car model should be a non-empty string");
            }
            this._model = carModel[0].toUpperCase() + carModel.slice(1).toLowerCase();
        }

        get year() {
            return this._year;
        }

        set year(carYear) {
            if (typeof carYear !== "number") {
                throw new Error("Car year should be a number");
            }
            if (carYear < 1886) {
                throw new Error("Car year must be >= 1886");
            }
            this._year = carYear;
        }

        #checkServiceStatus() {
            console.log("Service status: OK");
        }

        static vehicleType() {
            return "Car";
        }

        displayDetails() {
            return `This is a car model ${this._model} of the year ${this._year}.`;
        }
    }

    class ElectricCar extends Car {
        constructor(make, model, year = 2025, batteryCapacity = 50, electricRange = 350, chargingTime = 8) {
            super(make, model, year);
            this.batteryCapacity = batteryCapacity;
            this.electricRange = electricRange;
            this.chargingTime = chargingTime;
        }

        get batteryCapacity() {
            return this._batteryCapacity;
        }

        set batteryCapacity(carBatteryCapacity) {
            if (typeof carBatteryCapacity !== "number") {
                throw new Error("Battery capacity should be a number");
            }
            this._batteryCapacity = carBatteryCapacity;
        }

        get electricRange() {
            return this._electricRange;
        }

        set electricRange(carElectricRange) {
            if (typeof carElectricRange !== "number") {
                throw new Error("Range should be a number");
            }
            this._electricRange = carElectricRange;
        }

        get chargingTime() {
            return this._chargingTime;
        }

        set chargingTime(carChargingTime) {
            if (typeof carChargingTime !== "number") {
                throw new Error("Charging time should be a number");
            }
            this._chargingTime = carChargingTime;
        }

        chargeBattery() {
            console.log("Charging the battery...");
        }

        displayDetails() {
            return `This is an Electric Car model ${this._model} of the year ${this._year}, with a ${this._batteryCapacity} kWh battery, ${this._electricRange} km range, and charging time of ${this._chargingTime} hours.`;
        }

        static isEcoFriendly() {
            return true;
        }
    }

    class GasCar extends Car {
        constructor(make, model, year, fuelCapacity = 50, fuelEfficiency = 15, emissions = 120) {
            super(make, model, year);
            this.fuelCapacity = fuelCapacity;
            this.fuelEfficiency = fuelEfficiency;
            this.emissions = emissions;
        }

        get fuelCapacity() {
            return this._fuelCapacity;
        }

        set fuelCapacity(carFuelCapacity) {
            if (typeof carFuelCapacity !== "number") {
                throw new Error("Fuel capacity should be a number");
            }
            this._fuelCapacity = carFuelCapacity;
        }

        get fuelEfficiency() {
            return this._fuelEfficiency;
        }

        set fuelEfficiency(carFuelEfficiency) {
            if (typeof carFuelEfficiency !== "number") {
                throw new Error("Fuel efficiency should be a number");
            }
            this._fuelEfficiency = carFuelEfficiency;
        }

        get emissions() {
            return this._emissions;
        }

        set emissions(carEmissions) {
            if (typeof carEmissions !== "number") {
                throw new Error("Emissions should be a number");
            }
            this._emissions = carEmissions;
        }

        refuel() {
            console.log("Refueling the car...");
        }

        displayDetails() {
            return `This is a Gas Car model ${this._model} of the year ${this._year}, with a ${this._fuelCapacity}L fuel tank, ${this._fuelEfficiency} km/L efficiency, and ${this._emissions} g/km CO2 emissions.`;
        }

        static isEcoFriendly() {
            return false;
        }
    }


    try {
        const myElectricCar = new ElectricCar("tesla", "MODEL S", 2023);
        console.log(myElectricCar.displayDetails()); 
    } catch (error) {
        console.error(error.message);
    }

    try {
        const myGasCar = new GasCar("toyota", "corolla", 2022);
        console.log(myGasCar.displayDetails()); 
    } catch (error) {
        console.error(error.message);
    }