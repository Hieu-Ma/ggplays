const gameshelfSelect = document.querySelector(".select-options");
const selectForm = document.querySelector(".select-form")

gameshelfSelect.addEventListener('change', async() => {
    // e.preventDefault();
    const formData = new FormData(selectForm);
    const shelfId = formData.get("gameshelf");
    const gameId = formData.get("gameId")
    const body = { shelfId, gameId };

    try {
        const res = await fetch(`/api/games/${gameId}`, {
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
        console.error(err.message)
    }
})
