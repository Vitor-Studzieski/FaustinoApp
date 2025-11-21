import Image from 'next/image';
import Link from 'next/link';
import styles from './loja.module.css';

export default function LojaPage() {
  
  // Dados mockados dos produtos (baseados na imagem)
  const produtos = [
    { id: 1, nome: 'Pinã Colada', desc: 'Produto para maiores de 18 anos', preco: 'R$ 32,00', img: '/pina-colada.jpg' },
    { id: 2, nome: 'Negroni', desc: 'Produto para maiores de 18 anos', preco: 'R$ 39,00', img: '/negroni.jpg' },
    { id: 3, nome: 'Dry Martini', desc: 'Produto para maiores de 18 anos', preco: 'R$ 29,90', img: '/dry-martini.jpg' },
    { id: 4, nome: 'Margarita', desc: 'Produto para maiores de 18 anos', preco: 'R$ 40,00', img: '/margarita.jpg' },
    { id: 5, nome: 'Sex on the beach', desc: 'Produto para maiores de 18 anos', preco: 'R$ 30,00', img: '/sex-on-the-beach.jpg' },
    { id: 6, nome: 'Caipirinha', desc: 'Produto para maiores de 18 anos', preco: 'R$ 25,00', img: '/caipirinha.jpg' },
  ];

  const categorias = ['Cerveja Lata', 'Cerveja Long Neck', 'Vodka', 'Energético', 'Drinks', 'Petiscos'];

  return (
    <div className={styles.container}>
      
      {/* Banner do Topo */}
      <div className={styles.bannerWrapper}>
        {/* Botão Voltar */}
        <Link href="/home" className={styles.backButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e30000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </Link>
        
        {/* Imagem de Fundo (Use uma foto de bar ou estante de bebidas) */}
        <Image 
          src="/banner-bar.jpg" 
          alt="Banner da Loja" 
          layout="fill" 
          className={styles.bannerImage}
          priority
        />
      </div>

      {/* Conteúdo Principal (Card Curvado) */}
      <div className={styles.mainContent}>
        
        {/* Header da Loja */}
        <div className={styles.storeHeader}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo-jacare.jpg" 
              alt="Logo Jacaré Brasil" 
              width={80} 
              height={80} 
              style={{objectFit: 'cover'}} 
            />
          </div>
          
          <h1 className={styles.storeName}>Jacaré Brasil</h1>
          <p className={styles.storeMeta}>Distribuidora • 0,70 km • $$$</p>
          
          {/* Badges / Status */}
          <div className={styles.badgesContainer}>
            <span className={`${styles.badge} ${styles.badgeAction}`}>Entrega</span>
            <span className={`${styles.badge} ${styles.badgeInfo}`}>Hoje, 20-60 min • R$ 6,00</span>
          </div>

          {/* Avaliação */}
          <div className={styles.ratingContainer}>
            <span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>5,0</span>
            <span className={styles.stars}>★★★★★</span>
            <span style={{fontSize: '0.8rem', color: '#888'}}>(100 avaliações)</span>
          </div>
        </div>

        {/* Menu de Categorias (Scroll Horizontal) */}
        <div className={styles.categoriesScroll}>
          <span className={styles.catTab}>Cerveja Lata</span>
          <span className={styles.catTab}>Cerveja Long Neck</span>
          <span className={styles.catTab}>Vodka</span>
          <span className={styles.catTab}>Energético</span>
          <span className={`${styles.catTab} ${styles.active}`}>Drinks</span>
          <span className={styles.catTab}>Petiscos</span>
        </div>

        {/* Lista de Produtos */}
        <div className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>Drinks</h2>
          
          {produtos.map((item) => (
            <div key={item.id} className={styles.productCard}>
              <Image 
                src={item.img} 
                alt={item.nome} 
                width={90} 
                height={90} 
                className={styles.prodImage}
              />
              
              <div className={styles.prodInfo}>
                <div>
                  <h3 className={styles.prodName}>{item.nome}</h3>
                  <p className={styles.prodDesc}>{item.desc}</p>
                </div>
                
                <div className={styles.prodFooter}>
                  <span className={styles.prodPrice}>{item.preco}</span>
                  <button className={styles.addButton}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Nav (Mantendo a consistência) */}
      <nav className={styles.bottomNav}>
        <div className={styles.navItem}>
          <Link href="/home" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'inherit'}}>
            <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Início</span>
          </Link>
        </div>
        <div className={`${styles.navItem} ${styles.active}`}>
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