function q(selector) {
    return document.querySelector(selector);
}
function qq(selectors) {
    return document.querySelectorAll(selectors);
}

// Slider

var vanilSlider = qq('.vanil-slider'),
vanilNavs = {
    prev: 'Prev',
    next: 'Next'
};

vanilSlider.forEach((slider) => {
    let slides = slider.querySelectorAll('.slide');
    slides.forEach((slide) => {
        let createPrevSlide = document.createElement('span'),
            createNextSlide = document.createElement('span');
        createPrevSlide.classList.add('prev');
        createPrevSlide.innerHTML = vanilNavs.prev;
        createNextSlide.classList.add('next');
        createNextSlide.innerHTML = vanilNavs.next;
        slide.appendChild(createPrevSlide);
        slide.appendChild(createNextSlide);

        createPrevSlide.addEventListener('click', () => {
            if (slide.previousElementSibling) {
                createPrevSlide.classList.remove('disable');
                slide.classList.remove('active');
                slide.previousElementSibling.classList.add('active')
            } else {
                createPrevSlide.classList.add('disable')
            }
        });
        createNextSlide.addEventListener('click', () => {
            if (slide.nextElementSibling) {
                createNextSlide.classList.remove('disable');
            slide.classList.remove('active');
            slide.nextElementSibling.classList.add('active')
            } else {
                createNextSlide.classList.add('disable')
            }
        });
    })
});

// slider

// Left-menu

var content = document.getElementsByClassName('content')[0],
    leftMenuLink = document.getElementsByClassName('left-menu')[0].querySelectorAll('a'),
    xhrURL;

// activate meni li and add class active
// leftMenuLink.forEach((e) => {
//     e.addEventListener('click', () => {
//         leftMenuLink.forEach((li) => li.parentNode.classList.contains('active') ? li.parentNode.classList.remove('active') : false);
//         e.parentNode.classList.add('active');
//         xhrURL = e.innerHTML + '.html';
//         getContent();
//     })
// });


// xhr page content
function getContent() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', xhrURL, false);
    xhr.send();
    if (xhr.status !== 200) {
        console.log('Ошибка загрузки');
    } else {
        content.innerHTML = xhr.responseText;
        evalScripts(content);
    }
}


// reinitial xhr <script>
function evalScripts(el) {
    var $scripts = el.querySelectorAll('script');
    for (var i = 0; i < $scripts.length; i++) {
        var $script = $scripts[i];
        var s = document.createElement('script');
        s.type = 'text/javascript';
        if ($script.src) {
            s.src = $script.src;
        } else {
            s.textContent = $script.innerText;
        }
        el.appendChild(s);
    }
}

// left-menu

