let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);               //slice(-1)=> Gibt das letzte Element – egal ob Array oder String
    let idOfRightAnswer = `answer_${question['right_answer']}`;     //Diese Zeile baut dynamisch eine ID zusammen, um die richtige Antwort im HTML zu finden. Das ist ein Template String (mit ` statt " ") Vorteil: Du kannst Variablen direkt einbauen (${...})

    if (selectedQuestionNumber == question['right_answer']) {       //Ist die ausgewählte Antwort gleich der richtigen Antwort?
        console.log('Richtige Antwort');                            //Wird ausgeführt, wenn die Antwort stimmt.
        document.getElementById(selection).parentNode.classList.add('bg-success'); // mit dem befehl"parentNode" zu Eltern-Element gehen.                   
    }
    else                               // Wird ausgeführt, wenn die Antwort falsch ist.
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');    // richtige wird dan hier auch angezeigt. 
    document.getElementById('next-button').disabled = false;        // Button für Nächste Frage wird hier aktiviert.
}

function nextQuestion(){    //Funktion für Nächste frage aufrufen.
    currentQuestion++;
     showQuestion() ;
}