class Race {
  constructor(cars) {
    this.cars = cars;
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));

    return this.cars.filter((car) => car.position === maxPosition);
  }
}

export default Race;
