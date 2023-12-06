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
			nuovaCard.classList.add("col-4", "col-md-3");
			nuovaCard.innerHTML = `
            
            <div class="card">
            <img src="${copertina}" class="card-img-top" alt="copertina ${title}" />
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <span class="text-muted"">Prezzo: ${price}€</span>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                <a href="#" class="btn btn-success">Compra ora a ${price}€</a>
                <a href="#" class="btn btn-danger">Scarta</a>
            </div>
        </div>`;
			mainContainer.appendChild(nuovaCard);
		});
		const scartaButtons = document.querySelectorAll(".btn-danger");
		// --------------------------------------
		scartaButtons.forEach((element) => {
			element.addEventListener("click", () => {
				element.parentElement.parentElement.parentElement.remove();
			});
		});
		// --------------------------------------
		const buyButtons = document.querySelectorAll(".btn-success");
		buyButtons.forEach((element) => {
			element.addEventListener("click", compra);
		});
		// --------------------------------------
	})
	.catch((error) => console.log(error));

function compra() {
	console.log("ciao");
}
