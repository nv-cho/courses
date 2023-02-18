/**
 * JSX.Element;: 💩 This doesn't account for arrays (e.g. multiple elements) at all.
 * JSX.Element | JSX.Element[]; 😕 This doesn't accept strings.
 * React.ReactChildren;: 🤪 Not at even an appropriate type; it's a utility function.
 * React.ReactChild[];: 😀 Accepts multiple children, but it doesn't accept a single child.
 * React.ReactNode;: 🏆 Accepts everything.
 */

import { ReactNode, PropsWithChildren } from "react";

/** This is okey, but there is another way more usefull using "PropsWithChildren" utility function */

const Example1 = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

/** --------------------------------------------- */

/** This utility function allow us to type children as a react node but also allow us to define the type of other props if we are gonna need it */

type Props = {
  color: string;
  margin: string;
  padding: string;
};

const Example2 = (
  {
    children,
    color,
    margin,
    padding,
  }: PropsWithChildren<Props> /** or could be: PropsWithChildren & Props */
) => {
  return <div style={{ color, margin, padding }}>{children}</div>;
};

/** --------------------------------------------- */
