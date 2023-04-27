var championsData = [{"name":"Aatrox","gender":"Male","positions":"Top","species":"Darkin","resource":"Manaless","range":"Melee","regions":"Runeterra, Shurima","release":2012},
{"name":"Ahri","gender":"Female","positions":"Middle","species":"Vesani","resource":"Mana","range":"Ranged","regions":"Ionia","release":2011},
{"name":"Akali","gender":"Female","positions":"Middle,Top","species":"Human","resource":"Energy","range":"Melee","regions":"Ionia","release":2010}, 
{"name":"Akshan","gender":"Male","positions":"Middle, Top","species":"Human","resource":"Mana","range":"Ranged","regions":"Shurima","release":2021}, 
{"name":"Alistar","gender":"Male","positions":"Support","species":"Minitaur","resource":"Mana","range":"Melee","regions":"Runeterra","release":2009}, 
{"name":"Amumu","gender":"Male","positions":"Jungle, Support","species":"Undead, Yordle","resource":"Mana","range":"Melee","regions":"Shurima","release":2009}, 
{"name":"Anivia","gender":"Female","positions":"Middle","species":"God, Spirit","resource":"Mana","range":"Ranged","regions":"Freljord","release":2009}, 
{"name":"Annie","gender":"Female","positions":"Middle","species":"Human, Magicborn","resource":"Mana","range":"Ranged","regions":"Noxus, Runeterra","release":2009}, 
{"name":"Aphelios","gender":"Male","positions":"Bottom","species":"Human, Spiritualist","resource":"Mana","range":"Ranged","regions":"Targon","release":2019},
{"name":"Ashe","gender":"Female","positions":"Bottom, Support","species":"Human, Iceborn","resource":"Mana","range":"Ranged","regions":"Freljord","release":2009},
{"name":"Aurelion Sol","gender":"Male","positions":"Middle","species":"Celestial, Dragon","resource":"Mana","range":"Ranged","regions":"Runeterra, Targon","release":2016},
{"name":"Azir","gender":"Male","positions":"Middle","species":"God-warrior","resource":"Mana","range":"Ranged","regions":"Shurima","release":2014},
{"name":"Bard","gender":"Male","positions":"Support","species":"Celestial","resource":"Mana","range":"Ranged","regions":"Runeterra","release":2015},
{"name":"Bel'veth","gender":"Female","positions":"Jungle","species":"Void being","resource":"Manaless","range":"Melee","regions":"Void","release":2022},
{"name":"Blitzcrank","gender":"Unknown","positions":"Support","species":"Golem","resource":"Mana","range":"Melee","regions":"Zaun","release":2009},
{"name":"Brand","gender":"Male","positions":"Support","species":"Human, Magically altered","resource":"Mana","range":"Ranged","regions":"Freljord, Runeterra","release":2011},
{"name":"Braum","gender":"Male","positions":"Support","species":"Human, Iceborn","resource":"Mana","range":"Melee","regions":"Freljord","release":2014},
{"name":"Caitlyn","gender":"Female","positions":"Bottom","species":"Human","resource":"Mana","range":"Ranged","regions":"Piltover","release":2011},
{"name":"Camille","gender":"Female","positions":"Top","species":"Cyborg, Human","resource":"Mana","range":"Melee","regions":"Piltover","release":2016},
{"name":"Cassiopeia","gender":"Female","positions":"Middle","species":"Human, Magically altered","resource":"Mana","range":"Ranged","regions":"Shurima, Noxus","release":2010},
{"name":"Cho'gath","gender":"Male","positions":"Top","species":"Void being","resource":"Mana","range":"Melee","regions":"Void","release":2009},
{"name":"Corki","gender":"Male","positions":"Middle","species":"Yordle","resource":"Mana","range":"Ranged","regions":"Bandle city, Piltover","release":2009},
{"name":"Darius","gender":"Male","positions":"Top","species":"Human","resource":"Mana","range":"Melee","regions":"Noxus","release":2012},
{"name":"Diana","gender":"Female","positions":"Middle, Jungle","species":"Aspect, Human","resource":"Mana","range":"Melee","regions":"Targon","release":2012},
{"name":"Dr. Mundo","gender":"Male","positions":"Top","species":"Chemically altered,Human","resource":"Health","range":"Melee","regions":"Zaun","release":2009},
{"name":"Draven","gender":"Male","positions":"Bottom","species":"Human","resource":"Mana","range":"Ranged","regions":"Noxus","release":2012}, 
{"name":"Ekko","gender":"Male","positions":"Middle","species":"Human","resource":"Mana","range":"Melee","regions": "Zaun","release":2015},
{"name":"Elise","gender":"Female","positions":"Jungle","species":"Human, Magically altered","resource":"Mana","range": "Ranged, Melee","regions":"Noxus, Shadow isles","release":2012},
{"name":"Evelynn","gender":"Female","positions":"Jungle","species":"Demon, Spirit","resource":"Mana","range":"Melee","regions":"Runeterra","release":2009},
{"name":"Ezreal","gender":"Male","positions":"Bottom","species":"Human, Magicborn","resource":"Mana","range":"Ranged","regions":"Piltover","release":2012},
{"name":"Fiddlesticks","gender":"Unknown","positions":"Jungle","species":"Demon, Spirit","resource":"Mana","range":"Ranged","regions":"Runeterra","release":2009},
{"name":"Fiora","gender":"Female","positions":"Top","species":"Human","resource":"Mana","range":"Melee","regions":"Demacia","release":2012},
{"name":"Fizz","gender":"Male","positions":"Middle","species":"Yordle","resource":"Mana","range":"Melee","regions":"Bilgewater","release":2011},
{"name":"Galio","gender":"Male","positions":"Middle, Support","species":"Golem","resource":"Mana","range":"Melee","regions":"Demacia","release":2010},
{"name":"Gangplank","gender":"Male","positions":"Top","species":"Human","resource":"Mana","range":"Melee","regions":"Bilgewater","release":2009},
{"name":"Garen","gender":"Male","positions":"Top","species":"Human","resource":"Manaless","range":"Melee","regions":"Demacia","release":2010},
{"name":"Gnar","gender":"Male","positions":"Top","species":"Yordle","resource":"Rage","range":"Ranged, Melee","regions":"Freljord","release":2014},
{"name":"Gragas","gender":"Male","positions":"Jungle,Top","species":"Human","resource":"Mana","range":"Melee","regions":"Freljord","release":2010},
{"name":"Graves","gender":"Male","positions":"Jungle","species":"Human","resource":"Mana","range":"Ranged","regions":"Bilgewater","release":2011},
{"name":"Gwen","gender":"Female","positions":"Top","species":"Human, Magically altered","resource":"Mana","range":"Melee","regions":"Carmavor, Shadow isles","release":2011},
]

