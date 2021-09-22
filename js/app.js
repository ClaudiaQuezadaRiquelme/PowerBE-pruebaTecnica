let formMenuToggle = false;
let countryMenuToggle = false;
let tabContentHeight = document.getElementById("tab-content").offsetHeight;

const dropDownMenu = (clickedElement) => {
    
    let formHeight;

    if (clickedElement === "place-and-contact-form" && formMenuToggle === false) {
        setTimeout(() => { // se suma a tab-content el tamaño de place-and-contact-form
            formHeight = document.getElementById("place-and-contact-form").offsetHeight;
            document.getElementById("tab-content").style.height = (tabContentHeight + formHeight) + 'px';
        }, 10);
        document.getElementById("place-and-contact-form").style.display = "block";
        formMenuToggle = true;
    } else if (clickedElement === "place-and-contact-form" && formMenuToggle === true) {
         // vuelve tab-content a su tamaño inicial
        formHeight = document.getElementById("place-and-contact-form").offsetHeight;
        document.getElementById("tab-content").style.height = tabContentHeight + 'px';
        setTimeout(() => {
            document.getElementById("place-and-contact-form").style.display = "none";
        }, 10);
        formMenuToggle = false;
    } else if (clickedElement === "country-menu-ul" && countryMenuToggle === false) {
        document.getElementById("country-menu-ul").style.display = "block";
        countryMenuToggle = true;
    } else if (clickedElement === "country-menu-ul" && countryMenuToggle === true) {
        document.getElementById("country-menu-ul").style.display = "none";
        countryMenuToggle = false;
    }
}
