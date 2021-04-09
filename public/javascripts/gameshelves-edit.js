window.addEventListener('DOMContentLoaded', (event) => {
  // document.querySelectorAll('.rename-form').style.display = 'none';
  
  // save new name of game shelf
  document.getElementById('shelf-container').addEventListener('click', async (event) => {
    event.preventDefault();
    let buttonId = event.target.id;
    let buttonClass = event.target.classList[0];

    // console.log(buttonId, buttonClass)

    // document.querySelectorAll('.rename-form').style.display = 'none';
    if (buttonClass === 'rename-btn') {
      const customShelfId = parseInt(buttonId.slice(5), 10);
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      renameInputField.type = 'text';
      // document.getElementById(`form-${customShelfId}`).style.display = 'block';
      console.log(customShelfId);
    }

    if (buttonClass === 'save-btn') {
      document.querySelector('.rename-form').style.display = 'none';
      document.querySelector('.rename-btn').style.display = 'block';
      const renameForm = event.target.querySelector('.rename-form');
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
        if (!res.ok) {
          throw res;
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  })




})
