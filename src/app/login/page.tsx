'use client'; // <--- OBRIGATÓRIO para interatividade (onClick, onSubmit)

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Importante para o redirecionamento
import styles from './login.module.css';

export default function Login() {
  const router = useRouter();

  // Função que roda quando clica em "Entrar"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar
    // Aqui não fazemos validação nenhuma, como você pediu.
    // Apenas mandamos o usuário para a home.
    router.push('/home'); 
  };

  return (
    <div className={styles.container}>
      
      <div className={`${styles.backgroundShape} ${styles.shape1}`}></div>
      <div className={`${styles.backgroundShape} ${styles.shape2}`}></div>

      <main className={styles.loginCard}>
        
        <div className={styles.logoContainer}>
          <Image 
            src="/logo.png" 
            alt="Faustino Logo" 
            width={80} 
            height={80} 
            style={{objectFit: 'contain'}}
          />
        </div>

        <h1 className={styles.title}>Bem-vindo!</h1>
        <p className={styles.subtitle}>Insira seus dados para continuar</p>

        {/* Adicionamos o onSubmit no form */}
        <form className={styles.form} onSubmit={handleLogin}>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>E-mail</label>
            <input 
              type="text" // Mudei para text para aceitar qualquer coisa sem reclamar
              id="email" 
              placeholder="exemplo@email.com" 
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Sua senha secreta" 
              className={styles.input}
            />
          </div>

          {/* Link morto (href="#" não leva a lugar nenhum real) */}
          <Link href="#" className={styles.forgotPassword} onClick={(e) => e.preventDefault()}>
            Esqueceu a senha?
          </Link>

          <button type="submit" className={styles.button}>
            Entrar
          </button>

        </form>

        <div className={styles.footerLink}>
          {/* Link morto também */}
          Não tem uma conta? <Link href="#" onClick={(e) => e.preventDefault()}>Cadastre-se</Link>
        </div>

      </main>
    </div>
  );
}