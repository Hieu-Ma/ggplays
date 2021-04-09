document.querySelector('.rename-form').style.display = 'none';

// save new name of game shelf
document.getElementById('shelf-container').addEventListener('click', async(event) => {
  event.preventDefault();
  // don't we still need to be looking for specific button for each shelf?
  // by looking at just class of rename-btn or save-btn there are multiple buttons
  // on the page with the same class..
  let button = event.target.classList[0];
  if (button === 'rename-btn') {
    document.querySelector('.rename-form').style.display = 'block';
    document.querySelector('.rename-btn').style.display = 'none';
  }
  
  if (button === 'save-btn') {
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



