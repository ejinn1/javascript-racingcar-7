import RaceService from '../service/RaceService.js';

class Controller {
  constructor() {
    this.raceService = new RaceService();
  }

  async start() {
    const carNames = await inputView.getCarName();
    const tryCount = await inputView.getTryCount();

    const raceResults = this.raceService.runRace(carNames, tryCount);
  }
}

export default Controller;
