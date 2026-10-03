import Link from "next/link";
import styles from "./ModeCard.module.css";

type ModeCardProps = {
  label: string;
  href: string;
};

export default function ModeCard({ label, href }: ModeCardProps) {
  return (
    <Link href={href} className={styles.card}>
      {label}
    </Link>
  );
}