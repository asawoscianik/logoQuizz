$(document).ready(function () {
    var logo = ["ikony/android.png", "ikony/chrome.png", "ikony/firefox.png", "ikony/html5.png", "ikony/origin.png", "ikony/slack.png", "ikony/twitter.png", "ikony/windows.png", "ikony/bower.png", "ikony/github.png", "ikony/css3.png", "ikony/apple.png"];
    var answer = ["ANDROID", "CHROME", "FIREFOX", "HTML5", "ORIGIN", "SLACK", "TWITTER", "MICROSOFT", "BOWER", "GITHUB", "CSS3", "APPLE"];
    var letters = ["A", "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'V', 'X', 'Y', 'Z'];
    var RandomLetters = [];
    var numberek = 0;
    var counter = 0;

    $('.section3').hide();
    $('#button').hide();

    $(document).on('click', '#button1', function (e) {

        odpal();

        $('.section0').hide();

        $('.section2').show();

        $('.section1').show();

        var interval = setInterval(function () {
            counter++;

            if (numberek == 12) {

                $('#counter h3').append('Your score: ' + counter + ' seconds.');
                
                clearInterval(interval);

            }

        }, 1000);

    });

    $(document).on('click', '#button', function (e) {

        if (numberek < answer.length) {

            $('#button').hide();

            odpal(numberek);

        } else {

            $('.section1').hide();

            $('#pusty span').hide();

            $('#litera span').hide();

            $('#button button').hide();

            $('.section2').hide();

            $('.section3').show();

        }

    });

    $(document).on('click', '#button2', function (e) {

        numberek = 0;

        $('.section3').hide();

        $('.section0').show();

    });

    function odpal() {

        //----------------------------------------------------------------------------------
        //											wszystkie loga
        //----------------------------------------------------------------------------------

        if (numberek < answer.length) {

            var center = 48 - ((4 * (answer[numberek].length)) / 2);

            $('.center').css({
                'position': 'absolute',
                'margin-left': center + '%'
            });

        }

        function getLogo() {

            var theLogo = logo;

            for (var i = 0; i < theLogo.length; i++) {

                return theLogo[i];
            }

        }

        $('img[src="' + logo[11] + '"]').remove();

        $('img[src="' + logo[numberek - 1] + '"]').remove();

        $('#obrazki').append("<img src='" + logo[numberek] + "' />");

        getLogo();

        //------------------------------------------------------------------------------------ 
        //                                  	wszystkie odpowiedzi iteracja
        //------------------------------------------------------------------------------------

        function getAnswer() {

            var theAnswer = answer;

            var splited = theAnswer[numberek].split('');

            console.log(splited);

            if (numberek > 0) {

                for (var i = 0; i < answer[numberek - 1].length; i++) {
                    $('#pusty span' + ' ').remove();
                }

            }

            for (var i = 0; i < answer[numberek].length; i++) {
                $('#pusty').append('<span>');
            }
        }

        getAnswer();

        //-----------------------------------------------------------------------------------------
        //											wszystkie litery
        //---------------------------------------------------------------------------------------    
        function getLetter() {

            var theLetter = letters;

            for (var i = 0; i < theLetter.length; i++) {

                return theLetter;
            }
        }

        //--------------------------------------------------------------------------------------- 
        //                         		 Losowe litery z literami z answer
        //--------------------------------------------------------------------------------------
        var newArr = [];

        function LosoweLitery() {

            var theAnswer = answer[numberek];

            for (var i = 0; i < theAnswer.length; i++) {

                var splited = theAnswer[i].split('');

                for (var j = 0; j < splited.length; j++) {


                    newArr.push(splited[j]);
                }
            }

            for (var i = 0; i < 20 - answer[numberek].length; i++) {

                var randomIndex = Math.floor(Math.random() * letters.length);

                var randomLetter = letters[randomIndex];

                newArr.push(randomLetter);

            }

            return newArr;

        }

        LosoweLitery();

        //-------------------------------------------------------------------------------
        //                       LOSOWE LITERY WYMIESZANE
        //-------------------------------------------------------------------------------

        var shuffleArr = []

        function shuffleArray(array) {

            shuffleArr = newArr;

            for (var i = shuffleArr.length - 1; i > 0; i--) {

                var j = Math.floor(Math.random() * (i + 1));

                var temp = shuffleArr[i];

                shuffleArr[i] = shuffleArr[j]

                shuffleArr[j] = temp;

            }

            if (numberek >= 0) {

                $('#litera span').remove();

                $('#litery span').remove();

            }

            for (var i = 0; i < shuffleArr.length; i++) {

                $('#litery').append('<span>' + shuffleArr[i] + '');

            }

            return shuffleArr;

        }

        shuffleArray()

        //--------------------------------------------------------------------------------
        //                          Znikanie liter
        //--------------------------------------------------------------------------------

        var nowyarr = [];

        var arrwynik = [];

        $(document).on('click', '#litery span', function (e) {

            if (nowyarr.length < answer[numberek].length) {

                nowyarr.push(this.innerText);

                arrwynik = nowyarr.join('');

                $('#litera').append(this);

                $('#litera span').off();

                if (arrwynik == answer[numberek]) {

                    $('#button button').css("display", "block");

                    numberek++;

                    $('#button').show(600);

                }

            }

        });

        $(document).on('click', '#litera span', function (e) {

            nowyarr.pop();

            $('#litery').append(this);

        });

    }

});
