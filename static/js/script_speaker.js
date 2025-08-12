cardsData =[
    ["Mr. Narayan Murthy","Co-Founder, Infosys","/images/logo.png"],
    ["Mr. Narayan Murthy","Co-Founder, Infosys","/images/logo.png"],
    ["Mr. Narayan Murthy","Co-Founder, Infosys","/images/logo.png"],
    ["Mr. Narayan Murthy","Co-Founder, Infosys","/images/logo.png"],
    ["Mr. Narayan Murthy","Co-Founder, Infosys","/images/logo.png"],
    ["Mr. Narayan Murthy","Co-Founder, Infosys","/images/logo.png"],

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