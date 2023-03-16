import { useState } from "react";
import { UseCounterProps } from "./userCounter.types";

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(count);
  return { count, increment, decrement, reset };
};
