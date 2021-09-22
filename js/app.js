let formMenuToggle = false;

const dropDownMenu = (clickedElement) => {
    console.log("clicked Element");
    if (clickedElement === "place-and-contact-form" && formMenuToggle === false) {
        console.log("place-and-contact-form");
        document.getElementById("place-and-contact-form").style.display = "block";
        formMenuToggle = true;
    } else if (clickedElement === "place-and-contact-form" && formMenuToggle === true) {
        document.getElementById("place-and-contact-form").style.display = "none";
        formMenuToggle = false;
    }
}
