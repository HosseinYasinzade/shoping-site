import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

function MenuItem({ children, className = "", href = "#" }: Props) {
  return (
    <li>
      <Link href={href} className={`${className} font-bold underline`}>
        {children}
      </Link>
    </li>
  );
}

export default MenuItem;
