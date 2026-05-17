let questions = [
    {
        "question": "Was ist JSON?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Ein Datenformat zum Austausch von Daten",
        "answer_3": "Ein Webbrowser",
        "answer_4": "Ein Betriebssystem",
        "right_answer": 2

    },
    {
        "question": "Was braucht man, um eine Website im Internet anzusehen?",
        "answer_1": "Einen Drucker",
        "answer_2": "Einen Webbrowser",
        "answer_3": "Eine Tastatur",
        "answer_4": "Eine Kamera",
        "right_answer": 2
    },
    {
        "question": "Was braucht man, um eine Website im Internet anzusehen?",
        "answer_1": "Einen Drucker",
        "answer_2": "Einen Webbrowser",
        "answer_3": "Eine Tastatur",
        "answer_4": "Eine Kamera",
        "right_answer": 2
    },
    {
        "question": "Welche Sprache wird hauptsächlich für die Struktur von Webseiten verwendet?",
        "answer_1": "Python",
        "answer_2": "HTML",
        "answer_3": "CSS",
        "answer_4": "SQL",
        "right_answer": 2
    },
    {
        "question": "Wofür wird CSS verwendet?",
        "answer_1": "Um Daten zu speichern",
        "answer_2": "Für das Design und Layout von Webseiten",
        "answer_3": "Als Programmiersprache für Server",
        "answer_4": "Zum Versenden von E-Mails",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Webserver?",
        "answer_1": "Ein Programm, das Webseiten speichert und an Nutzer ausliefert",
        "answer_2": "Ein Webbrowser",
        "answer_3": "Ein Drucker für Webseiten",
        "answer_4": "Ein Bildbearbeitungsprogramm",
        "right_answer": 1
    },
    {
        "question": "Welche Adresse gibt an, wo eine Webseite im Internet zu finden ist?",
        "answer_1": "URL",
        "answer_2": "Passwort",
        "answer_3": "Benutzername", 
        "right_answer": 1
    }
]
let currentQuestion = 1;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question =questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
     document.getElementById('answer_1').innerHTML = question['answer_1'];
      document.getElementById('answer_2').innerHTML = question['answer_2'];
       document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

}