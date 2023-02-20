import { ChangeEventHandler, PropsWithChildren, useState } from 'react';

type QuotesProps = {
  onSubmit: (count: number) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Quotes = ({
  children,
  onSubmit,
  onChange,
}: PropsWithChildren<QuotesProps>) => {
  const [count, setCount] = useState(0);

  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          onSubmit(count);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(e) => {
              setCount(e.target.valueAsNumber);
            }}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
