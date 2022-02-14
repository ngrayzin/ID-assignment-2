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
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("a");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var list = []
var breedlist = []
var urllist = []

  var animallist = [];
  var doglist = [];
  var catlist = [];
  $(document).ready(function(){
        fetch('animals.json')
        .then(response => response.json())
        .then(function(data){
            console.log(data)
            animallist.push(data)
            for(i=0;i < animallist[0].animals.length;i++)
            {
                if(animallist[0].animals[i].species == "Dog")
                {
                    doglist.push(animallist[0].animals[i])
                }
                else if(animallist[0].animals[i].species  == "Cat")
                {
                    catlist.push(animallist[0].animals[i])
                }
            }
            
            
           
            for(i=0;i < doglist.length;i++)
            {
              
            }
            console.log(breedlist)
            console.log(urllist)
            for(i=0;i < doglist.length;i++)
            {
              fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(function(data){
                  list.push(data)
                  var url = data.message
                  var splitUrl = url.split('/');
                  var breed = splitUrl[4]
                  document.getElementById("dogcards").innerHTML += `
                  <div class="card mb-3" style="max-width: 540px;margin-left:5%;flex: 2 1 100%;">
                    <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
                      <div class="col-md-4">
                        <img src="${url}" class="img-fluid" alt="dog image" style = "border-radius:5px 5px 5px 5px;height:230px;width:500px">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${doglist[i].name}</h5>
                          <p class="card-text id = "b">gender: ${doglist[i].gender}</p>
                          <p class="card-text id = "b">breed: ${breed}</p>
                          <p class="card-text id = "b">description: ${doglist[i].name} is an amazing dog</p>
                          <!-- Button trigger modal -->
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adopt!</button>
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                  <!-- name -->

                                  <div id="first-last-name" class="mb-3">
                                    <label class="main-label" id="name-label">First Name: </label>
                                    <input type="text" id="name" placeholder="John" required><br><br>
                              
                                    <label class="main-label">Last Name: </label>
                                    <input type="text" id="lastName" placeholder="Smith" required>
                                  </div>
                              
                                  <!-- gender -->
                                  <div id="gender" class="mb-3">
                                    <input type="radio" id="male" name="gender" value="1" required>
                                    <label class="main-label" for="male">Male</label>
                              
                                    <input type="radio" id="female" name="gender" value="2" required>
                                    <label class="main-label" for="female">Female</label>
                                  </div>
                                  <!-- address  -->
                                  <div id="address" class="mb-3">
                                    <label class="main-label" for="address1">Address: </label>
                                    <input type="text" id="address1" size="30" placeholder="Enter your address here"><br><br>


                                    <label class="main-label" for="town">Town: </label>
                                    <input type="text" id="town" size="15" placeholder="Your town">

                                    <label class="main-label" for="postcode">Postcode: </label>
                                    <input type="text" id="postcode" size="10" placeholder="Postcode"><br><br>

                                  </div>

                                  <!-- email / phone / age -->

                                  <div id="email-phone" class="mb-3">
                                    <label class="main-label" id="phone-label" for="phone">Phone: </label>
                                    <input type="tel" id="phone" placeholder="e.g. +44 7675 403 665"><br><br>

                                    <label class="main-label" id="email-label" for="email">Email: </label>
                                    <input type="email" id="email" placeholder="e.g. youremail@example.co.uk" required size="35">

                                  </div>
                                    
                                  <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Short paragraph on why you want to adopt this pet:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                  </div>
                                  <!-- submit button -->
                                  <div id="button">
                                    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                                  </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`
                  i++;
                })
              }

            
        })
      

      });
