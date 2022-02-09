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