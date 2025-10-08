type Props = {
  children: React.ReactNode;
  variant: string;
  className?: string;
};

function Text({ children, variant, className }: Props) {
  const variantStyles: Record<string, string> = {
    "white-text": "text-white",
  };

  return <p className={`${variantStyles[variant]} ${className}`}>{children}</p>;
}

export default Text;
