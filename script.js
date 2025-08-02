// Ma'lumotlarning yangi, filtrlash uchun qulay strukturasi
// Har bir obyektning qaysi asosiy kategoriyaga (superCategory) tegishliligi ko'rsatilgan
const allLinksData = [
    // Kunlik
    { superCategory: 'daily', icon: '📝', title: 'Topshiriqlar', description: 'Barcha joriy vazifalarni kuzatish', url: 'https://tasks-taminot-4a2c3.web.app' },
    { superCategory: 'daily', icon: '📅', title: 'Planner', description: 'Raxbar uchun kunlik izohlar', url: 'https://docs.google.com/spreadsheets/d/1_GLmNESbbM9y6ptWun3ZFQZcoudf0DVgCOwdBdJHGyg/edit?usp=sharing' },
    { superCategory: 'daily', icon: '🏭', title: 'Mexmash kontaktlari', description: 'Zavod ichki raqamlari va xodimlar', url: '#' },
    { superCategory: 'daily', icon: '👤', title: 'Kontragentlar', description: 'Tashqi hamkorlar va kompaniyalar', url: 'https://docs.google.com/spreadsheets/d/1hRqsZJ4g7yZrzQi_a_G2JH88ZcyDllvqFC9y5BLeJdU/edit?gid=0#gid=0' },

    // Hisobotlar
    { superCategory: 'reports', icon: '📄', title: 'Import shartnomalari reestri', description: 'Barcha import shartnomalari reestri', url: 'https://docs.google.com/spreadsheets/d/1q3o8QBvm8VGyyZYU9XWtlcIbi0VjR2Dh2RrKnOjofUk/edit?usp=sharing' },
    { superCategory: 'reports', icon: '🛒', title: 'Import buyurtmalar', description: 'Import buyurtmalar holati', url: 'https://docs.google.com/spreadsheets/d/1iglrs-7XUKSuithww3bTIUJ8MSI5dfsDrYOp-Bg9WRY/edit?usp=sharing' },
    { superCategory: 'reports', icon: '🧭', title: 'Importni rejalashtirish', description: 'Kelgusi oylar uchun xaridlar rejasi', url: 'https://drive.google.com/drive/folders/1qnwZa3nWC4Dt762y7PE-e-c0VuvJaLSm?usp=sharing' },
    { superCategory: 'reports', icon: '💸', title: 'Import to\'lovlari', description: 'Xorijiy hamkorlarga to\'lovlar', url: 'https://docs.google.com/spreadsheets/d/1qwQKJB3AGgXseTnCbygzpNdE-wr0fhrTE1N6aHG5zeE/edit?usp=sharing' },
    { superCategory: 'reports', icon: '💰', title: 'Maxalliy to\'lovlar', description: 'Mahalliy bozor uchun to\'lovlar', url: 'https://docs.google.com/spreadsheets/d/1poNMdyaw-zn2PBn00Pa6RYXdLz5rmKTpx2H-Av9bKAo/edit?usp=sharing' },
    { superCategory: 'reports', icon: '🚚', title: 'Yo\'ldagi yuklar', description: 'Yuklarning holati', url: 'https://drive.google.com/drive/folders/10BPhERzkaX_BY6nst1Vc8GdyEKml6oe2?usp=sharing' },
    { superCategory: 'reports', icon: '📦', title: 'Ombor qoldiqlari', description: 'Ombordagi xomashyo va mahsulotlar', url: 'https://docs.google.com/spreadsheets/d/1PMG99u4OoDlpL3MAoPV4cx3iuXf351bIfGTqVn3TcTo/edit?usp=sharing' },
    { superCategory: 'reports', icon: '📈', title: 'Narxlar analitikasi', description: 'Xomashyo va komponentlar narxlari', url: 'https://docs.google.com/spreadsheets/d/1xVMgLEcgV5QSyq42nSfpczco41ISSMZcbCZ6ZJ52QlM/edit?usp=sharing' },
    
    // R&D va Sinovlar
    { superCategory: 'rnd', icon: '💡', title: 'R&D Loyihalar', description: 'Yangi mahsulotlar bo\'yicha loyihalar', url: 'https://drive.google.com/drive/folders/14bijGJ3jAtEFXGtX3ZmNUXJkDWfC6gf4?usp=sharing' },
    { superCategory: 'rnd', icon: '📥', title: 'Takliflar', description: 'Kontragentlardan tovar bo\'yicha olingan takliflar', url: 'https://drive.google.com/drive/folders/1zX-EPoGc7mOJWUYG-ex-gmoWXUaErzjK?usp=sharing' },
    { superCategory: 'rnd', icon: '📋', title: 'Solishtirma listlar', description: 'Tovar yuzasidan kontragentlardan jamlangan solishtirmalar', url: 'https://drive.google.com/drive/folders/1YkGAtn3QQiO2GdPrWOj1jedjUBVUZ0-C?usp=drive_link' },
    { superCategory: 'rnd', icon: '⚠️', title: 'Muammolar', description: 'Yechimini kutayotgan texnik muammolar', url: 'https://drive.google.com/drive/folders/1FKxbUvzyvx1O4JOM8QfANyrgNBXV28xX?usp=drive_link' },
    { superCategory: 'rnd', icon: '🧪', title: 'Sinov va Tahlillar', description: 'Sinovdan o\'tgan mahsulotlar hisoboti', url: 'https://drive.google.com/drive/folders/1uT5xc4o99c9Q5zqWpu_B74sQ9tYcwyMn?usp=drive_link' },

    // Disk
    { superCategory: 'disk', icon: '📂', title: 'Kontragentlar', description: 'Shartnomalar va boshqa xujjatlar', url: 'https://drive.google.com/drive/folders/1mfrfPGbFQC0TiOavJhSb8E7-5Bkv8e_g?usp=drive_link' },
    { superCategory: 'disk', icon: '📐', title: 'Chizmalar bazasi', description: 'Barcha detallar uchun chizmalar (DWG, DXF)', url: 'https://drive.google.com/drive/folders/1aFXSUBrkTO3c4emo876oSEkXZg3J_kjX?usp=drive_link' },
    
    // Bojxona
    { superCategory: 'customs', icon: '🧾', title: 'Import&Export hisobotlari', description: 'Import va Export reestri', url: 'https://drive.google.com/drive/folders/1i0tP5iLvu4dKCV5DaQN70VERyVEoeJpK?usp=sharing' },
    { superCategory: 'customs', icon: '🗄️', title: 'MMK E-Baza', description: 'Muvofiqlik sertifikatlari va standartlar', url: 'https://e-trade.mmk.ru:8000/OA_HTML/AppsLocalLogin.jsp' },

    // Web
    { superCategory: 'web', icon: '🌐', title: 'MoySklad', description: 'Ombor uchun dastur', url: 'https://online.moysklad.ru/app/#homepage' },
];

