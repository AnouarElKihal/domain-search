// DOMAIN SEARCH API ==> https://rapidapi.com/MASNathan/api/domain-checker7/
// URL EXAMPLE ==> 'https://domain-checker7.p.rapidapi.com/whois?domain=rapidapi.com'

const inputText = document.getElementById("inputText")
const validateBtn = document.getElementById("validateBtn")
const availableDomain = document.querySelector(".availableDomain")
const availableDomainParagraph = document.getElementById("availableDomainParagraph")

const availableSpan = document.createElement("availableSpan")
availableSpan.textContent = ""
availableDomainParagraph.appendChild(availableSpan)
availableSpan.id = "availableDomainSpan"

const domainSpan = document.createElement("domainSpan")
domainSpan.textContent = ""
availableDomainParagraph.appendChild(domainSpan)
domainSpan.id = "domainNameSpan"

const fetchData = (userInput) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_DOMAIN_CHECKER_API_KEY',
            'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com'
        }
    }
    try {
        fetch(`https://domain-checker7.p.rapidapi.com/whois?domain=${userInput}`, options)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            document.getElementById("domain").innerText = json.domain

            if (json.available == false) {
                document.getElementById("status").innerText = "Registred"
                availableDomainParagraph.innerHTML = `<p>The domain <span id="domainNameSpan">${userInput}</span> is <span id="availableDomainSpan">not available</span></p>`
                document.getElementById("availableDomainSpan").style.color = "red"
                document.getElementById("domainNameSpan").style.fontWeight = "bold"
            }
            else {
                document.getElementById("status").innerText = "Not Registred"
                availableDomainParagraph.innerHTML = `<p>The domain <span id="domainNameSpan">${userInput}</span> is <span id="availableDomainSpan">available</span></p>`
                document.getElementById("availableDomainSpan").style.color = "green"
                document.getElementById("domainNameSpan").style.fontWeight = "bold"
            }

            if (json.registrar == "") document.getElementById("registrant").innerText = "Null"
            else document.getElementById("registrant").innerText = json.registrar

            if (json.created_at == "") document.getElementById("created").innerText = "Null"
            else document.getElementById("created").innerText = json.created_at
            
            if (json.expires_at == "") document.getElementById("expires").innerText = "Null"
            else document.getElementById("expires").innerText = json.expires_at

            if (json.updated_at == "") document.getElementById("updated").innerText = "Null"
            else document.getElementById("updated").innerText = json.updated_at

            if (json.whois == "") document.getElementById("whois").innerText = "Null"
            else document.getElementById("whois").innerText = json.whois
        })
    } catch (error) {
        alert("something went wrong!")
        console.error(error)
    }
}

validateBtn.onclick = () => {
    console.log(inputText.value)
    fetchData(inputText.value)
}


