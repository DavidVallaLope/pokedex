const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("images/no-found.gif","images/no-found.gif")
            pokeText("Not Found")
            document.getElementById("info").setAttribute("hidden",true)
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.dream_world.front_default;
            let pokeNm = data.name;
            let miniImg = data.sprites.front_default;
            let stats = data.stats;
            let elem = data.types;
            let atck = data.moves;
            pokeImage(pokeImg,miniImg);
            pokeText(pokeNm.toUpperCase());
            pokeStat(stats);
            pokeElement(elem);
            pokeAttacks(atck);
            document.getElementById("info").removeAttribute("hidden");
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url,url2) => {
    let pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    pokePhoto = document.getElementById("miniPokemon");
    pokePhoto.src = url2;
    pokePhoto.removeAttribute("hidden");
}

const pokeText = (pokemon) => {
    let pokeName = document.getElementById("pokemonName");
    pokeName.innerHTML = pokemon;
    pokeName = document.getElementById("miniName");
    pokeName.innerHTML = pokemon;
    pokeName.removeAttribute("hidden");
    
}

const pokeStat = (stat) => {
    let pokeStat = document.getElementById("list");
    let elements = "";
    //pokeStat.appendChild(ul)
    stat.forEach(element => {
        //console.log(element.stat.name+' -> '+element.base_stat);
        elements += '<li>'+element.stat.name+' -> '+element.base_stat+'</li>\n';
    });
    console.log(elements);
    pokeStat.innerHTML =elements;
    console.log('-------------------');
}

const pokeElement = (elem) => {
    let pokeElem = document.getElementById("listElement");
    let getElem = "/ ";
    elem.forEach(element => {
        console.log(element.type.name+' / ');
        getElem+= element.type.name+' / ';
    });
    console.log('-------------------');
    pokeElem.innerHTML = getElem;
}

const pokeAttacks = (atk) => {
    let pokeAttk = document.getElementById("listAttacks");
    let attacks = ""
    atk.forEach(elems =>{
        //console.log(elems.move.name);
        attacks += '<li>'+elems.move.name+'</li>';
    });
    pokeAttk.innerHTML = attacks;
}

