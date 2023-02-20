import { useReducer } from "react";

type InitialState = {
  counter: number;
  draftCounter: number;
};

const initialState: InitialState = {
  counter: 0,
  draftCounter: 0,
};

type Action = {
  type: "increment" | "decrement" | "reset" | "updateCountFromDraft";
};

type ActionWithPayload = {
  type: "updateDraftCount";
  payload: number;
};

const reducer = (state = initialState, action: Action | ActionWithPayload) => {
  const { counter, draftCounter } = state;

  if (action.type === "increment") {
    return {
      ...state,
      counter: counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: counter - 1,
    };
  }

  if (action.type === "reset") {
    return {
      ...state,
      counter: 0,
    };
  }

  if (action.type === "updateDraftCount") {
    return {
      ...state,
      draftCounter: action.payload,
    };
  }

  if (action.type === "updateCountFromDraft") {
    return {
      ...state,
      counter: draftCounter,
      draftCounter: 0,
    };
  }

  return state;
};

const Counter = () => {
  const [{ counter, draftCounter }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{counter}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          ➖ Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          🔁 Reset
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "updateCountFromDraft" });
          }}
        >
          <input
            type="number"
            value={draftCounter}
            onChange={(e) =>
              dispatch({
                type: "updateDraftCount",
                payload: e.target.valueAsNumber,
              })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