$(document).ready(function(){
  fetch('animals.json')
  .then(response => response.json())
  .then(function(data){
      for(i=0;i < catlist.length;i++)
      {
        
        document.getElementById("catcards").innerHTML += `
        <div class="card mb-3" style="max-width: 540px;margin-left:5%;flex: 2 1 100%;">
          <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-4">
              <img src=".." class="img-fluid" alt="cat image" style = "border-radius:5px 5px 5px 5px;height:100%;width:120%">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${catlist[i].name}</h5>
                <p class="card-text id = "b">gender: ${catlist[i].gender}</p>
                <p class="card-text id = "b">breed: ${catlist[i].breeds.primary}</p>
                <p class="card-text id = "b">description: ${catlist[i].name} is an amazing cat</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adopt!</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                        <!-- name -->

                        <div id="first-last-name" class="mb-3">
                          <label class="main-label" id="name-label">First Name: </label>
                          <input type="text" id="name" placeholder="John" required><br><br>
                    
                          <label class="main-label">Last Name: </label>
                          <input type="text" id="lastName" placeholder="Smith" required>
                        </div>
                    
                        <!-- gender -->
                        <div id="gender" class="mb-3">
                          <input type="radio" id="male" name="gender" value="1" required>
                          <label class="main-label" for="male">Male</label>
                    
                          <input type="radio" id="female" name="gender" value="2" required>
                          <label class="main-label" for="female">Female</label>
                        </div>
                        <!-- address  -->
                        <div id="address" class="mb-3">
                          <label class="main-label" for="address1">Address: </label>
                          <input type="text" id="address1" size="30" placeholder="Enter your address here"><br><br>


                          <label class="main-label" for="town">Town: </label>
                          <input type="text" id="town" size="15" placeholder="Your town">

                          <label class="main-label" for="postcode">Postcode: </label>
                          <input type="text" id="postcode" size="10" placeholder="Postcode"><br><br>

                        </div>

                        <!-- email / phone / age -->

                        <div id="email-phone" class="mb-3">
                          <label class="main-label" id="phone-label" for="phone">Phone: </label>
                          <input type="tel" id="phone" placeholder="e.g. +44 7675 403 665"><br><br>

                          <label class="main-label" id="email-label" for="email">Email: </label>
                          <input type="email" id="email" placeholder="e.g. youremail@example.co.uk" required size="35">

                        </div>
                          
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label">Short paragraph on why you want to adopt this pet:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <!-- submit button -->
                        <div id="button">
                          <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
      }
    })
  })

$(document).ready(function(){
  fetch('animals.json')
  .then(response => response.json())
  .then(function(data){
      document.getElementById("preview").innerHTML += `
      <div class="card mb-3" style="max-width: 540px;margin-left:5%;flex: 2 1 100%;">
          <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-4">
              <img src=".." class="img-fluid" alt="cat image" style = "border-radius:5px 5px 5px 5px;height:100%;width:120%">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${catlist[0].name}</h5>
                <p class="card-text id = "b">gender: ${catlist[0].gender}</p>
                <p class="card-text id = "b">breed: ${catlist[0].breeds.primary}</p>
                <p class="card-text id = "b">description: ${catlist[0].name} is an amazing cat</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adopt!</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                        <!-- name -->

                        <div id="first-last-name" class="mb-3">
                          <label class="main-label" id="name-label">First Name: </label>
                          <input type="text" id="name" placeholder="John" required><br><br>
                    
                          <label class="main-label">Last Name: </label>
                          <input type="text" id="lastName" placeholder="Smith" required>
                        </div>
                    
                        <!-- gender -->
                        <div id="gender" class="mb-3">
                          <input type="radio" id="male" name="gender" value="1" required>
                          <label class="main-label" for="male">Male</label>
                    
                          <input type="radio" id="female" name="gender" value="2" required>
                          <label class="main-label" for="female">Female</label>
                        </div>
                        <!-- address  -->
                        <div id="address" class="mb-3">
                          <label class="main-label" for="address1">Address: </label>
                          <input type="text" id="address1" size="30" placeholder="Enter your address here"><br><br>


                          <label class="main-label" for="town">Town: </label>
                          <input type="text" id="town" size="15" placeholder="Your town">

                          <label class="main-label" for="postcode">Postcode: </label>
                          <input type="text" id="postcode" size="10" placeholder="Postcode"><br><br>

                        </div>

                        <!-- email / phone / age -->

                        <div id="email-phone" class="mb-3">
                          <label class="main-label" id="phone-label" for="phone">Phone: </label>
                          <input type="tel" id="phone" placeholder="e.g. +44 7675 403 665"><br><br>

                          <label class="main-label" id="email-label" for="email">Email: </label>
                          <input type="email" id="email" placeholder="e.g. youremail@example.co.uk" required size="35">

                        </div>
                          
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label">Short paragraph on why you want to adopt this pet:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <!-- submit button -->
                        <div id="button">
                          <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="max-width: 540px;margin-left:5%;flex: 2 1 100%;margin-right:3%;">
          <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-4">
              <img src=".." class="img-fluid" alt="dog image" style = "border-radius:5px 5px 5px 5px;height:100%;width:120%">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${doglist[0].name}</h5>
                <p class="card-text id = "b">gender: ${doglist[0].gender}</p>
                <p class="card-text id = "b">breed: ${doglist[0].breeds.primary}</p>
                <p class="card-text id = "b">description: ${doglist[0].name} is an amazing dog</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adopt!</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form>
                        <!-- name -->

                        <div id="first-last-name" class="mb-3">
                          <label class="main-label" id="name-label">First Name: </label>
                          <input type="text" id="name" placeholder="John" required><br><br>
                    
                          <label class="main-label">Last Name: </label>
                          <input type="text" id="lastName" placeholder="Smith" required>
                        </div>
                    
                        <!-- gender -->
                        <div id="gender" class="mb-3">
                          <input type="radio" id="male" name="gender" value="1" required>
                          <label class="main-label" for="male">Male</label>
                    
                          <input type="radio" id="female" name="gender" value="2" required>
                          <label class="main-label" for="female">Female</label>
                        </div>
                        <!-- address  -->
                        <div id="address" class="mb-3">
                          <label class="main-label" for="address1">Address: </label>
                          <input type="text" id="address1" size="30" placeholder="Enter your address here"><br><br>


                          <label class="main-label" for="town">Town: </label>
                          <input type="text" id="town" size="15" placeholder="Your town">

                          <label class="main-label" for="postcode">Postcode: </label>
                          <input type="text" id="postcode" size="10" placeholder="Postcode"><br><br>

                        </div>

                        <!-- email / phone / age -->

                        <div id="email-phone" class="mb-3">
                          <label class="main-label" id="phone-label" for="phone">Phone: </label>
                          <input type="tel" id="phone" placeholder="e.g. +44 7675 403 665"><br><br>

                          <label class="main-label" id="email-label" for="email">Email: </label>
                          <input type="email" id="email" placeholder="e.g. youremail@example.co.uk" required size="35">

                        </div>
                          
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label">Short paragraph on why you want to adopt this pet:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <!-- submit button -->
                        <div id="button">
                          <button type="submit" id="submit" class="btn btn-primary">Submit</button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  })
})
                
    

    


    


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

  }); */
