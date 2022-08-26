const pokemonRepository=function(){let c=[];function a(){return c}function d(a){b(a).then(function(){let m=document.getElementById("pokemonModalLabel");m.innerText=a.name;let b=document.createElement("div");b.classList.add("pokemon-nav"),0===f(a)&&b.classList.add("pokemon-nav--disabled"),b.innerText="Previous",b.addEventListener("click",()=>g(a));let d=document.createElement("div");d.classList.add("pokemon-nav"),f(a)===c.length-1&&d.classList.add("pokemon-nav--disabled"),d.innerText="Next",d.addEventListener("click",()=>h(a));let i=document.createElement("div");i.classList.add("pokemon-info");let e=document.createElement("div");e.classList.add("pokemon-container");let j=document.createElement("img");j.src=a.imageUrl,j.style.width="300px";let k=document.createElement("p");k.innerText="Height: "+a.height/10+"m";let l=document.getElementById("pokemonModalBody");l.innerHTML="",i.appendChild(j),i.appendChild(k),e.appendChild(b),e.appendChild(i),e.appendChild(d),l.appendChild(e)})}let e;function b(a){return fetch(a.detailsUrl).then(function(a){return a.json()}).then(function(b){a.imageUrl=b.sprites.other.dream_world.front_default,a.height=b.height,a.types=b.types}).catch(function(a){console.error(a)})}function f(a){return c.findIndex(b=>b.name===a.name)}function g(a){d(c[f(a)-1])}function h(a){d(c[f(a)+1])}return window.addEventListener("keydown",a=>{"Escape"===a.key&&modalContainer.classList.contains("is-visible")&&(modalContainer.classList.remove("is-visible"),e&&(e(),e=null))}),{getAll:a,addListItem:function(b){let e=document.querySelector(".pokemon-list"),c=document.createElement("li"),a=document.createElement("button");a.innerText=b.name,a.classList.add("btn","btn-outline-secondary","my-button"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#pokemonDetailModal"),c.appendChild(a),e.appendChild(c),function(a,b){a.addEventListener("click",function(){d(b)})}(a,b)},loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(a){return a.json()}).then(function(a){a.results.forEach(function(a){var b;"object"==typeof(b={name:a.name[0].toUpperCase()+a.name.slice(1),detailsUrl:a.url})&&"name"in b?c.push(b):console.log("pokemon is not correct")})}).catch(function(a){console.error(a)})},loadDetails:b}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(a){pokemonRepository.addListItem(a)})})