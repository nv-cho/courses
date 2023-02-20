import styles from "../styles/home.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <div>Hi, my name is Ignacio Presas ⚡</div>
        <div>
          <Link href="/blog">blog</Link>
        </div>
        <div>
          <Link href="/contact">contact me</Link>
        </div>
      </div>
    </div>
  );
}
