function returnThis(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    metodoOriginal.apply(args);
    return target;
  };

  return descriptor;
}

class Calculator {
  private _result = 0;

  constructor(value: number) {
    this._result = value;
  }

  add(value: number): Calculator {
    this._result += value;
    return this
  }

  subtract(value: number): Calculator {
    this._result -= value;
    return this
  }

  multiply(value: number): Calculator {
    this._result *= value;
    return this
  }

  divide(value: number): Calculator {
    if (value === 0) throw new Error("Division by zero is not allowed");
    this._result /= value;
    return this
  }

  power(value: number): Calculator {
    this._result **= value;
    return this
  }

  getResult(): number {
    return this._result;
  }
}
