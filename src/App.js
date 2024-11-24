import Controller from './controller/Controller.js';

class App {
  async run() {
    const carController = new Controller();

    carController.start();
  }
}

export default App;
