window.addEventListener('DOMContentLoaded', (event) => {
  // document.querySelectorAll('.rename-form').style.display = 'none';
  
  // save new name of game shelf
  document.getElementById('shelf-container').addEventListener('click', async (event) => {
    event.preventDefault();
    let buttonId = event.target.id;
    let buttonClass = event.target.classList[0];

    // document.querySelectorAll('.rename-form').style.display = 'none';
    if (buttonClass === 'rename-btn') {
      const customShelfId = buttonId.slice(7);
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      renameInputField.type = 'text';
    }

    if (buttonClass === 'save-btn') {
      const customShelfId = buttonId.slice(5);
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      renameInputField.type = 'hidden';

      // document.querySelector('.rename-form').style.display = 'none';
      // document.querySelector('.rename-btn').style.display = 'block';

      const renameForm = document.getElementById(`form-${customShelfId}`);
      const formData = new FormData(renameForm);
      const newName = formData.get('new-name');
      const shelfId = formData.get('shelf-id');
      const body = { newName, shelfId };

      try {
        const res = await fetch('/api/gameshelves/edit', {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' }
        })

        const data = await res.json();
        const newName = data.customShelf.title;

        const data1 = event.target.parentElement.parentElement.parentElement.firstChild;

        data1.innerHTML = newName
        
        if (!res.ok) {
          throw res;
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  })




})
