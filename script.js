let prenom = ["Sophia", "AbdouLaye", "Mohamed", "Saad", "Rajae", "Taha", "Rayan"];

let nom = ["Toto", "Salot", "Blader", "Zed", "Akali", "charlie", "Alpha"];

const nomComplet = () => {
    let nomAleatoire = prenom[Math.floor(Math.random() * prenom.length)] + ' ' + nom[Math.floor(Math.random() * nom.length)];
    return nomAleatoire;
}

const quantite = () => {
    let qty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if (qty > 10) {
        document.querySelector('.nameList').innerHTML = 'Maximum de nom générer est de 10';
    } else {
        for (let i = 0; i < qty; i++) {
            
            document.querySelector('.nameList').innerHTML += nomComplet() + '<br>'
            
        }
    }
}