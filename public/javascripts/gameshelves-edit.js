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
      const customShelfId = buttonId.slice(7);
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      console.log(customShelfId, renameInputField);
      renameInputField.type = 'text';
      // document.getElementById(`form-${customShelfId}`).style.display = 'block';
    }

    if (buttonClass === 'save-btn') {
      const customShelfId = buttonId.slice(5);
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      console.log(customShelfId, renameInputField);
      renameInputField.type = 'hidden';

      // document.querySelector('.rename-form').style.display = 'none';
      // document.querySelector('.rename-btn').style.display = 'block';

      const renameForm = document.getElementById(`form-${customShelfId}`);
      console.log("renameForm", renameForm)
      const formData = new FormData(renameForm);
      const newName = formData.get('new-name');
      console.log("newName", newName)
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
