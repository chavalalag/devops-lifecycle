
var i = 0;
var correctCount = 0 ;

generate(0);

function generate(index) {
    document.getElementById("question").innerHTML = jQuiz[index].q;
    document.getElementById("optt1").innerHTML = jQuiz[index].opt1;
    document.getElementById("optt2").innerHTML = jQuiz[index].opt2;
    document.getElementById("optt3").innerHTML = jQuiz[index].opt3;
}

function checkAnswer() {
    if (document.getElementById("opt1").checked && jQuiz[i].opt1 == jQuiz[i].answer) {
       correctCount++;
    }
    if (document.getElementById("opt2").checked && jQuiz[i].opt2 == jQuiz[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt3").checked && jQuiz[i].opt3 == jQuiz[i].answer) {
        correctCount++;
    }
    i++;
    if(jQuiz.length-1 < i){
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your total score is : "+correctCount+"/5*****</div>");
        document.write("<div style='color:#ffffff;font-size:16pt;text-align:left;'>Review Answers</div>");
        document.write("<div style='color:#ffffff;font-size:14pt;text-align:left;'>Q1. Cascading Style Sheets</div>");
        document.write("<div style='color:#ffffff;font-size:14pt;text-align:left;'>Q2. All the above</div>");
        document.write("<div style='color:#ffffff;font-size:14pt;text-align:left;'>Q3. Hyper Text Markup Language</div>");
        document.write("<div style='color:#ffffff;font-size:14pt;text-align:left;'>Q4. P</div>");
        document.write("<div style='color:#ffffff;font-size:14pt;text-align:left;'>Q5. All the above</div>");
        document.write("</body>");
    }

    generate(i);
}