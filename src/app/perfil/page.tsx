import Image from 'next/image';
import Link from 'next/link';
import styles from './perfil.module.css';

export default function PerfilPage() {
  return (
    <div className={styles.container}>
      
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Meu Perfil</h1>
      </header>

      {/* Seção do Avatar */}
      <section className={styles.avatarSection}>
        <div className={styles.avatarWrapper}>
          {/* Avatar Placeholder (ou a imagem do usuário) */}
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#eee" stroke="#ccc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          
          <div className={styles.editAvatarBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          </div>
        </div>
        <h2 className={styles.userName}>Visitante</h2>
        <p className={styles.userEmail}>usuario@exemplo.com</p>
      </section>

      {/* Formulário de Dados Pessoais */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Dados Pessoais</h3>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>E-mail</label>
          <input type="email" defaultValue="usuario@exemplo.com" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>CPF</label>
          <input type="text" placeholder="000.000.000-00" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Data de Nascimento</label>
          <input type="date" className={styles.input} />
        </div>
      </section>

      {/* Formulário de Segurança (Senha) */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Segurança</h3>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nova Senha</label>
          <input type="password" placeholder="••••••••" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirme sua senha</label>
          <input type="password" placeholder="••••••••" className={styles.input} />
          
          <div className={styles.passwordRules}>
            <div className={styles.ruleItem}>
              <span className={styles.ruleIcon}>x</span> Precisa ter 8 caracteres
            </div>
            <div className={styles.ruleItem}>
              <span className={styles.ruleIcon}>x</span> 1 letra maiúscula e 1 número
            </div>
          </div>
        </div>
      </section>

      {/* Fale Conosco (Conforme a imagem) */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Fale Conosco</h3>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Sua mensagem</label>
          <textarea 
            className={styles.textarea} 
            placeholder="Dúvidas, sugestões ou reclamações? Digite aqui..."
          ></textarea>
        </div>
      </section>

      {/* Botão de Salvar */}
      <div className={styles.actionArea}>
        <button className={styles.saveButton}>Salvar Alterações</button>
      </div>

      {/* Navbar Inferior */}
      <nav className={styles.bottomNav}>
        <Link href="/home" className={styles.navItem}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Início</span>
        </Link>
        <div className={styles.navItem}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Busca</span>
        </div>
        <div className={styles.navItem}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Pedidos</span>
        </div>
        {/* Ícone Ativo aqui */}
        <div className={`${styles.navItem} ${styles.active}`}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Perfil</span>
        </div>
      </nav>

    </div>
  );
}