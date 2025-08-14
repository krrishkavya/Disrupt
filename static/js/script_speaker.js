// const cardsData = [
//   ["Ashneer Grover", "Co-Founder, Bharatpe","images/logo/1.png"],
//   ["Nr Narayan Murthy", "Founder, Infosys"],
//   ["Krishnan V", "Co-Founder, Justdial"],
//   ["Ankush Singla", "Co-Founder, Coding Ninja"],
//   ["Charlie Cheever", "Co-Founder, Quora"],
//   ["Jimmy Wales", "Founder, Wikipedia"],
//   ["Pulkit Jain", "Co-Founder, Vedantu"],
//   ["Kevin Harrington", "Original Shark, Shark Tank"],
//   ["Michael Siebal", "CEO, Y Combinator"],
//   ["Rohit Kapoor", "CEO, Food Marketplace Swiggy"],
//   ["Ankit Nagori", "Founder, Curefit"],
//   ["Amod Malviya", "Co-Founder, Udaan"]
// ];

// function addCard([name,company,url]){
//     main = document.querySelector('.speaker-main');
//     main.innerHTML += `<div class="speaker-card" >
//             <div class="card-details">
//                 <div class="card-name">${name}</div><div class="card-company">${company}</div>
//             </div>
//         </div>`;    
// }
// function addLogo([name,company,url]){
//   const cards = document.querySelectorAll('.speaker-card');
//   cards.forEach(card => {
//     card.style.cssText = "background: url('images/logo/1.png') #FEFBF1 100% / cover no-repeat; background-position: 90px -5px; backgroundSize : 90%";
//     if (window.matchMedia("(max-width: 426px)").matches) {
//       // card.style.backgroundPosition = "-155px 0px";
//       // card.style.backgroundSize = "250%";
//       card.style.backgroundColor = "#0C1A38";
//     }
//   });

// }
// cardsData.forEach(addCard);
// cardsData.forEach(addLogo);