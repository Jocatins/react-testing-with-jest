import { useState, useEffect } from "react";

function DelayedText() {
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setText("Hello Titans");
    }, 1000);
  }, []);

  return (
    <>
      <div data-testid="delayed-text-component">
        <button>{text}</button>
      </div>
    </>
  );
}
export default DelayedText;
