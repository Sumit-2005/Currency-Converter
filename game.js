const base_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown = document.querySelectorAll(".dropdowns select");
const btn = document.querySelector("button");

for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target) 
    })
}

const updateFlag = (element) => {
    let img = element.parentElement.querySelector("img");
    let code = element.value;
    let countryCode = countryList[code];
    let fleg = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src = fleg;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
})

