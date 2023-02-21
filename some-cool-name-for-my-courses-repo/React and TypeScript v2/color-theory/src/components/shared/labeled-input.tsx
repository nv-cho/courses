import clsx from 'clsx';
import { ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const LabeledInput = ({
  id,
  label,
  className,
  onChange,
  ...props
}: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={clsx('w-full', className)}
        onChange={onChange}
        readOnly={!onChange}
        {...props}
      />
    </div>
  );
};

export default LabeledInput;
