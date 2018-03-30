//creation fonction Contact
var Contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    //renvoi de la description du contact

    description: function () {
        console.log("nom: " + this.nom + " prenom:" + this.prenom);
    }


};

var Contact_1 = Object.create(Contact);
Contact_1.init("LEVISSE", "Carole");
var Contact_2 = Object.create(Contact);
Contact_2.init("NELSON", "Mélodie");

Contact_1.description();
Contact_2.description();

//creation tableau contact
var Tableau_Contacts = [];
Tableau_Contacts.push(Contact_1);
Tableau_Contacts.push(Contact_2);

//mon programme

console.log("Bienvenue dans mon gestionnaire de contacts !!!");
var option;
while (option !== "0") {
    option = prompt("3 // OPTIONS DISPONIBLES :\n" + "1 / pour Lister les contacts \n" + "2 /  pour Ajouter un nouveau contact\n" + "0 /  pour Quitter le gestionnaire de contacts\n\n\n" + "VEUILLER SAISIR UNE OPTION SVP :");

    switch (option) {
        case "1":
            console.log("Voici la liste complète de tous les contacts !");
            for (var i = 0; i < Tableau_Contacts.length; i++) {

                Tableau_Contacts[i].description();

            }
            break;
    }
    switch (option) {
        case "2":
            var Nom = prompt("Saisir le NOM du nouveau contact :");
            var Prenom = prompt("Saisir le Prénom associé au NOM du nouveau contact");
            var New_contact = Object.create(Contact);
            New_contact.init(Nom, Prenom);
            Tableau_Contacts.push(New_contact);
            console.log("Voici le nouveau contact ajouté ajouté à la liste !");

            break;
    }
}
console.log("A bientot, vous venez de quitter le gestionnaire de contacts");
