import Link from "next/link";

const variantStyles = {
  "white-text": "text-white",
} as const;

type Variant = keyof typeof variantStyles;

type Props = {
  children: React.ReactNode;
  variant: Variant;
  className?: string;
  href?: string;
};

export default function Links({
  children,
  variant,
  className = "",
  href = "#",
}: Props) {
  return (
    <Link
      href={href}
      className={`${variantStyles[variant]} ${className} font-bold underline`.trim()}
    >
      {children}
    </Link>
  );
}
