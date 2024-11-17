import Input from './views/Input.js';

class App {
  async run() {
    const inputView = new Input();

    const carNames = await inputView.propmtCarName();
  }
}

export default App;
