import Image from "next/image";
import ModeCard from "./ui/ModeCard";
import styles from "./page.module.css";


export default function Home() {
  return (
   <div className={styles.page}>
      <main className={styles.main}>
        
     <h1 className={styles.title}>Darts Counter</h1>

     
         
           <Image
          className={styles.logo}
          src="/DCc.png"
          width={300}
          height={300}
          alt="Darts Counter logo"
          />
        <p className={styles.subtitle}>Select game mode:</p>
      
       
        <div className={styles.modes}>
           <ModeCard label="501" href="/dashboard" />
           <ModeCard label="301" href="/dashboard" />
          <ModeCard label="Cricket" href="/dashboard" />
        </div>

        
      </main>
    </div>
  );
}
