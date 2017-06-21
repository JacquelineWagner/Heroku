//  
//Aufgabe: 9
//Name: Jacqueline Wagner
//Matrikel: 254786
//Datum: 04.06.2017
//    
//
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert. Teile der Aufgabe zusammen mit Jana und Selina erstellt*/


namespace Form {

    window.addEventListener("load", init);

    //     Arra    
    let eissorten: string[] = ["Vanille", "Schokolade", "Himbeere", "Erdbeere", "Nuss",
        "Zitrone"];

    let toppings: string[] = ["Sahne", "Schokosauce", "Karamelsauce", "Streusel",
        "Fruechte-Mix"];

    let bestellung: string[] = [];

    //    Preise
    let eissortenPrice: number = 1;
    let toppingPrice: number = 0.50;




    let inputsEissorten: HTMLInputElement[] = [];
    let inputsToppings: HTMLInputElement[] = [];
    let fieldsetTopping: HTMLElement;
    let fieldsetEissorte: HTMLElement;




    function init(_event: Event): void {

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        let button: HTMLElement = document.getElementById("button");


        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", Bestelluebersicht);
            fieldset.addEventListener("change", showSum);
            button.addEventListener("click", clickButton);
        }

        fieldsetEissorte = document.getElementById("Eissorten");
        fieldsetTopping = document.getElementById("toppings");







        //        Eissorten
        for (let i: number = 0; i < eissorten.length; i++) {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");


            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            label.innerText = eissorten[i];
            label.appendChild(input);
            inputsEissorten.push(input);
            fieldsetEissorte.appendChild(label);

            input.className = "stepper";

            console.log(eissorten[i]);

        }

        //        Toppings
        for (let i: number = 0; i < toppings.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");


            input.setAttribute("type", "checkbox");
            label.innerText = toppings[i];
            label.appendChild(input);
            inputsToppings.push(input);
            fieldsetTopping.appendChild(label);

            input.className = "checkbox";

            console.log(toppings[i]);

        }
    }



    function Bestelluebersicht(_event: Event): void {

        console.log(_event);
        let bestellung: HTMLElement = document.getElementById("bestellbox");
        bestellung.innerText = "";

        for (let i: number = 0; i < inputsEissorten.length; i++) {
            if (parseInt(inputsEissorten[i].value) > 0) {
                bestellung.innerText += eissorten[i] + " " + ": " + (parseInt(inputsEissorten[i].value) * 1) + "\n";
            }
        }

        for (let i: number = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked) {
                bestellung.innerText += toppings[i] + " " + "\n";
            }
        }
    }



    function showSum(_event: Event): void {
        let summe: number = 0;

        for (let i: number = 0; i < inputsEissorten.length; i++) {
            summe += parseInt(inputsEissorten[i].value);
        }

        for (let i: number = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked)
                summe += 0.5;
        }
        console.log(summe);

        document.getElementById("gesamtsumme").innerText = summe.toString() + " €";

    }
    function clickButton(_event: Event): void {

        let proof: HTMLInputElement[] = [];
        for (let i: number = 0; i < 5; i++) {
            let inputs: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("proof")[i];
            proof.push(inputs);
            console.log(inputs);
        }

        for (let i: number = 0; i < proof.length; i++) {
            console.log(proof.length);
            if (proof[i].validity.valid == false) {
                alert("Die Eingaben sind nicht korrekt. Bitte erneut ueberpruefen!");
                location.reload();
            }
            else {
                alert("Vielen Dank fuer Ihre Bestellung! Bis zum naechsten Mal");
                location.reload();
            }
        }
    }

}













