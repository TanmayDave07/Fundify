const btn = document.getElementById("dark-mode-toggle");

if (btn) {
btn.addEventListener("click", () => {

const dark = document.body.classList.toggle("dark-mode-on");

if (dark) {
    // POORE PAGE K LIE
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    // NAVBAR K LIE
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.style.backgroundColor = "black";

    // NAV LINKS K LIE
    document.querySelectorAll(".nav-links a").forEach(link => {
    link.style.color = "white";
    });

    // HEADINGS AND PARAGRAPHS (ALL PAGES K LIE)
    document.querySelectorAll("h1, h2, h3, h4, p").forEach(t => {
    t.style.color = "white";
    });

    // SABB LISTS (ABOUT PAGE, WHY CHOOSE)
    document.querySelectorAll("li").forEach(li => {
    li.style.color = "white";
    });

    // SECTIONS KE WHITE BACKGROUND KO BLACK KARNE K LIE
    const sectionsToDarken = [
    ".features",
    ".testimonials",
    ".why-choose",
    ".services-section",
    ".contact-section",
    ".about",
    ".sip-section"   
    ];

    sectionsToDarken.forEach(sec => {
    const element = document.querySelector(sec);
    if (element) element.style.backgroundColor = "black";
    });

    // CARDS K LIE (features, services, testimonials, contact form, sip-box)
    const cardSelectors = [
    ".card",
    ".service-card",
    ".testimonial",
    ".contact-form",
    ".sip-box"      // ← SIP BOX ADDED
    ];

    cardSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(card => {
        card.style.backgroundColor = "#111";
        card.style.color = "white";
    });
    });

    // SIP INPUTS KO BHI DARK KARO
    document.querySelectorAll(".sip-box input").forEach(inp => {
    inp.style.backgroundColor = "#000";
    inp.style.color = "white";
    inp.style.borderColor = "#555";
    });

    const sipResult = document.getElementById("sip-result");
    if (sipResult) sipResult.style.color = "white";

    // FOOTER PART K LIE
    const footer = document.querySelector("footer");
    if (footer) {
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
    }

} else {
    // RESET EVERYTHING BACK TO NORMAL CSS K LIE
    document.querySelectorAll("*").forEach(el => el.style = "");
}
});
}

// SIP CALC JS
function calculateSIP() {
let monthly = document.getElementById("sip-monthly").value;
let rate = document.getElementById("sip-rate").value;
let years = document.getElementById("sip-years").value;

if (monthly === "" || rate === "" || years === "") {
document.getElementById("sip-result").innerHTML = "Please fill all fields.";
return;
}

let monthlyRate = (rate / 100) / 12;
let months = years * 12;

// SIP formula
let amount = monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

document.getElementById("sip-result").innerHTML =
"Total Value: ₹" + amount.toFixed(2);
}
