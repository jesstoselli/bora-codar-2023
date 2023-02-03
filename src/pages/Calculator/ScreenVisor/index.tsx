// import Textfit from "@namhong2001/react-textfit";
import { Equals } from "phosphor-react";
import { CalculatorVisor } from "./styles";

interface ScreenProps {
  calculation: string;
  result: string;
}

export function ScreenVisor({ calculation, result }: ScreenProps) {
  return (
    <CalculatorVisor>
      <p>{calculation}</p>
      <div>
        <Equals size={18} color={"#6b6b6b"} />
        <h5>{result}</h5>
      </div>
    </CalculatorVisor>
  );
}
