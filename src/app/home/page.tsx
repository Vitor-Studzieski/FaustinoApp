import Image from 'next/image';
import Link from 'next/link'; // <--- 1. Importe o Link aqui
import styles from './home.module.css';

export default function HomePage() {
  
  const categorias = [
    { nome: 'Adega', cor: '#FEE2E2', img: '/vinhos.jpg' },
    { nome: 'Cerveja', cor: '#FEF3C7', img: '/cerveja.jpg' },
    { nome: 'Hambúrguer', cor: '#FFEDD5', img: '/burguer.png' },
    { nome: 'Mercado', cor: '#DCFCE7', img: '/mercado.png' },
    { nome: 'Petiscos', cor: '#F3E8FF', img: '/petisco.jpg' },
    { nome: 'Promoções', cor: '#E0F2FE', img: '/cupom.png' },
    { nome: 'Drinks', cor: '#FCE7F3', img: '/drink.jpg' },
    { nome: 'Água/Gelo', cor: '#E0E7FF', img: '/agua.jpg' },
  ];

  const estabelecimentos = [
    { 
      id: 1, 
      nome: 'Casa da Cevada', 
      tipo: 'Distribuidora', 
      nota: '4.8', 
      distancia: '0.75 km', 
      tempo: '10-40 min', 
      taxa: 'R$ 6,00', 
      novo: false,
      img: '/logo-cevada.jpg'
    },
    { 
      id: 2, 
      nome: 'Open Beer', 
      tipo: 'Bebidas', 
      nota: '4.9', 
      distancia: '0.45 km', 
      tempo: '20-50 min', 
      taxa: 'R$ 5,00', 
      novo: false,
      img: '/logo-openbeer.png'
    },
    { 
      id: 3, 
      nome: 'Boteco do Tião', 
      tipo: 'Bar e Petiscos', 
      nota: '4.5', 
      distancia: '0.50 km', 
      tempo: 'Fechado', 
      taxa: 'Grátis', 
      novo: false,
      img: '/logo-tiao.jpg'
    },
    { 
      id: 4, 
      nome: 'Jacaré Brasil', 
      tipo: 'Distribuidora', 
      nota: '5.0', 
      distancia: '0.70 km', 
      tempo: '20-60 min', 
      taxa: 'R$ 6,00', 
      novo: true,
      img: '/logo-jacare.jpg'
    },
    { 
      id: 5, 
      nome: 'GG E-Sport Bar', 
      tipo: 'Lanches', 
      nota: '4.2', 
      distancia: '0.46 km', 
      tempo: '30-60 min', 
      taxa: 'R$ 12,00', 
      novo: false,
      img: '/logo-gg.jpg'
    },
  ];

  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <div className={styles.addressRow}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e30000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Entregar em: <span className={styles.addressHighlight}>Rua das Palmeiras, 420</span></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <input type="text" placeholder="Busque por bebida, prato ou loja..." className={styles.searchInput} />
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>O que você quer hoje?</h2>
        <div className={styles.categoriesGrid}>
          {categorias.map((cat, index) => (
            <div key={index} className={styles.categoryItem}>
              <div className={styles.categoryIcon} style={{ backgroundColor: cat.cor }}>
                <Image 
                  src={cat.img} 
                  alt={cat.nome} 
                  width={70} 
                  height={70} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className={styles.categoryName}>{cat.nome}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lojas perto de você</h2>
        
        <div className={styles.establishmentList}>
          {estabelecimentos.map((loja) => (
            /* AQUI ESTÁ A MÁGICA:
               Verificamos se o nome é 'Jacaré Brasil'.
               Se for, o link vai para '/loja'. Se não, vai para '#' (lugar nenhum).
            */
            <Link 
              key={loja.id} 
              href={loja.nome === 'Jacaré Brasil' ? '/loja' : '#'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={styles.card}>
                <div className={styles.cardImageWrapper}>
                   <Image 
                     src={loja.img} 
                     alt={loja.nome} 
                     width={70} 
                     height={70} 
                     style={{ objectFit: 'cover' }}
                   />
                </div>
                
                <div className={styles.cardInfo}>
                  <div className={styles.storeName}>{loja.nome}</div>
                  
                  <div className={styles.storeDetails}>
                    <span className={styles.rating}>
                      ★ {loja.nota}
                    </span>
                    <div className={styles.dot}></div>
                    <span>{loja.tipo}</span>
                    <div className={styles.dot}></div>
                    <span>{loja.distancia}</span>
                  </div>

                  <div className={styles.deliveryInfo}>
                    {loja.novo && <span className={styles.tagNovo}>NOVO</span>}
                    {loja.tempo} • {loja.taxa}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <nav className={styles.bottomNav}>
        <div className={`${styles.navItem} ${styles.active}`}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Início</span>
        </div>
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