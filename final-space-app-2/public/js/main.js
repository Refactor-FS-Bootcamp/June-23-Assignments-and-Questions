const locationForm = document.querySelector('form');
const search = document.querySelector('input');
const msg = document.querySelector('#msg');
const card = document.querySelector('#card');

locationForm.addEventListener('submit' , e => {
    e.preventDefault();
    const productId = search.value;
    msg.textContent = 'Loading';
    fetch(`https://fakestoreapi.com/products/${productId}`).then(response => {
        response.json().then(data => {
            console.log(data)
            if(data.error) {
                msg.textContent = data.error;
            } else {
                msg.textContent = '';
                card.innerHTML = `
                    <div class="card-container">
                        <img src="${data.image}" alt="${data.title}" />
                        <h1>${data.title}</h1>
                        <ul>
                            <li><strong>Price:</strong> ${data.price}</li>
                            <li><strong>Category:</strong> ${data.category}</li>
                            <li><strong>Rating:</strong> ${data.rating.rate}</li>
                        </ul>
                    </div>
                `
            }
        })
    })
})