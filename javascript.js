$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 3; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

function unhidedog(){
    var x = document.getElementById("shop-container-dog")
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

function unhidecat(){
    var x = document.getElementById("shop-container-cat")
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

function fetchBreed(){
    $.get('https://dog.ceo/api/breeds/list/all', (data) => {
      const breedNames = data.message;
      const select = document.getElementById('select');
  
      for (const key in breedNames) {
        if (breedNames.hasOwnProperty(key)) {
          const option = document.createElement('option');
          option.value = key;
          option.innerHTML = key;
          
          select.appendChild(option);
        }
      }
    });
  }
<<<<<<< HEAD

  /*const items = document.getElementById("items");

  let itemsTag = []
  info.items.forEach(item => {
      itemsTag.push(
      <div class="card card-item">
          <div class="card-img-top" style="background-image: url('${item.imagePATH}');"></div>
          <div class="card-body">
              <div class="card-item-info d-flex">
                  <span><img src="img/icons/category.svg" alt="category"><p class="d-inline-block">${item.category}</p></span>
                  <span><img src="img/icons/sold.svg" alt="items sold"><p class="d-inline-block">${item.itemsSold}</p></span>
              </div>
              <h3 class="medium">${item.name}</h3>
              <p class="card-item-price">S$${item.price}</p>

              <button class="btn btn-outline-main">ADD TO CART</button>
          </div>
      </div>
      );
  });

  itemsTag.forEach(item => {
      items.innerHTML += item;
  });

  const shopSearchInput = document.querySelector("#shop-search-input");
  shopSearchInput.addEventListener("keyup", event => {
      items.innerHTML = "";
      for (let i = 0; i < itemsTag.length; i++) {
          if (!info.items[i].name.toLowerCase().includes(shopSearchInput.value.toLowerCase())) {
              continue;
          }
          items.innerHTML += itemsTag[i];
      }

  });*/
=======
>>>>>>> eafd784b765866adfb0d8b75d65f748686f62b55
