document.querySelector('.rename-form').style.display = 'none';



// save new name of game shelf
document.getElementById('shelf-container').addEventListener('click', async(event) => {
  event.preventDefault();
  let button = event.target.classList[0];
  if (button === 'rename-btn') {
    document.querySelector('.rename-form').style.display = 'block';
  }
  
  if (button === 'save-btn') {
    document.querySelector('.rename-form').style.display = 'none';
    const renameForm = event.target.querySelector('.rename-form');
    const formData = new FormData(renameForm);
    const newName = formData.get('new-name');
    const shelfId = formData.get('shelf-id');
    const body = { newName, shelfId };
    const renameInput = document.getElementById('rename-input');

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