class Dashboard {
    constructor() {
        this.cacheDOM();
        this.activeCategoryLink = null;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    cacheDOM() {
        this.themeToggleBtn = document.getElementById('themeToggle');
        this.categoryListEl = document.getElementById('categoryList');
        this.linksGridEl = document.getElementById('linksGrid');
        this.linkCardTemplate = document.getElementById('linkCardTemplate');
        this.contentTitleEl = document.getElementById('content-title');
        this.contentSubtitleEl = document.getElementById('content-subtitle');
        this.sidebarEl = document.getElementById('sidebar');
        this.mobileToggleBtn = document.getElementById('mobileToggle');
    }
    
    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
        
        // Birinchi kategoriyani ("Barchasi") faol qilish
        this.setActiveCategory(this.categoryListEl.querySelector('.nav-link'));
    }

    bindEvents() {
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        
        // Yon paneldagi kategoriya tugmalarini bosishni kuzatish (event delegation)
        this.categoryListEl.addEventListener('click', (e) => {
            e.preventDefault();
            const link = e.target.closest('.nav-link');
            if (link && link !== this.activeCategoryLink) {
                this.setActiveCategory(link);
            }
        });

        // Mobil menyu uchun eventlar (o'zgarishsiz)
        this.mobileToggleBtn.addEventListener('click', () => this.toggleSidebar());
        document.addEventListener('click', (e) => {
             if (!this.sidebarEl.contains(e.target) && !this.mobileToggleBtn.contains(e.target) && this.sidebarEl.classList.contains('open')) {
                this.toggleSidebar(false);
             }
        });
    }

    setActiveCategory(link) {
        if (this.activeCategoryLink) {
            this.activeCategoryLink.classList.remove('active');
        }
        link.classList.add('active');
        this.activeCategoryLink = link;

        const categoryKey = link.dataset.category;
        const categoryText = link.textContent.trim();
        
        this.renderCards(categoryKey, categoryText);
    }
    
    renderCards(category, title) {
        // Asosiy ekran sarlavhasini yangilash
        this.contentTitleEl.textContent = title;
        this.contentSubtitleEl.textContent = category === 'all' 
            ? "Barcha bo'limlardagi mavjud havolalar."
            : `Ushbu bo'limga tegishli havolalar ro'yxati.`;

        // Filtrlash
        const linksToRender = category === 'all'
            ? allLinksData
            : allLinksData.filter(link => link.superCategory === category);
        
        // O'ng paneldagi kartochkalarni tozalash va qayta chizish
        this.linksGridEl.innerHTML = '';
        const fragment = document.createDocumentFragment();

        if (linksToRender.length === 0) {
            this.linksGridEl.innerHTML = '<p>Bu bo\'limda hozircha havolalar mavjud emas.</p>';
            return;
        }

        linksToRender.forEach(linkData => {
            const cardClone = this.linkCardTemplate.content.cloneNode(true);
            const cardEl = cardClone.querySelector('.link-card');
            
            cardEl.href = linkData.url;
            cardEl.querySelector('.link-icon').textContent = linkData.icon;
            cardEl.querySelector('.link-title').textContent = linkData.title;
            cardEl.querySelector('.link-description').textContent = linkData.description;
            
            fragment.appendChild(cardClone);
        });
        
        this.linksGridEl.appendChild(fragment);
    }

    // Yordamchi funksiyalar (o'zgarishsiz)
    setTheme(theme) { this.themeToggleBtn.textContent = theme === 'dark' ? '☀️ Yorqin rejim' : '🌙 Tungi rejim'; document.body.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); this.currentTheme = theme; }
    toggleTheme() { this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark'); }
    toggleSidebar(forceState) { const isOpen = this.sidebarEl.classList.toggle('open', forceState); this.mobileToggleBtn.setAttribute('aria-expanded', isOpen); }
}

document.addEventListener('DOMContentLoaded', () => { new Dashboard(); });