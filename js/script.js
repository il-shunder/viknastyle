function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

let headerBottom = document.querySelector('.header__bottom');
let headerBurger = document.querySelector('.header__burger');
let headerNavItems = document.querySelectorAll('.header-nav__item');

if (headerBottom) {
    headerBurger.addEventListener('click', () => {
        if (headerBurger.classList.contains('active')) {
            document.body.classList.remove('body-lock');
            headerBurger.classList.remove('active');
            headerBottom.classList.remove('active');
        } else {
            document.body.classList.add('body-lock');
            headerBurger.classList.add('active');
            headerBottom.classList.add('active');
        }
    });
    headerNavItems.forEach((el) => {
        el.addEventListener('click', () => {
            document.body.classList.remove('body-lock');
            headerBurger.classList.remove('active');
            headerBottom.classList.remove('active');
        });
    });
}

const scrollLinks = document.querySelectorAll('a[href*="#"]');

if (scrollLinks.length > 0) {
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (e) {
            e.preventDefault();

            const scrollID = scrollLinks[i].getAttribute('href').substr(1);
            if (scrollID.length > 0) {
                const scrollTarget = document.getElementById(scrollID);

                const scrollTopOffset = 100;
                const scrollElementPosition = scrollTarget.getBoundingClientRect().top;
                const scrollOffsetPosition = scrollElementPosition - scrollTopOffset;

                if (scrollLinks[i].classList.contains('.header-top__link')) {
                    headerBurger.classList.remove('active');
                    document.body.classList.remove('body-lock');
                    headerNav.classList.remove('active');
                }

                window.scrollBy({
                    top: scrollOffsetPosition,
                    behavior: 'smooth',
                });
            }
        });
    }
}

if (document.querySelector('.order-swiper__container')) {
    new Swiper('.order-swiper__container', {
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.order-swiper__next',
            prevEl: '.order-swiper__prev',
        },
    });
}

let blogRating = document.querySelectorAll('.blog-right__raiting');

if (blogRating.length > 0) {
    blogRating.forEach((el) => {
        let labels = el.querySelectorAll('.blog-right__label');
        for (let i = 0; i < labels.length; i++) {
            labels[i].addEventListener('click', () => {
                labels[i].classList.add('active');

                for (let j = i - 1; j >= 0; j--) {
                    labels[j].classList.remove('active');
                }
            });
        }
    });
}

let aticleRating = document.querySelectorAll('.content__rating');

if (aticleRating.length > 0) {
    aticleRating.forEach((el) => {
        let labels = el.querySelectorAll('.blog-right__label');
        for (let i = 0; i < labels.length; i++) {
            labels[i].addEventListener('click', () => {
                labels[i].classList.add('active');

                for (let j = i - 1; j >= 0; j--) {
                    labels[j].classList.remove('active');
                }
            });
        }
    });
}
let pageUp = document.querySelector('.page-up');
if (pageUp) {
    document.addEventListener('scroll', () => {
        if (getScrollTop() > 150) {
            pageUp.classList.add('active');
        } else {
            pageUp.classList.remove('active');
        }
    });
}
function getScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

let worksItems = document.querySelectorAll('.works__item a');
if (worksItems.length > 0) {
    worksItems.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}

let customSelects = document.querySelectorAll('.custom-select');
if (customSelects.length > 0) {
    customSelects.forEach((el) => {
        let input = el.querySelector('.custom-select__input');
        let items = el.querySelectorAll('.custom-select__list li');
        let head = el.querySelector('.custom-select__head');

        items.forEach((item) => {
            let value = item.getAttribute('data-value');
            if (value == input.getAttribute('value')) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains('active')) {
                        items[i].classList.remove('active');
                    }
                }
                item.classList.add('active');
                head.textContent = item.textContent;
            }

            item.addEventListener('click', (e) => {
                input.setAttribute('value', e.target.getAttribute('data-value'));
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains('active')) {
                        items[i].classList.remove('active');
                    }
                }
                item.classList.add('active');
                head.textContent = item.textContent;
                el.classList.remove('active');
            });
        });

        head.addEventListener('click', (e) => {
            el.classList.toggle('active');
        });
    });
    document.body.addEventListener('click', (e) => {
        customSelects.forEach((el) => {
            if (el.classList.contains('active') && !e.target.closest('.custom-select')) {
                el.classList.remove('active');
            }
        });
    });
}

let contentBottomItem = document.querySelectorAll('.content-bottom__item');
if (contentBottomItem.length > 0) {
    contentBottomItem.forEach((el) => {
        el.addEventListener('click', () => {
            contentBottomItem.forEach((item) => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            el.classList.add('active');
        });
    });
}

// ///////////////////////////////////
const popupLinks = document.querySelectorAll('.popup-link');
const pageBody = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 600;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];

        popupLink.addEventListener('click', (e) => {
            const popupName = popupLink.getAttribute('data-href');
            const curentPopup = document.getElementById(popupName);
            if (popupName == 'popup-1') {
                let title = popupLink.getAttribute('data-title');
                let img = popupLink.getAttribute('data-img');

                if (curentPopup.querySelector('.popup-1__img').children.length > 0) {
                    for (let i = 0; i < curentPopup.querySelector('.popup-1__img').children.length; i++) {
                        curentPopup.querySelector('.popup-1__img').children[i].remove();
                    }
                }

                curentPopup.querySelector('.popup-1__img').insertAdjacentHTML('beforeend', `<img src="${img}" alt="">`);
                curentPopup.querySelector('.popup-1__title').textContent = title;
            }
            if (popupName == 'popup-2') {
                let title = popupLink.getAttribute('data-title');
                let img = popupLink.getAttribute('data-img');

                if (curentPopup.querySelector('.popup-2__img').children.length > 0) {
                    for (let i = 0; i < curentPopup.querySelector('.popup-2__img').children.length; i++) {
                        curentPopup.querySelector('.popup-2__img').children[i].remove();
                    }
                }

                curentPopup.querySelector('.popup-2__img').insertAdjacentHTML('beforeend', `<img src="${img}" alt="">`);
                curentPopup.querySelector('.popup-2__title').textContent = title;
            }
            if (popupName == 'popup-gallery') {
                const popupSrc = popupLink.querySelector('img').getAttribute('src');
                popupOpen(curentPopup, popupSrc);
            } else {
                popupOpen(curentPopup);
            }
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.popup__close');

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];

        el.addEventListener('click', (e) => {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup, popupSrc) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup._open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }

        curentPopup.classList.add('_open');
        if (popupSrc) {
            curentPopup.querySelector('.popup__block').insertAdjacentHTML('afterbegin', `<img src="${popupSrc}" alt="">`);
        }
        curentPopup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('_open');
        if (doUnlock) {
            bodyUnlock();
        }
        if (popupActive.getAttribute('id') == 'popup-gallery') {
            setTimeout(() => {
                for (let i = 0; i < popupActive.querySelector('.popup__block').children.length; i++) {
                    popupActive.querySelector('.popup__block').children[i].remove();
                }
            }, timeout);
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - pageBody.offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    pageBody.style.paddingRight = lockPaddingValue;
    pageBody.classList.add('body-lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }

        pageBody.style.paddingRight = '0px';
        pageBody.classList.remove('body-lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            let node = this;
            while (node) {
                if (node.matches(css)) {
                    return node;
                } else {
                    node = node.parentElement;
                }
            }
            return null;
        };
    }
})();

(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
