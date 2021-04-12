window.addEventListener('DOMContentLoaded', (event) => {
  // save new name of game shelf
  document.getElementById('shelf-container').addEventListener('click', async (event) => {
    event.preventDefault();
    let buttonId = event.target.id;
    let buttonClass = event.target.classList[0];

    // rename form
    if (buttonClass === 'rename-btn') {
      const customShelfId = buttonId.slice(7);
      document.getElementById(`${buttonId}`).style.display = "none";
      document.getElementById(`save-${customShelfId}`).style.display = "block";
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      renameInputField.type = 'text';
    }

    // Save form
    if (buttonClass === 'save-btn') {
      const customShelfId = buttonId.slice(5);
      document.getElementById(`${buttonId}`).style.display = "none";
      document.getElementById(`rename-${customShelfId}`).style.display = "block";
      const renameInputField = document.getElementById(`rename-input-${customShelfId}`)
      renameInputField.type = 'hidden';

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

    // Delete form
    if (buttonClass === 'delete-btn') {
      const customShelfId = buttonId.slice(7);
      const deleteForm = document.getElementById(`delete-form-${customShelfId}`);
      const formData = new FormData(deleteForm);
      const shelfId = formData.get('shelf-id');
      const body = { shelfId }

      try {
        const res = await fetch('/api/gameshelves/edit/delete', {
          method: 'DELETE',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' }
        })

        if (res.status === 204) {
          const deleteCustomShelf = event.target.parentElement.parentElement.parentElement;
          deleteCustomShelf.innerHTML = '';
          deleteCustomShelf.style.position = 'absolute';
          deleteCustomShelf.style.display = 'none';
        }

        if (!res.ok) {
          throw res;
        }

      } catch (error) {
        console.error(error.message);
      };
    }
  })
})
