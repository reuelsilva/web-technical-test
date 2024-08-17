const promoList = document.getElementById("promo-list");

let promos = [];

window.onload = async () => {
    const response = await fetch("http://localhost:3000/promos");
    const data = await response.json() 
    promos = data.sort((a, b) => a.sequence - b.sequence);
    
    renderPromos("ALL_PROMOTIONS");
}

window.addEventListener("click", (event) => {
    const eventElement = event.target;
    const parentElement = eventElement.closest("#nav-list");
    if(parentElement){        
        const childrenElements = parentElement.querySelectorAll("li");
        childrenElements.forEach(children => {
            if(children.classList.contains("selected")){
                children.classList.remove("selected");
            }
        });
        eventElement.classList.add("selected");
    }
})

const mountPromoElement = (promo) => {
    const promoElement = document.createElement("div");
    promoElement.classList.add("promo-item");

    const imgElement = document.createElement("img");
    imgElement.src = promo.heroImageUrl;

    const promoContent = document.createElement("div");
    promoContent.classList.add("promo-content")

    const titleElement = document.createElement("h2");
    titleElement.innerText = promo.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = promo.description;

    const promoOptionsUl = document.createElement("ul");
    promoOptionsUl.classList.add("promo-options");

    const termsOptionLi = document.createElement("li");
    termsOptionLi.classList.add("terms-option");
            
    const joinOptionLi = document.createElement("li");
    joinOptionLi.classList.add("join-option");

    const termsAnchor = document.createElement("a");
    termsAnchor.href = "#";
    termsAnchor.innerText = promo.termsAndConditionsButtonText;

    termsOptionLi.appendChild(termsAnchor);

    const joinAnchor = document.createElement("a");
    joinAnchor.href = "#";
    joinAnchor.innerText = promo.joinNowButtonText;

    joinOptionLi.appendChild(joinAnchor);

    promoOptionsUl.appendChild(termsOptionLi);
    promoOptionsUl.appendChild(joinOptionLi);

    promoContent.appendChild(titleElement);
    promoContent.appendChild(descriptionElement);
    promoContent.appendChild(promoOptionsUl);

    promoElement.appendChild(imgElement);
    promoElement.appendChild(promoContent);

    updatePromoList(promoElement);
}

const updatePromoList = (element) => {
    promoList.appendChild(element);
}

const renderPromos = (type) => {
    while (promoList.firstChild){
        promoList.removeChild(promoList.firstChild)
    }

    if(type === "ALL_PROMOTIONS"){
        promos.forEach(promo => {
            mountPromoElement(promo); 
        });
    }

    if(type === "NEW_CUSTOMERS"){
        promos.forEach(promo => {
           if(promo.onlyNewCustomers){
            mountPromoElement(promo);
           }
        });
    }
}