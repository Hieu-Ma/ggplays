const gameshelfSelect = document.getElementById("select-options");
const selectForm = document.getQuerySelector(".select-form")

gameshelfSelect.addEventListener('change', () => {
    // e.preventDefault();
    const formData = new FormData(selectForm);
    const shelfTitle = formData.get("gameshelf");
    const body = { shelfTitle };

    const gameId = req.session
    try {
        const res = await fetch(`http://localhost:8080/games/${ss}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw res;
        }

        


      } catch (err) {
          throw new Error(err)
      }
})

// q for if game is associated with game shelf
    // if so, delete game shel
    // then create with new game shelf id 