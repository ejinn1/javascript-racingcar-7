import Input from './views/Input.js';

class App {
  async run() {
    const inputView = new Input();

    const carNames = await inputView.getCarName();
    const tryCount = await inputView.getTryCount();
  }
}

export default App;
