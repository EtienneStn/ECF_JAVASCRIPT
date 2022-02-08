document.addEventListener('DOMContentLoaded', function() {
    console.log('Chargement terminé !');
    // Question 1 :

    let bgColor = document.querySelector('body');
    bgColor.style.backgroundColor = '#EEF0DB';
    
    // Question 2 :
    let listeOne = document.querySelector('#list-one');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode("Lorem"));
    listeOne.append(li);

    // Question 3 :
    let btnOne = document.querySelector('.btn-1');
    btnOne.addEventListener('click', function() {
    listeOne.removeChild(listeOne.lastChild);
    });

    // Question 4 :
    let btnTwo = document.querySelector('.btn-2');
    let listeTwo = document.querySelector('#list-two');
    btnTwo.addEventListener('click', function() {
    listeTwo.classList.toggle('d-none');
    });

    // Question 5 :
    let btnThree = document.querySelector('.btn-3');
    btnThree.addEventListener('click', function() {
    btnOne.classList.add('mt-5');
    });

    // Question 6 :
    let btnFour = document.querySelector('.btn-4');
    btnFour.addEventListener('click', function() {
    btnFour.classList.replace('btn-primary', 'btn-danger');
    });

    // Question 7 :
    let btnFive = document.querySelector('.btn-5');
    btnFive.addEventListener('click', function() {
    window.alert('Boîte de type alert !')
    });

    // Question 8 :
    let btnSix = document.querySelector('.btn-6');
    btnSix.addEventListener('mouseover', function() {
        btnOne.classList.add('d-none');  
        btnTwo.classList.add('d-none');  
        btnThree.classList.add('d-none');  
        btnFour.classList.add('d-none');  
        btnFive.classList.add('d-none');  
        btnSix.classList.add('d-none');  
    });

    // Question 9 :
    let btnSeven = document.querySelector('.btn-7');
    btnSeven.addEventListener('dblclick', function() {
        bgColor.style.backgroundColor = '#f4f4f4';
    });

    // Question 10 :
    let btnEight = document.querySelector('.btn-8');
    btnEight.addEventListener('click', function() {
        h1 = document.querySelector('h1')
        h1.classList.toggle('d-none')
    });

    // GEOLOC
    let btnGeoloc = document.querySelector('.btnGeoloc')
    btnGeoloc.addEventListener("click", function() {
        getLocation()
    });
    let myPosition = null;

    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            myPosition = position.coords;
            console.log(myPosition);
            let myMap = L.map('map').setView([myPosition.latitude, myPosition.longitude], 14);
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    attribution: 'données © <a href="//osm.orgcopyright">OpenStreetMap</a>/ODbL - rendu <a href="/openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(myMap);
                L.marker([myPosition.latitude, myPosition.longitude]).addTo(myMap).bindPopup('Vous êtes ici !').openPopup();
        }, (error) => {
            if (error.code == error.PERMISSION_DENIED) {
                alert('Votre geolocalisation est désactivé !');
            } else {
                alert('Localisation introuvable veuillez réessayer plus tard !');
            }
        }, {
            timeout: 5000
        });
    }
    
    // RANDOM BG COLOR
    const colorBtn = document.querySelector('.btnColor');
    const pColor = document.querySelector('.pColor');
    colorBtn.addEventListener('click', function (){
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    console.log(color)
    pColor.innerText = color;
    bgColor.style.backgroundColor = color;
    });

});
