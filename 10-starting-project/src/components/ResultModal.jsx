import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef(null);

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime}</strong>.
        </p>
        <p>
          You stopped the time with
          <strong>{formattedRemainingTime} seconds left</strong>.
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;

// export default function ResultModal({ result, targetTime }) {
//   return (
//     <dialog className="result-modal">
//       <h2>Your {result}</h2>
//       <p>
//         The target time was <strong>{targetTime}</strong>.
//       </p>
//       <p>
//         You stop the time with <strong>X seconds left</strong>.
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }
