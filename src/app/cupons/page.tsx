import Image from 'next/image';
import Link from 'next/link';
import styles from './cupons.module.css';

export default function CuponsPage() {
  
  // Lista fictícia de cupons para preencher a tela
  const meusCupons = [
    { id: 1, codigo: 'BEMVINDO10', desc: '10% de desconto na primeira compra', validade: 'Válido até 30/12' },
    { id: 2, codigo: 'FRETEGRATIS', desc: 'Entrega grátis em pedidos acima de R$50', validade: 'Válido hoje' },
    { id: 3, codigo: 'JACARE20', desc: 'R$ 20,00 OFF no Jacaré Brasil', validade: 'Válido para Drinks' },
  ];

  return (
    <div className={styles.container}>
      
      {/* Header com botão voltar */}
      <header className={styles.header}>
        <Link href="/home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e30000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </Link>
        <h1 className={styles.pageTitle}>Meus Cupons</h1>
      </header>

      {/* Área de Resgate (Hero) */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
           {/* Use uma imagem da pasta public ou um ícone SVG grande */}
           {/* Se não tiver imagem, use este SVG de ticket: */}
           <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M21 6H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path>
             <circle cx="8" cy="12" r="2"></circle>
             <path d="M15 6v12"></path>
           </svg>
        </div>
        
        <h2 className={styles.heroTitle}>Tem um código?</h2>
        <p className={styles.heroSubtitle}>Digite abaixo para adicionar à sua carteira</p>

        <div className={styles.inputWrapper}>
          <label className={styles.labelInput}>Resgatar código de cupom</label>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Insira o código" className={styles.couponInput} />
            <button className={styles.redeemButton}>Resgatar</button>
          </div>
        </div>
      </section>

      {/* Lista de Cupons */}
      <section className={styles.listSection}>
        <h2 className={styles.sectionTitle}>Disponíveis para uso</h2>
        
        {meusCupons.map((cupom) => (
          <div key={cupom.id} className={styles.couponCard}>
            {/* Lado Esquerdo (Icone) */}
            <div className={styles.couponLeft}>
              <svg className={styles.couponIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
            </div>
            
            {/* Conteúdo */}
            <div className={styles.couponContent}>
              <span className={styles.couponCode}>{cupom.codigo}</span>
              <span className={styles.couponDesc}>{cupom.desc}</span>
              <span className={styles.couponValid}>{cupom.validade}</span>
            </div>

            {/* Ação */}
            <button className={styles.useButton}>Usar</button>
          </div>
        ))}
      </section>

      {/* Navbar Inferior (Reutilizada) */}
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
        <div className={styles.navItem}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Perfil</span>
        </div>
      </nav>

    </div>
  );
}