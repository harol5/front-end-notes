class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  startCar() {
    console.log("car started");
  }

  brake() {
    console.log("breaks applied");
  }
}

export default Car;
