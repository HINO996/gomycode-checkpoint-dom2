let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button');

let prixTotal = [];
let subt = document.querySelectorAll('.subtotal');

for(let i=0; i< subt.length; i++){
    console.log(subt);
}

btnPlusAll.forEach((btn)=>{btn.addEventListener('click', increaseQuantity)});
btnMinusAll.forEach((btn) =>{btn.addEventListener('click',decreaseQuantity)});
addButton.addEventListener('click' ,addArticle );

function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1;
    subtotal(this);
}

function decreaseQuantity (){
    if(this.nextElementSibling.value > 0){
        this.nextElementSibling.value =  parseInt(this.nextElementSibling.value) -1;
        subtotal(this);
  }
}

function subtotal(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qty = parseInt(elt.previousElementSibling.value);
    let som= price*qty;

    elt.parentElement.nextElementSibling.nextElementSibling.innerText = som + 'fr';
}

function addArticle(){
    

    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');
    document.querySelector('#all_products').innerHTML += '<tr><td class="article--name"><div style="margin-right:1rem"><div class="produit"><img class="image" src="images/sac-riz.webp" alt=""></div></div><div><h3>'+ name.value+'</h3><a class="remove" id="1">supprimer</a></div></td><td class="quantity"><button class="qty-minus" id="1">-</button><input type="text"  readonly placeholder="Unit price"  class="qty" value="1"><button class="qty-plus" id="1">+</button></td><td class="price">'+ price.value+' fr</td><td class="subtotal">'+ price.value+' fr</td> </tr>';
     loadNewElement();
}

function loadNewElement(){
    let btnPlusAll = document.querySelectorAll('.qty-plus');
    let btnMinusAll = document.querySelectorAll('.qty-minus');
    
    btnPlusAll.forEach((btn)=>{btn.addEventListener('click', increaseQuantity)});
    btnMinusAll.forEach((btn) =>{btn.addEventListener('click',decreaseQuantity)});
    
}

function total(){

}