var allguesses = document.getElementById("all-guesses");
var champtofind;
var randomchamp = championsData[Math.floor(Math.random()*championsData.length)];
let correctcolor = "radial-gradient(var(--correct), var(--correct-dark))";
let incorrectcolor = "radial-gradient(var(--incorrect), var(--incorrect-dark))";
let partiallycolor = "radial-gradient(var(--partially), var(--partially-dark))";
let prevguess = document.getElementById("prev-guess");
var namesGuessed = [];


document.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        tryInput();
    }
});
function startGame(){
    input = "";
    champtofind = championsData[Math.floor(Math.random()*championsData.length)];
}

/**
 * Checks if the input champion is in the current database
 * @param {champion} input 
 * @returns {bool} 
 */
function checkData(input){
    return(championsData.includes(input));
}

/**
 * Compares the champion to guess and the champion in input : returns true if the characteristics match and false if not
 * @param {champion} tofind 
 * @param {champion} guess 
 * @param {string} charac
 * @returns {int} 1 if all corresponds, 0 if nothing, 2 if partially
 */
function checkCharac(tofind,guess,charac){    
    if(tofind[charac] == guess[charac])
        return 1;
    else{
        if((String(tofind[charac]).includes(String(guess[charac])) && String(tofind[charac]).includes(",")) || (String(guess[charac]).includes(String(tofind[charac])) && String(guess[charac]).includes(","))){
            return 2;
        }
        else
            return 0;
    }
}

/**
 * Displays the characteristics of the input champion by adding a new guess on the page
 * @param {string} champname 
 * @param {champion} tofind 
 */
function addGuess(champname, tofind){
    let champion = findChampWithName(champname);

    let guess = document.createElement("ul");
    guess.className = "guess";
    let icon = document.createElement("img");
    
    icon.src = "src/champions/icons/"+ champname.toUpperCase()[0]+ champname.substring(1,champname.length).toLowerCase() + "Square.webp";
    let li =document.createElement("li");
    li.style.animation = "flip 1s forwards";
    li.append(icon);
    guess.append(li);

    let name = document.createElement("p");
    let gender = document.createElement("p");
    let positions = document.createElement("p");
    let species = document.createElement("p");
    let resource = document.createElement("p");
    let range = document.createElement("p");
    let regions = document.createElement("p");
    let release = document.createElement("p");


    name.textContent = champname;
    gender.textContent = champion.gender;
    positions.textContent = champion.positions;
    species.textContent = champion.species;
    resource.textContent = champion.resource;
    range.textContent = champion.range;
    regions.textContent = champion.regions;
    release.textContent = champion.release;

    let all = [gender,positions,species,resource,range,regions,release];
    let characs = ["gender","positions","species","resource","range","regions","release"];
    for(let i = 0; i<all.length;i++){
        li = document.createElement("li");
        li.style.animation = "flip 1s forwards";
        
        li.style.animationDelay = 0.5+i/2 + "s";
        switch(checkCharac(tofind,champion,characs[i])){
            case 1:     //all corresponds
                li.style.background = correctcolor; break;
            case 0:     //nothing corresponds
                li.style.background = incorrectcolor; break;
            default:    //partially correponds
                li.style.background = partiallycolor; break;
        }

        li.append(all[i]);
        guess.append(li);
    }
    allguesses.insertBefore(guess,prevguess);
    prevguess = guess;
}

/**
 * Returns the current champion as object that corresponds to the input name
 * @param {string} champname 
 * @returns {champion}
 */
function findChampWithName(champname){
    let champion;

    for(let i=0;i<championsData.length;i++){
        if(champname.toLowerCase() == championsData[i].name.toLowerCase()){
            return championsData[i];
        }
    }
    console.log("ALERT : Could not find any champion by the name '"+champname+"'");
    return null;
}


function tryInput(){
    let input = document.getElementById("name").value;
    let inputchamp = findChampWithName(input);
    if(championsData.includes(inputchamp) && !namesGuessed.includes(input)){
        addGuess(input,champtofind);
        namesGuessed.push(input);
    }
    if(input.toLowerCase() == champtofind.name.toLowerCase()){
        document.getElementById("input-button").style.display = "none";
        document.getElementById("play-again").style.display = "flex";
    }

    input = '';
}



startGame();