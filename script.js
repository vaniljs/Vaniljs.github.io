// Left-menu

var content = document.getElementsByClassName('content')[0],
    leftMenuLink = document.getElementsByClassName('left-menu')[0].querySelectorAll('a'),
    xhrURL;

leftMenuLink.forEach((e) => {
    e.addEventListener('click', () => {
        leftMenuLink.forEach((li) => li.parentNode.classList.contains('active') ? li.parentNode.classList.remove('active') : false);
        e.parentNode.classList.add('active');
        xhrURL = e.innerHTML + '.html';
        getContent();
    })
});

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

