import Controller from './controller/Controller';

class App {
  async run() {
    const carController = new Controller();

    carController.start();
  }
}

export default App;
