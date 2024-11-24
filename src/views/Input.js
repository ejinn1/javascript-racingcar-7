import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class Input {
  async propmtCarName() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNames = input.split(',').map((name) => name.trim());

    try {
      Validator.validateCarNames(carNames);
    } catch (error) {
      console.log(error.message);
      this.propmtCarName();
    }

    return carNames;
  }
}

export default Input;
