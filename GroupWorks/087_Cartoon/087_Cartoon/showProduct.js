// showProduct(productList);
// showProduct(productList);

export function showProduct(productList){
    for(let p of productList){
        let divP = document.createElement('div');
        divP.setAttribute('id',p.id);
        divP.setAttribute('class','col-md-5')
        divP.setAttribute('style','padding:2em;margin:2em;border:double grey 1px;height:auto;')
        //Add image of product
        let img = document.createElement('img');
        img.setAttribute('src',p.image);
        img.setAttribute('style','width:16em;height:16em;text:center')
        divP.appendChild(img)
        divP.appendChild(document.createElement('br'));
        //Add product details
        divP.appendChild(document.createTextNode('ID: ' + p.id));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Name: ' + p.name));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Desription: ' + p.description));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Price: ' + p.price + ' baht'));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Stock: ' + p.stock));
        divP.appendChild(document.createElement('br'));
        
        //create button
        const button = document.createElement('button');
        button.setAttribute('type','button');
        button.setAttribute('id',p.id)
        if(p.stock==0){
            button.setAttribute('class','btn btn-danger');
            button.setAttribute('value','outOfStock')
            button.appendChild(document.createTextNode("Out of stock"));
            button.addEventListener('click',outOfStock)
        }
        else{
            button.setAttribute('class','btn btn-primary');
            button.appendChild(document.createTextNode("Buy"));
            button.addEventListener('click',addProductToCart)
        }
        divP.appendChild(button);
        divProduct.appendChild(divP);
    }
}