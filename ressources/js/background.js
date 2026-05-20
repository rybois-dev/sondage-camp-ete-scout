// Génération dynamique des arbres
const forest = document.getElementById('forest');
const stars = document.getElementById('stars');

// Créer des arbres aléatoires
for (let i = 0; i < 30; i++) {
    const tree = document.createElement('div');
    tree.className = 'tree';

    // Position aléatoire
    const left = Math.random() * 100;
    tree.style.left = `${left}%`;

    // Hauteur aléatoire (entre 80px et 150px)
    const height = 80 + Math.random() * 70;
    tree.style.height = `${height}px`;

    // Animation de balancement avec durée aléatoire
    const duration = 5 + Math.random() * 10;
    tree.style.animationDuration = `${duration}s`;

    // Délai d'animation aléatoire
    const delay = Math.random() * 5;
    tree.style.animationDelay = `${delay}s`;

    forest.appendChild(tree);
}

// Créer des étoiles aléatoires
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Position aléatoire
    const left = Math.random() * 100;
    const top = Math.random() * 40;
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;

    // Taille aléatoire
    const size = 1 + Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Animation de clignotement avec durée aléatoire
    const duration = 2 + Math.random() * 4;
    star.style.animationDuration = `${duration}s`;

    // Délai d'animation aléatoire
    const delay = Math.random() * 10;
    star.style.animationDelay = `${delay}s`;

    stars.appendChild(star);
}

// Créer des nuages supplémentaires
const cloudContainer = document.querySelector('.scout-background');
for (let i = 0; i < 5; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';

    // Position aléatoire
    const left = Math.random() * 100;
    const top = 5 + Math.random() * 40;
    cloud.style.left = `${left}%`;
    cloud.style.top = `${top}%`;

    // Taille aléatoire
    const width = 50 + Math.random() * 100;
    const height = 20 + Math.random() * 30;
    cloud.style.width = `${width}px`;
    cloud.style.height = `${height}px`;

    // Animation avec durée et délai aléatoires
    const duration = 15 + Math.random() * 15;
    cloud.style.animationDuration = `${duration}s`;
    const delay = Math.random() * 10;
    cloud.style.animationDelay = `${delay}s`;

    cloudContainer.appendChild(cloud);
}
