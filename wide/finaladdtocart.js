
function updateSelectedItems() {
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedItems.push(checkbox.value);
      }
    });
    const selectedItemsDiv = document.getElementById('selectedItems');
    selectedItemsDiv.innerHTML = '';
    if (selectedItems.length > 0) {
      selectedItemsDiv.innerHTML = '<h3>Selected Items:</h3><ul></ul>';
      const selectedItemsList = selectedItemsDiv.querySelector('ul');
      selectedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        selectedItemsList.appendChild(listItem);
      });
    }
  }
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedItems);
  });