class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
    this.navLinks.forEach((link, index) => {
         link.style.animation 
          ?  (link.style.animation = "")
          :  (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);       
    });
}


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

        init() {
            if (this.mobileMenu){
                this.addClickEvent();
            }
            return this
        }
    
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

/* Animação */

function typeWriter(elementId, text, speed, callback) {
    const el = document.getElementById(elementId);
    el.innerHTML = ""; // limpa antes de escrever
    let i = 0;

    // Cria o cursor e adiciona ao elemento
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    el.appendChild(cursor);

    function typing() {
        if (i < text.length) {
            const char = text.charAt(i);

            if (char === '\n') {
                el.insertBefore(document.createElement("br"), cursor);
            } else {
                const span = document.createElement("span");
                span.textContent = char;
                el.insertBefore(span, cursor);
            }

            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            // Remover cursor do atual e passar pro próximo
            cursor.remove();
            callback();
        }
    }

    typing();
}

// Textos com quebra de linha usando \n
const text1 = "Inovação,\nTrabalho,\ne Conexão";
const text2 = "A empresa que informatiza\no seu negócio.";

// Roda com o cursor animado
typeWriter("typewriter1", text1, 50, () => {
    typeWriter("typewriter2", text2, 50);
});

// Seleção de elementos
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.getElementById('logo');

const icons = [
  document.getElementById('icon1'),
  document.getElementById('icon2'),
  document.getElementById('icon3')
];

// Caminhos das imagens
const darkLogoSrc = './vetores/logo_escuro.png';
const lightLogoSrc = './vetores/logo_escuro.png';

const iconEscuro1 = './vetores/icon1_escuro.png';
const iconEscuro2 = './vetores/icon2_escuro.png';
const iconEscuro3 = './vetores/icon3_escuro.png';

const iconClaro1 = './vetores/icon1_claro.png';
const iconClaro2 = './vetores/icon2_claro.png';
const iconClaro3 = './vetores/icon3_claro.png';

// Função única para trocar tema
function setTheme(isLight) {
  if (isLight) {
    body.classList.add('light-mode');
    logo.src = lightLogoSrc;
    icons[0].src = iconClaro1;
    icons[1].src = iconClaro2;
    icons[2].src = iconClaro3;
  } else {
    body.classList.remove('light-mode');
    logo.src = darkLogoSrc;
    icons[0].src = iconEscuro1;
    icons[1].src = iconEscuro2;
    icons[2].src = iconEscuro3;
  }
}

// Evento do toggle
themeToggle.addEventListener('change', function () {
  setTheme(this.checked);
  localStorage.setItem('theme', this.checked ? 'light' : 'dark');
});

// Opcional: mantém o tema salvo ao recarregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  const isLight = savedTheme === 'light';
  themeToggle.checked = isLight;
  setTheme(isLight);
}


