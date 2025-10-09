type Props = {
  children: React.ReactNode;
  variant: string;
  className?: string;
};
function Title({ children, variant, className }: Props) {
  const variantStyles: Record<string, string> = {
    "Main-title": "font-bold text-3xl",
  };
  return (
    <h2 className={`${variantStyles[variant]} ${className}`}>{children}</h2>
  );
}

export default Title;
