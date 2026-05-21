let sectionsFormulaire = document.getElementsByTagName("section");

function suivant() {
    const clean = v => (v || '').toString().trim();

    const surname = clean(document.getElementById('surname_children').value);
    const name = clean(document.getElementById('name_children').value);

    const flashesContainer = document.getElementById('flashes-container');
    const existingError = flashesContainer.querySelector('.flashes-error');

        if (!surname || !name) {
        if (!existingError) {
            const errorSpan = document.createElement('span');
            errorSpan.className = 'flashes flashes-error';
            errorSpan.textContent = 'Veuillez saisir le nom prénom';
            flashesContainer.appendChild(errorSpan);
        }
        return;
    } else if (existingError) {
        flashesContainer.removeChild(existingError);
    }

    let i = 0;
    let trouve = 0;
    do {
        if (!sectionsFormulaire.item(i).classList.contains("cache")) {
            sectionsFormulaire.item(i).classList.add("cache");
            if ((i + 1 < sectionsFormulaire.length))
                sectionsFormulaire.item(i + 1).classList.remove("cache");
            trouve = 1;
        }
        i++;
    } while (i < sectionsFormulaire.length - 1 && trouve === 0);
}

function precedent() {
    let i = sectionsFormulaire.length - 1;
    let trouve = 0;
    do {
        if (!sectionsFormulaire.item(i).classList.contains("cache")) {
            sectionsFormulaire.item(i).classList.add("cache");
            if (i > 0) {
                sectionsFormulaire.item(i - 1).classList.remove("cache");
            }
            trouve = 1;
        }
        i--;
    } while (i > 0 && trouve === 0);
}

