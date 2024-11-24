import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static displayRaceStatus(cars) {
    Console.print('\n실행 결과');
    cars.forEach((car) => {
      Console.print(car.getStatus());
    });
    Console.print('\n');
  }

  static displayRaceResult(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
export default OutputView;
