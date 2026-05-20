let sectionsFormulaire = document.getElementsByTagName("section");

function suivant() {
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

