type Props = {
  text: string;
  variant: string;
  className?: string;
};

function Text({ text, variant, className }: Props) {
  const variantStyles: Record<string, string> = {
    "white-text": "text-white",
  };
  return <p className={`${variantStyles[variant]} ${className}`}>{text}</p>;
}

export default Text;
