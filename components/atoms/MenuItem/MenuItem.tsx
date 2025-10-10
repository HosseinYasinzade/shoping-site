import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

function MenuItem({ children, className = "", href = "#" }: Props) {
  return (
    <li className="list-none">
      <Link href={href} className={`${className} text-2xl`}>
        {children}
      </Link>
    </li>
  );
}

export default MenuItem;
