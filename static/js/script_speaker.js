
cardsData =[
    ["Mr. Ashneer Grover","Co-Founder, Bharatpe","/images/logo.png"],
    ["Mr. Narayan Murthy","Founder, Infosys","/images/logo.png"],
    ["Mr. Krishnan V","Co-Founder, Justdial","/images/logo.png"],
    ["Mr. Ankush Singla","Co-Founder, Coding Ninja","/images/logo.png"],
    ["Mr. Charlie Cheever","Co-Founder, Quora","/images/logo.png"],
    ["Mr. Jimmy Wales","Founder, Wikipedia","/images/logo.png"],
    ["Mr. Pulkit Jain","Co-Founder, Vedantu","/images/logo.png"],
    ["Mr. Kevin Harrington","Original Shark, Shark Tank","/images/logo.png"],
    ["Mr. Michael Siebal","CEO, Y Combinator","/images/logo.png"],
    ["Mr. Rohit Kapoor","CEO, Food Marketplace Swiggy","/images/logo.png"],
    ["Mr. Ankit Nagori","Founder, Curefit","/images/logo.png"],
    ["Mr. Amod Malviya","Co-Founder, Udaan","/images/logo.png"],
]
function addCard([name,company,url]){
    main = document.querySelector('.speaker-main');
    main.innerHTML += `<div class="speaker-card" >
            <div class="card-details">
                <div class="card-name">${name}</div><div class="card-company">${company}</div>
            </div>
        </div>`;
   
}
cardsData.forEach(addCard);

