/// 1 - Selecteurs
    let select = document.getElementById('choixFruit'),
        btnCalcul = document.getElementById('calculer'),
        inputPoids = document.getElementById('choixPoids'),
        divPrixKilo = document.getElementById('affichagePrixKilo'),
        divMessage = document.getElementById('divMessage');

/// 2 - Fonction

    //Fonction calculant le prix d'un fruit selon le poids indiqué
    function calcul(fruit,poids){

        let prixKg;

        //On utilise un switch pour definir un prix au kg pour chaque fruit
        switch(fruit){
            case 'Pommes' : prixKg = 3.74;break;
            case 'Poires' : prixKg = 4.15;break;
            case 'Cerises' : prixKg = 5.03;break;
            case 'Ananas' : prixKg = 4.58;break;
            case 'Kiwis' : prixKg = 6.25;break;
            case 'Pasteques' : prixKg = 2.74;break;
            case 'Bananes' : prixKg = 3.92;break;
            default : return "Erreur, nous ne connaissons pas ce fruit";
        }
        //Version if/else
        // if(fruit == "Pommes" ){
        //     prixKg = 3.74;
        // } else if (fruit == "Poires"){
        //     prixKg = 4.15;
        // } else if (fruit == "Cerises"){
        //     prixKg = 5.03;
        // } else if (fruit == "Ananas"){
        //     prixKg = 4.58;
        // } else if (fruit == "Kiwis"){
        //     prixKg = 6.25;
        // } else if (fruit == "Pasteques"){
        //     prixKg = 2.74
        // } else if(fruit == "Bananes"){
        //     prixKg = 3.92;
        // } else {
        //     return "Erreur, nous ne connaissons pas ce fruit";
        // }

        //On effectue un controle sur le poids indiqué par l'utilisateur : Si ca n'est pas un nombre OU si c'est un nombre inferieur ou egal à 0 , on renverra un message d'erreur

        if(isNaN(poids) || poids <= 0){
            return "Erreur, le poids rentré n'est pas correct";
        }

        /*
            isNaN() = is Not a Number
            isNaN() renvoie true si la variable testée n'est pas un nombre
            isNaN("texte") => true
            isNaN(50) => false
        */

        //On calcule le prix final
        let prixFinal = poids*prixKg/1000;
            prixFinal = prixFinal.toFixed(2);
            //toFixed() permet de definir le nombre de décimales acceptées


        let message = `${poids} grammes de ${fruit} coutent ${prixFinal}€`;
        // let message = poids + " grammes de " + fruit + " coutent " + prixFinal+ "€";

        return message;
    }

    console.log(
        calcul('Kiwis',1000)
    );//1000 grammes de Kiwis coutent 6.25€


/// 3 - EventListener ///
    
    //A) Sur le bouton calculer
    btnCalcul.addEventListener('click',function(){
        //On recupere le fruit et le poid choisi par l'utilisateur
        let fruit = select.value,
            poids = inputPoids.value;
            // console.log(fruit);
            // console.log(poids);
        
            //On execute la fonction calcul avec le fruit et le poid recuperés
            let message = calcul(fruit,poids);

            //On affiche dans le message dans la divMessage
            divMessage.innerHTML = `<span>${message}</span>`;
    })

    //B) Sur la touche Entrée
    document.addEventListener('keydown',function(event){
        //Si la touche sur laquelle on appuye est la touche "Entrée"
        if(event.key == "Enter"){
           
            //On recupere le fruit et le poid choisi par l'utilisateur
            let fruit = select.value,
            poids = inputPoids.value;
            // console.log(fruit);
            // console.log(poids);
        
            //On execute la fonction calcul avec le fruit et le poid recuperés
            let message = calcul(fruit,poids);

            //On affiche dans le message dans la divMessage
            divMessage.innerHTML = `<span>${message}</span>`;
    }})




    //C) Sur les li
        //On selectionne tous les li 
        let listeLi = document.querySelectorAll('li');

        //On utilise forEach pour ajouter un eventListener à tous les li
        listeLi.forEach(li => {
            li.addEventListener('click',function(event){
                // console.log(event);
                // console.log(event.target);
                // console.log(event.target.innerHTML);

                /*
                    Event = informations relatives à l'evenement (type d'evenement , position de la souris sur la page,etc...)
                    Event.target = Parmi toutes ces informations, on va recuperer la cible (=target) c-a-d l'element sur lequel l'evenement a eu lieu c-a-d le li sur lequel on a cliqué
                */

                let li = event.target;
                let fruit = li.innerHTML;

                //On execute calcul() avec le fruit recuperé
                let message = calcul(fruit,1000);

                //On affiche le resultat
                divPrixKilo.innerHTML = `<span>${message}</span>`;
            })
        })







