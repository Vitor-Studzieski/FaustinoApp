import Link from 'next/link';
import styles from './botao.module.css';

interface BotaoProps {
  children: React.ReactNode;
  href?: string; /* Se tiver href, vira Link. Se não, é botão normal */
  variant?: 'primario' | 'secundario';
  onClick?: () => void;
}

export default function Botao({ children, href, onClick, variant = 'primario' }: BotaoProps) {
  // Define qual classe usar (primario ou secundario)
  const classeEstilo = `${styles.botao} ${variant === 'primario' ? styles.primario : styles.secundario}`;

  if (href) {
    return (
      <Link href={href} className={classeEstilo}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classeEstilo}>
      {children}
    </button>
  );
}