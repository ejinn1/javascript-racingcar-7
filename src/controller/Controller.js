import RaceService from '../service/RaceService.js';
import InputView from '../views/Input.js';
import OutputView from '../views/Output.js';

class Controller {
  constructor() {
    this.raceService = new RaceService();
  }

  async start() {
    const carNames = await InputView.getCarName();
    const tryCount = await InputView.getTryCount();

    const raceResults = this.raceService.runRace(carNames, tryCount);
    OutputView.displayRaceResult(raceResults);
  }
}

export default Controller;
