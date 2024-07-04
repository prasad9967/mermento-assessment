let product;

document.addEventListener('DOMContentLoaded', ()=>{

    const apiURL = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448'
    fetch(apiURL)
    .then(res => {
        if(!res.ok){
            throw new Error('Network error')
        }
        return res.json();
    })
    .then(data => {
        product = data.product
        displayData(product)
    })
    .catch(err => {
        console.log('There has been a problem', err)
    })

    function displayData(product) {
        console.log(product)
        document.getElementById('head1').innerHTML = product.vendor;
        document.getElementById('head2').innerHTML = product.title;
        document.getElementById('price').innerHTML = product.price;
        document.getElementById('compare_price').innerHTML = product.compare_at_price;
        document.getElementById('desc').innerHTML = product.description;
        document.getElementById('count_value').innerHTML = 1;
    }


})

function updateCount(value){
    let val = Number(document.getElementById('count_value').innerHTML)
    val += value
  document.getElementById('count_value').innerHTML = val
}

function showDetails(){
    
    document.getElementById('details').innerHTML = 'Embrace Sideboard with color pink and size Small added to cart'
    document.getElementById('details').style.display = 'block'

}