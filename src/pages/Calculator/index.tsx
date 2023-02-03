import { useState } from "react";

//Icons
import {
  Equals,
  Plus,
  Minus,
  Divide,
  X,
  PlusMinus,
  Percent,
} from "phosphor-react";

// Styles
import {
  CalculatorButton,
  CalculatorButtonsSection,
  CalculatorContainer,
  CalculatorContent,
  CalculatorItself,
} from "./styles";
import { ScreenVisor } from "./ScreenVisor";

export function Calculator() {
  const [calculation, setCalculation] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  const [screenValue, setScreenValue] = useState("0");

  function numberClickHandler(value: number) {
    console.log(value);

    if (calculation.number.toString.length < 16) {
      setCalculation({
        ...calculation,
        number:
          calculation.number === 0 && value === 0
            ? 0
            : calculation.number % 1 === 0
            ? Number(calculation.number + value)
            : calculation.number + value,
        result: !calculation.sign ? 0 : calculation.result,
      });
    }
  }

  function dotClickHandler() {
    console.log(". clicked");
    setCalculation({
      ...calculation,
      number: !calculation.number.toString().includes(".")
        ? Number(calculation.number + ".")
        : calculation.number,
    });
  }

  function signClickHandler(value: string) {
    console.log(value);

    setCalculation({
      ...calculation,
      sign: value,
      result:
        !calculation.result && calculation.number
          ? calculation.number
          : calculation.result,
      number: 0,
    });
  }

  function equalsClickHandler() {
    if (calculation.sign && calculation.number) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalculation({
        ...calculation,
        result:
          calculation.number === 0 && calculation.sign === "/"
            ? 0
            : math(
                Number(calculation.result),
                Number(calculation.number),
                calculation.sign
              ),
        sign: "",
        number: 0,
      });
    }
  }

  function invertClickHandler() {
    setCalculation({
      ...calculation,
      number: calculation.number ? calculation.number * -1 : 0,
      result: calculation.result ? calculation.result * -1 : 0,
      sign: "",
    });
  }

  function percentClickHandler() {
    let num = calculation.number ? calculation.number : 0;
    let res = calculation.result ? calculation.result : 0;

    setCalculation({
      ...calculation,
      number: (num /= Math.pow(100, 1)),
      result: (res /= Math.pow(100, 1)),
      sign: "",
    });
  }

  function resetClickHandler() {
    setCalculation({
      ...calculation,
      sign: "",
      number: 0,
      result: 0,
    });
  }

  return (
    <CalculatorContainer>
      <CalculatorContent>
        <CalculatorItself>
          <ScreenVisor calculation='10 + 20' result='30' />
          <CalculatorButtonsSection>
            {/* Row 1 */}
            <CalculatorButton
              className='ceButton'
              onClick={() => console.log("CE clicked")}
            >
              CE
            </CalculatorButton>
            <CalculatorButton onClick={resetClickHandler}>C</CalculatorButton>
            <CalculatorButton onClick={percentClickHandler}>
              <Percent size={28} />
            </CalculatorButton>
            <CalculatorButton
              onClick={() => signClickHandler("/")}
              buttonColor='purple'
            >
              <Divide size={28} />
            </CalculatorButton>

            {/* Row 2 */}
            <CalculatorButton onClick={() => numberClickHandler(7)}>
              7
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(8)}>
              8
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(9)}>
              9
            </CalculatorButton>
            <CalculatorButton
              onClick={() => signClickHandler("x")}
              buttonColor='purple'
            >
              <X size={28} />
            </CalculatorButton>

            {/* Row 3 */}
            <CalculatorButton onClick={() => numberClickHandler(4)}>
              4
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(5)}>
              5
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(6)}>
              6
            </CalculatorButton>
            <CalculatorButton
              onClick={() => signClickHandler("-")}
              buttonColor='purple'
            >
              <Minus size={28} />
            </CalculatorButton>

            {/* Row 4 */}
            <CalculatorButton onClick={() => numberClickHandler(1)}>
              1
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(2)}>
              2
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(3)}>
              3
            </CalculatorButton>
            <CalculatorButton
              onClick={() => signClickHandler("+")}
              buttonColor='purple'
            >
              <Plus size={28} />
            </CalculatorButton>

            {/* Row 5 */}
            <CalculatorButton onClick={invertClickHandler}>
              <PlusMinus size={28} />
            </CalculatorButton>
            <CalculatorButton onClick={() => numberClickHandler(0)}>
              0
            </CalculatorButton>
            <CalculatorButton onClick={dotClickHandler}>,</CalculatorButton>
            <CalculatorButton
              onClick={equalsClickHandler}
              className='equalsButton'
            >
              <Equals size={28} />
            </CalculatorButton>
          </CalculatorButtonsSection>
        </CalculatorItself>
      </CalculatorContent>
    </CalculatorContainer>
  );
}
