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
const text1 = "Fazendo do seu\npresente o seu\nfuturo.";
const text2 = "A empresa que informatiza\no seu negócio.";

// Roda com o cursor animado
typeWriter("typewriter1", text1, 50, () => {
    typeWriter("typewriter2", text2, 50);
});

/* mudar modo claro e escuro */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.getElementById('logo');

const darkLogoSrc = './vetores/logo_escuro.png';
const lightLogoSrc = './vetores/logo_claro.png';

function setTheme(isLight) {
  if (isLight) {
    body.classList.add('light-mode');
    logo.src = lightLogoSrc;
  } else {
    body.classList.remove('light-mode');
    logo.src = darkLogoSrc;
  }
}

themeToggle.addEventListener('change', function () {
  setTheme(this.checked);
  localStorage.setItem('theme', this.checked ? 'light' : 'dark');
});
/* mudar modo claro e escuro */
