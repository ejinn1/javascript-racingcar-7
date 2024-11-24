import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';

class InputView {
  static async getCarName() {
    while (true) {
      const input = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      const carNames = input.split(',').map((name) => name.trim());

      try {
        Validator.validateCarNames(carNames);
        return carNames;
      } catch (error) {
        Console.print(error.message);
        throw error;
      }
    }
  }

  static async getTryCount() {
    while (true) {
      const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      const count = input.trim();

      try {
        Validator.validateTryCount(count);
        return Number(count);
      } catch (error) {
        Console.print(error.message);
        throw error;
      }
    }
  }
}

export default InputView;
