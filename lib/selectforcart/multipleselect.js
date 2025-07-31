
function displaySelectedOptions() {
    const selectElementbreakfast = document.getElementById('mySelectedbreakfast');
    const selectElementlunch = document.getElementById('mySelectedlunch');
    const selectElementdinner = document.getElementById('mySelecteddinner');
    
    const selectedOptionsBreakfast = getSelectedOptions(selectElementbreakfast);
    const selectedOptionsLunch = getSelectedOptions(selectElementlunch);
    const selectedOptionsDinner = getSelectedOptions(selectElementdinner);
  
    const selectedOptions = {
      breakfast: selectedOptionsBreakfast,
      lunch: selectedOptionsLunch,
      dinner: selectedOptionsDinner
    };
  
    document.getElementById('selectedOptions').textContent = "Selected Options: " + JSON.stringify(selectedOptions);
  }
  
  function getSelectedOptions(selectElement) {
    const selectedOptions = [];
    for (let i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].selected) {
        selectedOptions.push(selectElement.options[i].value);
      }
    }
    return selectedOptions;
  }

  
function addToCart() {
    const checkbox = document.getElementById('option1');
    if (checkbox.checked) {
      // Perform the add to cart operation here
      alert('Item added to cart!');
    } else {
      alert('Please select the checkbox to add to cart.');
    }
  }