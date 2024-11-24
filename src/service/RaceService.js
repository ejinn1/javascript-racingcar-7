import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import Race from '../model/Race.js';

class RaceService {
  runRace(carNames, tryCount) {
    const cars = carNames.map((name) => new Car(name));

    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        if (MissionUtils.Random.pickNumberInRange(0, 9)) {
          car.move();
        }
      });
    }

    const race = new Race();
    return race.getWinners().map((winner) => winner.name);
  }
}

export default RaceService;
