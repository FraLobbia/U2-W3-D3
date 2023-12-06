fetch("https://striveschool-api.herokuapp.com/books")
	/* aaa */
	.then((responseObj) => {
		console.log(responseObj);

		if (responseObj.ok) {
			return responseObj.json();
		} else {
			console.log("errore");
		}
	})
	.then((usersObj) => {
		// dentro il parametro di questa callback abbiamo sempre il dato fornito dalle API pronto per essere utilizzato

		// a questo livello siamo sicuri di avere il dato, al momento giusto in cui è arrivato ed è disponibile
		// dovremo quindi operare NECESSARIAMENTE all'interno di questo contesto

		// possiamo quindi andare a utilizzare i dati contenuti nella risposta come meglio vogliamo
		// es. DOM Manipulation:

		/*  const container = document.getElementById("pictures") */
		console.log(usersObj);

		usersObj.forEach((libro) => {
			const asin = libro.asin;
			const copertina = libro.img;
			const price = libro.price;
			const title = libro.title;
			const mainContainer = document.getElementById("mainContainer");
			const nuovaCard = document.createElement("div");
			nuovaCard.classList.add("card-group", "col-4", "col-md-3");
			nuovaCard.innerHTML = `
            
            <div class="card mb-3">
            <img src="${copertina}" class="card-img-top" alt="copertina ${title}" />
            <div class="card-body d-flex flex-column justify-content-between">

                <div>
                <h5 class="card-title">${title}</h5>
                <span class="text-muted"">Prezzo: ${price}€</span>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                </div>

                <div>
                <a href="#" class="btn btn-dark compra-button" onclick="compra('${title}','${price}')">Compra ora a ${price}€</a>
                <a href="#" class="btn btn-danger">Scarta</a>
                </div>

            </div>
        </div>`;
			mainContainer.appendChild(nuovaCard);
		});
		const scartaButtons = document.querySelectorAll(".btn-danger");
		// --------------------------------------
		scartaButtons.forEach((element) => {
			element.addEventListener("click", () => {
				element.parentElement.parentElement.parentElement.parentElement.remove();
			});
		});
	})
	.catch((error) => console.log(error));

function compra(titolo, prezzo) {
	const cart = document.getElementById("cart");
	const div = document.createElement("div");
	div.classList.add("d-flex", "justify-content-between");
	const icona = document.createElement("i");
	icona.classList.add("bi", "bi-x-square-fill", "fs-2", "ms-1");
	icona.addEventListener("click", () => {
		icona.parentElement.remove();
	});
	div.innerHTML = titolo + `<p>prezzo: ${prezzo}€</p>`;
	div.appendChild(icona);
	cart.appendChild(div);
}
