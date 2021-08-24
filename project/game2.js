function Question(text, answer, solution){
    this.text = text;
    this.answer = answer;
    this.solution = solution;
}

function Quiz(question) {
    this.score = 0;
    this.questions = question;
    this.questionIndex = 0;
}

Quiz.prototype.correctAnswer = function(answer){
    return answer == this.question[this.questionIndex].answer;
}

// 퀴즈 객체 생성
var quiz = new Quiz(questions);

var questions = [
    new Question('2020 도쿄 올림픽에서 대한민국 최종 순위는 16위이다.', 'O', 'none'),
    new Question('도쿄 올림픽 한국 축구국가대표 팀의 감독은 김학범이다.','O','none'),
    new Question('도쿄 올림픽에서 여자 배구 대표팀은 준결승에서 콜롬비아에게 패배했다.', 'X','여자 배구팀은 준결승에서 브라질에게 패했다.'),
    new Question('도쿄올림픽 대한민국의 금메달 개수는 5개이다.', 'X' , '총 금메달의 개수는 6개이다.'),
    new Question('도쿄올림픽은 2021년 7월 24일에 개막하였다.', 'X' , '도쿄올림픽은 7월 23일에 개막하였다.'),
    new Question('전웅태 선수가 참가하여 동메달을 딴 근대 5종 경기는 에페 펜싱, 200m 자유수영, 장애물 승마, 300m 레이저 런으로 이루어진 스포츠이다.','O','none')
];


function update_quiz () {
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;
    
    question.innerHTML = '문제 ' + idx + ']  ' + questions[idx-1].text;
}

//정답처리

var btn = document.querySelectorAll('.btn'); // .btn 객체  입력 및 정답 확인 함수

function checkAnswer(i) {
    // 선택버튼(.btn) 이벤트 리스너
    btn[i].addEventListener('click', function () {
        var answer = btn[i].innerText;
        if (quiz.correctAnswer(answer)) {
            alert('정답입니다!');
            quiz.score++;
        } else {
            alert('틀렸습니다!');
        }
        // 다음 문제로 진행 및 결과 처리
        if (quiz.questionIndex < quiz.questions.length - 1) {
            quiz.questionIndex++;
            update_quiz();
        } else {
            result();
        } // 결과 화면
    });
} // end checkAnswer

function result() {
    var quiz_div = document.getElementById('quiz'); // 퀴즈 박스 컨테이너
    // 백분률 점수 계산
    var per = parseInt((quiz.score * 100) / quiz.questions.length);
    // 표시할 텍스트 정보와 변수
    var txt = '<h1>결과</h1><h2 id="score"> 당신의 점수: ' + quiz.score + '/' + quiz.questions.length +
            '<br><br>' + per + '점</h2>';
    quiz_div.innerHTML = txt; // 결과 텍스트 출력
    // 점수 별 결과 텍스트 출력
    if (per < 60) {
        txt += '<h2 style="color:red">좀더 분발하세요</h2>';
        quiz_div.innerHTML = txt;
    } else if (per >= 60 && per < 80) {
        txt += '<h2 style="color:red">무난한 점수네요</h2>';
        quiz_div.innerHTML = txt;
    } else if (per >= 80) {
        txt += '<h2 style="color:red">훌륭합니다</h2>'
        quiz_div.innerHTML = txt;
    }
} // end result

var quiz = new Quiz(questions);
// 문제 진행 정보 표시(현재 문제 번호/총 문항수) 
function progress() {
    var progress = document.getElementById('progress');
     progress.innerHTML = '문제 ' + (
        quiz.questionIndex + 1
    ) + ' / ' + quiz.questions.length;
}
var btn = document.querySelectorAll('.btn'); // 4개의 버튼 이벤트리스너 지정
for (var i = 0; i < btn.length; i++) {
    checkAnswer(i);
}
update_quiz();