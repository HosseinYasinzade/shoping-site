import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 sm:px-7">{children}</div>;
};

export default Container;
