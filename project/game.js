

function Question(text, choice, answer, solution) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
    this.solution = solution;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    // 점수 질문 질문 순서
}
// 정답 확인 메소드
Quiz.prototype.correctAnswer = function (answer) {
    return answer == this
        .questions[this.questionIndex]
        .answer;
};
// 퀴즈 객체 생성
var quiz = new Quiz(questions);

var questions = [
    new Question('2020 도쿄 올림픽에서 대한민국 최종 순위는 16위이다.', [
        'O', 'X',
    ], 'O','옳은 문항입니다.'),
    new Question('도쿄 올림픽 한국 축구국가대표 팀의 감독은 김학범이다.', [
        'O', 'X',
    ], 'O','옳은 문항입니다.'),
    new Question('도쿄 올림픽에서 여자 배구 대표팀은 준결승에서 콜롬비아에게 패배했다.', [
        'O', 'X',
    ], 'X','여자 배구팀은 준결승에서 브라질에게 패했다.'),
    new Question('도쿄올림픽 대한민국의 금메달 개수는 5개이다.', [
        'O', 'X',
    ], 'X', '총 금메달의 개수는 6개이다.'),
    new Question('도쿄올림픽은 2021년 7월 24일에 개막하였다.', [
        'O', 'X',
    ], 'X','도쿄올림픽은 7월 23일에 개막하였다.'),
    new Question('양궁 국가대표 안산은 도쿄올림픽 대한민국 메달리스트 중 최연소이다.', [
        'O', 'X',
    ], 'X','안산 (20세), 양궁 남자 국가대표 김제덕 (17세)'),
    new Question('남자 사브르 단체 선수 명단은 구본길, 김정환, 오상욱, 김우진이다.', [
        'O', 'X',
    ], 'X','김우진은 양궁선수, 답: (구본길, 김정환, 오상욱, 김준호)'),
    new Question('도쿄올림픽에서 우리나라는 양궁 종목에서만 4개의 메달을 획득하였다.', [
        'O', 'X',
    ], 'O','옳은 문항입니다.')];
    new Question('우리나라는 도쿄올림픽에서 태권도 종목에서 메달을 얻지 못하였다.', [
        'O', 'X',
    ], 'X','남자 태권도 - 장준(동), 인교돈 (동), 여자 태권도 - 이다빈(은)'),
    new Question('다음 올림픽 개최지는 파리로 2024년 예정되어있다.', [
        'O', 'X',
    ], 'O','옳은 문항입니다.')

function update_quiz() {
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;
    var choice = document.querySelectorAll('.btn');
    var _correctcheck = document.getElementById('correctcheck');
    var _solution = document.getElementById('solution');
    var _next_btn = document.getElementById('next_btn');
    var _image_zone = document.getElementsByClassName('image_zone');
    // 문제 출력
    question.innerHTML = '문제' + idx + '] ' + quiz
        .questions[quiz.questionIndex]
        .text;

    // 부가항목 지우기
    _correctcheck.innerHTML = "";
    _solution.innerHTML = "";
    
    
    //next 버튼 비활성화
    _next_btn.disabled = "disabled";

    // 선택 항목 출력
    for (var i = 0; i < 2; i++) {
        choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
        choice.disabled = false;
    }

    //이미지 지우기
    for (var i = 0; i<2; i++) {
        _image_zone[i].style.backgroundImage = '';
    }
    progress();
}


var btn = document.querySelectorAll('.btn'); // .btn 객체  입력 및 정답 확인 함수
function checkAnswer(i) {
// 선택버튼(.btn) 이벤트 리스너
btn[i].addEventListener('click', function () {
    var answer = btn[i].innerText;
    var _correctcheck = document.getElementById('correctcheck');
    var _solution = document.getElementById('solution');
    var _next_btn = document.getElementById('next_btn');
    
    if (quiz.correctAnswer(answer)) {
        _correctcheck.innerHTML = "정답입니다."
        _correctcheck.setAttribute('class','correct');
        _solution.innerHTML = quiz.questions[quiz.questionIndex].solution;
        quiz.score++;
        _next_btn.disabled = false;
        correct();
    } else {
        _correctcheck.innerHTML = "틀렸습니다.";
        _correctcheck.setAttribute('class','incorrect');
        _solution.innerHTML = quiz.questions[quiz.questionIndex].solution;
        _next_btn.disabled = false;
        incorrect();
    }
    

});
} // end checkAnswer

var next_btn = document.getElementById('next_btn');
next_btn.addEventListener('click', function() {
    if (quiz.questionIndex < quiz.questions.length - 1) {
        quiz.questionIndex++;
        update_quiz();
    } else {
        result();
    } // 결과 화면
})

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
    txt += '<h2 style="color:red">파리올림픽을 기대하며</h2>';
    quiz_div.innerHTML = txt;
} else if (per >= 60 && per < 80) {
    txt += '<h2 style="color:red">무난한 점수네요</h2>';
    quiz_div.innerHTML = txt;
} else if (per >= 80) {
    txt += '<h2 style="color:red">당신은 올림픽 애청자</h2>'
    quiz_div.innerHTML = txt;
}
} // end result

// 퀴즈 객체 생성
var quiz = new Quiz(questions);
// 문제 진행 정보 표시(현재 문제 번호/총 문항수)
function progress() {
    var progress = document.getElementById('progress');
    progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + ' / ' + quiz.questions.length;
    }
    var btn = document.querySelectorAll('.btn');
    for (var i = 0; i < btn.length; i++) {
        checkAnswer(i);
}

function correct () {
    var _image_zone = document.getElementsByClassName('image_zone');
    var i = randomNum(0,1);
    var j = randomNum(0,3);
    var yes_urls = ["url('/project/img/yesman.png')","url('/project/img/yesman2.png')","url('/project/img/yesman3.png')","url('/project/img/yesman4.png')"];
    var url = yes_urls[j];
    _image_zone[i].style.backgroundImage = url;
}

function incorrect() {
    var _image_zone = document.getElementsByClassName('image_zone');
    var i = randomNum(0,1);
    var j = randomNum(0,3);
    var no_urls = ["url('/project/img/noman.png')","url('/project/img/noman2.png')","url('/project/img/noman3.png')","url('/project/img/noman4.png')"];
    var url = no_urls[j];
    _image_zone[i].style.backgroundImage = url;
}
update_quiz();
// .btn 객체

function randomNum(min, max){
     var randNum = Math.floor(Math.random()*(max-min+1)) + min; 
     return randNum; 
};


