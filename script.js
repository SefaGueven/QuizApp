let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('assets/Sound/Success.mp3');
let AUDIO_FAIL = new Audio('assets/Sound/Wrong.mp3');

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}
function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        showNextQuestion();
    }
}
function gameIsOver(){
   return currentQuestion >= questions.length;
}
function showEndScreen() {
    // Show End Screen 
    document.getElementById('endScreen').style = 'align-items: center;';
    document.getElementById('questionBody').style = "display: none";
    document.getElementById("all-questions-end").innerHTML = questions.length;
    document.getElementById('amount-of-right-question').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'assets/brain_result.png';
    document.getElementById('header-image').style.cssText = "width: 128px; display:block; margin:0 auto;";
}
function showNextQuestion() {

    let question = questions[currentQuestion];
    document.getElementById('question-counter').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress_bar').innerHTML = `${percent}%`;
    document.getElementById('progress_bar').style = `width: ${percent}%;`;
}
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);               //slice(-1)=> Gibt das letzte Element – egal ob Array oder String
    let idOfRightAnswer = `answer_${question['right_answer']}`;     //Diese Zeile baut dynamisch eine ID zusammen, um die richtige Antwort im HTML zu finden. Das ist ein Template String (mit ` statt " ") Vorteil: Du kannst Variablen direkt einbauen (${...})

    if (selectedQuestionNumber == question['right_answer']) {       //Ist die ausgewählte Antwort gleich der richtigen Antwort?
        document.getElementById(selection).parentNode.classList.add('bg-success'); // mit dem befehl"parentNode" zu Eltern-Element gehen. Wird ausgeführt, wenn die Antwort stimmt.                   
        rightQuestions++;                                          // Mit dieser angabe zählen wir die richtigen antworten.
        AUDIO_SUCCESS.play();
    }
    else {                                                          // Wird ausgeführt, wenn die Antwort falsch ist.
        AUDIO_FAIL.play();
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');    // richtige wird dan hier auch angezeigt. 
        // Button für Nächste Frage wird hier aktiviert.
    }
    document.getElementById('next-button').disabled = false;
}
function nextQuestion() {                                                          //Funktion für Nächste frage aufrufen.
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();
}
function resetAnswerButton() {
    for (let i = 1; i <= 4; i++) {                                              // "<= " solange i kleiner oder gleich 4 ist
        let aw = document.getElementById(`answer_${i}`).parentNode;            // "`answer_${i}`"<-- Template String  , hollt automatisch alle Antwort-Elemente.
        aw.classList.remove('bg-danger', 'bg-success');
    }
}
function restartGame() {
    document.getElementById('header-image').src = 'assets/img/Linear.jpg';
    document.getElementById('questionBody').style = "";//questionBody wieder anzeigen
    document.getElementById('endScreen').style = "display: none"; // endScreen ausblenden
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}



