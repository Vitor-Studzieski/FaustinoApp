import Link from 'next/link';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚧 Página em Construção 🚧</h1>
      <p className={styles.subtitle}>
        Bem-vindo ao App FAUSTINO! <br />
        Estamos preparando o melhor sistema de vendas para você.
      </p>
      
      <Link href="/" className={styles.backLink}>
        Voltar para o início
      </Link>
    </div>
  );
}