console.log('loaded');
window.addEventListener('load', () => {
    var arrPhone = [
        "4951364569", // ?utm_phone=1364569
        "4951364570", // ?utm_phone=1364570
        "4951364571", // ?utm_phone=1364571
        "4951364572", // ?utm_phone=1364572
        "4951364573", // ?utm_phone=1364573
        "4951364574" // ?utm_phone=1364574
    ];

    var params = new URLSearchParams(location.search);
    var allLink = document.querySelectorAll("a");
    var phoneFromUtm = params.get("utm_phone");

    if (phoneFromUtm === 'clear') {
        localStorage.removeItem('phone');
        console.log('localStorage phone cleared');
    }

    allLink.forEach(function (link) {

        if (!phoneFromUtm &&
            localStorage.getItem('phone') &&
            link.getAttribute("href").indexOf("tel:") !== -1
        ) {
            link.setAttribute("href", "tel:+7495" + localStorage.getItem('phone'));
            link.innerText = formatPhone(localStorage.getItem('phone'));
        } else if (
            link.getAttribute("href").indexOf("tel:") !== -1 &&
            arrPhone.indexOf("495" + phoneFromUtm) !== -1
        ) {
            localStorage.setItem('phone', phoneFromUtm);
            link.setAttribute("href", "tel:+7495" + phoneFromUtm);
            link.innerText = formatPhone(phoneFromUtm);
        }
        if (link.getAttribute("href").indexOf("tel:") !== -1) {
            link.style.color = "rgb(0, 89, 169)";
        }
    });
});

function formatPhone(e) {
    var replacedPhone = e.split("");
    replacedPhone.splice(0, "", "+7 (495) ");
    replacedPhone.splice(4, "", "-");
    replacedPhone.splice(7, "", "-");
    return replacedPhone.join("");
}