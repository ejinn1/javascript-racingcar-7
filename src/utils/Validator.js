class Validator {
  static validateCarNames(carNames) {
    if (carNames.length === 0) {
      throw new Error('[ERROR] 자동차가 입력 안됨');
    }
    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 5자보다 큼 ${name}`);
      }
    });

    if (carNames.length !== new Set(carNames).size) {
      throw new Error('[ERROR] 중복된 자동차 이름');
    }
  }
}

export default Validator;
