import Controller from './controller/Controller.js';

class App {
  async run() {
    const carController = new Controller();

    await carController.start();
  }
}

export default App;
