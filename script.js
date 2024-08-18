const apiFetch = (seemore) =>{

    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    const container = document.querySelector(".card-container")

                    for(let i=0; i<json.length; i++){
                        let image = json[i].image
                        let title = json[i].title
                        let description = json[i].description
                        let price = json[i].price
    
                        let div = document.createElement("div")
                        div.classList.add("card", "single-card","mb-2", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2")
                        
                            div.innerHTML =
                                `<img src="${image}" alt="product image" class="product-image mt-1" />
                                 <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${description}</p>
                                    <a href="#" class="see-more">See More</a>
                                    <div class="d-flex justify-content-around price-cart">
                                        <h3>$${price}</h3>
                                        <a href="#" class="btn btn-info">Add Cart</a>
                                    </div>
                                </div>`
                            
                        container.appendChild(div)
                    }
                    seemore()
                })
                .catch()
}

const seeMore = () =>{
    document.querySelectorAll('.see-more').forEach(function(button) {
        button.addEventListener('click', function(more) {
            more.preventDefault();
            const cardBody = this.closest('.card-body');
            cardBody.classList.toggle('expanded');
            this.textContent = cardBody.classList.contains('expanded') ? 'See Less' : 'See More';
        });
    });
}


apiFetch(seeMore)