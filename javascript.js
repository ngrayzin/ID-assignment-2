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
