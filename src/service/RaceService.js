import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import Race from '../model/Race.js';
import OutputView from '../views/Output.js';

class RaceService {
  runRace(carNames, tryCount) {
    const cars = carNames.map((name) => new Car(name));

    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          car.move();
        }
      });
      OutputView.displayRaceStatus(cars);
    }

    const race = new Race(cars);
    return race.getWinners().map((winner) => winner.name);
  }
}

export default RaceService;
