import Image from "next/image";
import Botao from '@/componentes/botao'; 
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      
      {/* Blobs de fundo (Lava Lamp) */}
      <div className={`${styles.blob} ${styles.blobTopLeft}`}></div>
      <div className={`${styles.blob} ${styles.blobTopRight}`}></div>
      <div className={`${styles.blob} ${styles.blobBottomLeft}`}></div>
      <div className={`${styles.blob} ${styles.blobBottomRight}`}></div>
      
      {/* Novos Blobs adicionais para preencher a tela */}
      <div className={`${styles.blob} ${styles.blob5}`}></div>
      <div className={`${styles.blob} ${styles.blob6}`}></div>
      <div className={`${styles.blob} ${styles.blob7}`}></div>
      <div className={`${styles.blob} ${styles.blob8}`}></div>
      <div className={`${styles.blob} ${styles.blob9}`}></div>
      <div className={`${styles.blob} ${styles.blob10}`}></div>

      <main className={styles.mainContent}>
        <div className={styles.logoWrapper}>
          <Image 
            src="/logo-app.png" 
            alt="Logo Faustino" 
            width={250} 
            height={250} 
            className={styles.logoImage}
            priority
          />
        </div>

        <div className={styles.buttonGroup}>
          <Botao href="/home" variant="primario">
            Entrar
          </Botao>
          
          <Botao href="/login" variant="secundario">
            Faça seu login
          </Botao>
        </div>
      </main>
    </div>
  );
}