function unhidedog(anchor){
    var x = document.getElementById("shop-container-dog")
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    document.location.href = "#"+anchor
}

function unhidecat(anchor){
    var x = document.getElementById("shop-container-cat")
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    document.location.href = "#"+anchor
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

/*======================================================================================*/
var list = []
var breedlist = []
var urllist = []

  var animallist = [];
  var doglist = [];
  var catlist = [];

fetch('animals.json')
  .then(response => response.json())
  .then(async function(data){
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
      if(document.getElementById("dogcards") != null){
        for(i=0;i < doglist.length;i++) /* */
        {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const data_2 = await response.json();
          const aresponse = await fetch('https://randomuser.me/api/');
          const adata = await aresponse.json();
          list.push(data_2);
          var url = data_2.message;
          var splitUrl = url.split('/');
          var breed = splitUrl[4];
          document.getElementById("dogcards").innerHTML += `
                <aside style="max-width: 540px;flex: 2 1 100%;float:left;margin-right:5%">
                    <div id = "doggy" class="card mb-3">
                      <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
                        <div class="col-md-4">
                          <img src="${url}" class="img-fluid" alt="dog image" style = "border-radius:5px 5px 5px 5px;height:230px;width:500px">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body" style = "text-align:left;">
                            <h5 class="card-title" id = "dn"><b>${adata.results[0].name.first}</b></h5>
                            <p class="card-text id = "g">gender: ${adata.results[0].gender}</p>
                            <p class="card-text id = "b">breed: ${breed}</p>
                            <p class="card-text id = "d">description: ${adata.results[0].name.first} is an amazing dog</p>
                            <!-- Button trigger modal -->
                            <button onclick = "myfunction3()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Adopt!</button> 
                          </div>
                        </div>
                      </div>
                    </div>
                </aside>`;
          }
      }/*onclick = "myfunction3()" dog button submit*/
      else if(document.getElementById("catcards") != null){
        for(i=0;i < catlist.length;i++)
        {
          const response = await fetch('https://api.thecatapi.com/v1/images/search');
          const data_3 = await response.json();
          const aresponse = await fetch('https://randomuser.me/api/');
          const adata = await aresponse.json();
          var Url = data_3[0].url
          document.getElementById("catcards").innerHTML += `
          <aside style="max-width: 540px;flex: 2 1 100%;float:left;margin-right:5%">
            <div class="card mb-3">
              <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
                <div class="col-md-4">
                  <img src="${Url}" class="img-fluid" alt="cat image" style = "border-radius:5px 5px 5px 5px;height:100%;width:120%">
                </div>
                <div class="col-md-8">
                  <div class="card-body" style = "text-align:left;">
                    <h5 class="card-title" id = "n"><b>${adata.results[0].name.first}</b></h5>
                    <p class="card-text id = "g">gender: ${adata.results[0].gender}</p>
                    <p class="card-text id = "b">breed: ${catlist[i].breeds.primary}</p>
                    <p class="card-text id = "d">description: ${adata.results[0].name.first} is an amazing cat</p>
                    <!-- Button trigger modal -->
                    <button onclick = "myfunction3()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Adopt!</button>
                  </div>
                </div>
              </div>
            </div>
          <aside>`
        }
      }/*onclick = "myfunction3()" inside button cat*/
      else if(document.getElementById("preview") != null){
        console.log(catlist)
        const aresponse = await fetch('https://randomuser.me/api/');
        const adata = await aresponse.json();
        document.getElementById("preview").innerHTML += `
        <div class="card mb-3" style="max-width: 540px;margin-left:5%;flex: 2 1 100%;">
            <div class="row g-0 row-cols-1 row-cols-md-2 g-4">
              <div class="col-md-4">
                <img src="${catlist[4].photos[0].small}" class="img-fluid" alt="cat image" style = "border-radius:5px 5px 5px 5px;height:100%;width:120%">
              </div>
              <div class="col-md-8">
                <div class="card-body" style = "text-align:left;">
                  <h5 class="card-title" id = "n"><b>${catlist[4].name}</b></h5>
                  <p class="card-text id = "g">gender: ${catlist[4].gender}</p>
                  <p class="card-text id = "b">breed: ${catlist[4].breeds.primary}</p>
                  <p class="card-text id = "d">description: ${catlist[4].name} is an amazing cat</p>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" onclick = "myfunction3()" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adopt!</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form  id = "contact_form" onsubmit="myfunction()">
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
                            <button class="btn btn-primary">Submit</button>
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
                <img src="${doglist[0].photos[0].small}" class="img-fluid" alt="dog image" style = "border-radius:5px 5px 5px 5px;height:100%;width:120%">
              </div>
              <div class="col-md-8">
                <div class="card-body" style = "text-align:left;">
                  <h5 class="card-title" id = "n"><b>${doglist[0].name}</b></h5>
                  <p class="card-text id = "g">gender: ${doglist[0].gender}</p>
                  <p class="card-text id = "b">breed: ${doglist[0].breeds.primary}</p>
                  <p class="card-text id = "d">description: ${doglist[0].name} is an amazing dog</p>
                  <!-- Button trigger modal -->
                  <button type="button" onclick = "myfunction3()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Adopt!</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form  id = "contact_form" onsubmit="myfunction()">
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
                            <button class="btn btn-primary">Submit</button>
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
      } 
  });

  function myfunction2(){
    document.getElementById("modalbody").innerHTML = `
    <form id = "contact_form">
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
      <button type = "submit" value = "submit" onclick="myfunction()" id = "modalbtn" class="btn btn-primary">Submit</button>
    </form>
    
    `
  }

  var check = false
  const rayzinAPIKEY = "620e6f4b34fd621565858744";
  const rayzinURL = "https://assignment-9231.restdb.io/rest/contact"
  function myfunction() {
    let contactName = $("#name").val();
    let contactlastName = $("#lastName").val();
    let contactGender = $('input[name="gender"]:checked').val()
    let contactAdress = $("#address1").val();
    let contactTown = $("#town").val();
    let contactPostCode = $("#postcode").val();
    let contactPhone = $("#phone").val();
    let contactEmail = $("#email").val();
    let contactMessage = $("#message-text").val();
    console.log(contactName,contactlastName,contactGender,contactAdress,contactTown,contactPostCode,contactPhone,contactEmail,contactMessage)
    var name = contactName + " " + contactlastName;
    console.log(name)
    var realgender
    if(contactGender == 1){realgender = "Male"}
    else{realgender = "Female"}
    console.log(realgender)
    let jsondata = {
      "name": name,
      "gender": realgender,
      "Address": contactAdress,
      "Town": contactTown,
      "Postal code": contactPostCode,
      "phone number":contactPhone,
      "email": contactEmail,
      "message": contactMessage
    };
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": rayzinURL,
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": rayzinAPIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    document.getElementById("exampleModal").innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Adoption form</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style = "margin:15%;text-align:center;">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_5l7g7pwp.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>
            <b>Your response is recorded!<br>Please wait for an email to be send to you for more information.</b>
          </div>
          <div class="modal-footer">
            <button onclick = "check = true" data-bs-dismiss="modal" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    ` 
    return check;
  }

  function myfunction3(check){
    if(check = true){
      document.getElementById("exampleModal").innerHTML = `
      <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Adoption form</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id = "contact_form" onsubmit="myfunction()">
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
                      <button id = "modalbtn"class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

      `
    }
    

  }
 
  $(document).ready(function(){
    $("#myinputdog").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#dogcards aside").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  $(document).ready(function(){
    $("#myinputcat").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#catcards aside").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  window.addEventListener("load", function () {
      const loader = document.querySelector(".loader");
      loader.className += " hidden"; // class "loader hidden"
  });


  /**=============================================================================== */

  var localstring = localStorage.getItem('MyCartList');//gets array
  var ItemsinArray = JSON.parse(localstring);//converts string to array 
  if(localStorage.getItem("Discount")){
    var getdiscount = localStorage.getItem("Discount");
    var Discountarray = JSON.parse(getdiscount);
  }
  let CartList = []//empty array list
  let Discount = []
  
  
  if(document.readyState == 'loading'){
      document.addEventListener('DOMContentLoaded',ready) //checks if page has loaded finish if it has it will call the ready function
  } else{
    addToCartClicked()
    ready()
  }
  
  function ready(){
      var removeCartItemButton = document.getElementsByClassName('ProductRemove')
      for (var i = 0; i<removeCartItemButton.length;i++){
          var button = removeCartItemButton[i]
          button.addEventListener('click',removeCartItem)//when ProductRemove button has been clicked it will fire the removeCartItem function
      }
      var quantityInputs = document.getElementsByClassName('CartQuantity')
      for (var i = 0; i <quantityInputs.length;i++){
          var input = quantityInputs[i]
          input.addEventListener('change',quantityChanged)//when CartQuantity button has been changed it will fire the quantityChanged function
      }
      var addToCartButtons = document.getElementsByClassName('buynowbutton')
      for (var i = 0; i <addToCartButtons.length;i++){
          var button = addToCartButtons[i]
          button.addEventListener('click', addingToArray)//when buynowbutton button has been clicked it will fire the addingToArray function
      }
  }
  
  function CartClicked(){
      alert('Please enter your card details to pay!')//sends a message to the page where it pops up
      window.localStorage.clear();//clears the local storage as they are now paying
      location.reload()//reloads the whole page so the page updates
      updateCartTotal()//updates the total as there is no items
  } 
  
  function removeCartItem(event){
      var buttonclicked = event.target
      buttonclicked.parentElement.parentElement.remove()//removes that item in the array
      updateCartTotal()//updates price
  }
  
  function quantityChanged(event){
      var input = event.target
      if (isNaN(input.value) || input.value <=0){//makes it so there cant be below 1 quantity
          input.value=1
      }
      updateCartTotal()//updates quantity change
  }
  
  function addingToArray(event){
      var button =event.target
      var parent = button.closest("div div")
      var product = parent.parentElement
      console.log(product)
      let addcartitems = {
          title: product.getElementsByClassName("ItemName")[0].innerText,//adding finding items to put into array
          price: product.getElementsByClassName("ItemPrice")[0].innerText,
          img : product.getElementsByClassName("ItemImage")[0].src
      }
          var existingstring = localStorage.getItem('MyCartList')//makes a var from exisiting array
          if (existingstring == null){//if there is no array exisiting it will create one
              CartList.push(addcartitems);//adds the new object to the array
              console.warn('added',{CartList});
              alert('Item added to cart')
              localStorage.setItem('MyCartList',JSON.stringify(CartList)); //makes it string to transfer over to other pages from localStorage
          }else{
              var existing = JSON.parse(existingstring);//if there is exisiting array it will convert it back from string to array
              existing.push(addcartitems);//adds new object
              console.warn('added',{existing});
              alert('Item added to cart')
              localStorage.setItem('MyCartList',JSON.stringify(existing)); //makes array into string for localStorage
          }
  };
  
  function addToCartClicked(event){
      for (var i = 0; i <ItemsinArray.length; i++){
        console.log(ItemsinArray[1].title)
      var title = ItemsinArray[i].title//gets that items title
      var price = ItemsinArray[i].price//gets that items price
      var img = ItemsinArray[i].img// gets that items image link
      if (title)
      addItemToCart(title,price,img)//calls function and puts perimeters inside
      updateCartTotal()//updates cart total because it added a new items so there is a new total
      }
  }
  
  function addItemToCart(title,price,imageSrc){//adds that item to cart
    console.log(price)
      var cartRow = document.createElement('div')
      cartRow.classList.add('CartRow')
      var cartItems = document.getElementsByClassName('CartItems')[0]
      var cartItemNames =cartItems.getElementsByClassName('CartTitle')
      for (var i = 0; i <cartItemNames.length; i++){//checks if there are duplicates
          if (cartItemNames[i].innerHTML == title){
              alert('There has been a duplicate item added!')
              return
          }
      }
      console.log('Hi')
      var cartRowContents = `
              <div class="CartColumn">
              <img class="CartImage" src="${imageSrc}">
              <span class="CartTitle">${title}</span>
          </div>
          <span class="CartPrice CartColumn">${price}</span>
          <div class="CartColumn">
              <input class="CartQuantity" type="number" value="1">
              <button class="ProductRemove" type="button">REMOVE</button>
          </div>`//prints out the items in that format
          cartRow.innerHTML = cartRowContents
      cartItems.append(cartRow)
      cartRow.getElementsByClassName('ProductRemove')[0].addEventListener('click',removeCartItem)//if they click on the remove button it will call the remove function which will remove that item
      cartRow.getElementsByClassName('CartQuantity')[0].addEventListener('change',quantityChanged)//sees if quantity changed so they make sure it cant go below 1 and can update cart total
  }
  
  
   function updateCartTotal(){//Updates total
       var cartItemContainer =  document.getElementsByClassName('CartItems')[0]//wants the first element of the array
       var CartRows = cartItemContainer.getElementsByClassName('CartRow')//gets all the elements inside the object like price or title
       var total=0
      for (var i = 0; i<CartRows.length;i++){
          var CartRow = CartRows[i]
          var PriceElement = CartRow.getElementsByClassName('CartPrice')[0]//gets price
          var quantityElement =CartRow.getElementsByClassName('CartQuantity')[0]//gets quantity
          var price = parseFloat(PriceElement.innerText.replace('$',''))  //parsefloat turns any string into a float
          var quantity = quantityElement.value
          total =total+(price*quantity)//finds total
      }
      if (Discountarray){
        const totaltitle = document.querySelector('.CartTotalTitle');
        var discountedpercentage =Discountarray[0] 
        totaltitle.innerHTML = `Total (${discountedpercentage}%):`
        total = Math.round((total*100) / 100 * (1-(discountedpercentage/100)))//makes the total 2 decimal
        document.getElementsByClassName('CartTotal')[0].innerText = "$" + total//shows the total
      }
      else{
        total = Math.round((total*100) / 100)//makes the total 2 decimal
        document.getElementsByClassName('CartTotal')[0].innerText = "$" + total//shows the total
      }
   }
  
function Spinthewheel(){
  const wheel = document.querySelector('.STW-Wheel');
  const startButton = document.querySelector('.STW-Button');
  const display = document.querySelector('.STW-Display');
  let deg = 0;
  let zoneSize = 45

  const symbolZones = {
    1:"Better luck next time",
    2:"20% off",
    3:"Better luck next time",
    4:"15% off",
    5:"Better luck next time",
    6:"5% off",
    7:"Better luck next time",
    8:"10% off"
  }

  const handleWin = (actualDeg) =>{
    localStorage.removeItem('Discount')
    const winningSymbolNum = Math.ceil(actualDeg/zoneSize);
    display.innerHTML =symbolZones[winningSymbolNum];
    if(winningSymbolNum == 2 || winningSymbolNum == 4 || winningSymbolNum == 6 || winningSymbolNum == 8){
      var off = symbolZones[winningSymbolNum].match(/(\d+)/)
      const discount = off[0]
      Discount.push(discount);
      localStorage.setItem('Discount',JSON.stringify(Discount))
  }
}

  startButton.addEventListener('click',() => {
    display.innerHTML = "-";
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 10s ease-out';
    wheel.style.transform =  `rotate(${deg}deg)`;
  });

  wheel.addEventListener('transitionend',() => {
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    handleWin(actualDeg);
  })
};

  const Onetime = document.getElementById("One-Time")
  const Monthly = document.getElementById("Monthly")
  const ten = document.getElementById("ten")
  const twenty = document.getElementById("twenty")
  const fourty = document.getElementById("fourty")
  const eighty = document.getElementById("eighty")
  const hundredsixty = document.getElementById("hundredandsixty")
  const twohundred = document.getElementById("twohundred")
  const button = document.querySelector(".donation-button")
  const customamt = document.querySelector("#customamt")
  var custom = document.querySelector('input[type="number"]')
  const API = "620f3e4534fd621565858781";
  var freq;
  var amt;

  Onetime.addEventListener('click', ()=>{
    freq = Onetime.value
  })
  Monthly.addEventListener('click', ()=>{
    freq = Monthly.value
  })
  ten.addEventListener('click', ()=>{
    amt = ten.value
    customamt.style.display = "none"
  })
  twenty.addEventListener('click', ()=>{
    amt = twenty.value
    customamt.style.display = "none"
  })
  fourty.addEventListener('click', ()=>{
    amt = fourty.value
    customamt.style.display = "none"
  })
  eighty.addEventListener('click', ()=>{
    amt = eighty.value
    customamt.style.display = "none"
  })
  hundredsixty.addEventListener('click', ()=>{
    amt = hundredsixty.value
    customamt.style.display = "none"
  })
  twohundred.addEventListener('click', ()=>{
    amt = twohundred.value
    customamt.style.display = "none"
  })
  button.addEventListener('click', ()=>{
    if(amt==null){
      amt='$' + custom.value
    }
    else if(amt == '$10' || amt == '$20' || amt == '$40' || amt == '$80' || amt == '$160' || amt == '$200'){
      button.innerHTML = amt
    }
    else{
      amt='$' + custom.value
    }
    button.innerHTML = amt
  })