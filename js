$("body").html('<textarea class="itext"></textarea><br/><text class="otext"></text><br/><button class="convert">Convert!!!</button>');

    $(document).ready(function(){
        var textandmorse = [
        {"letter":'A', 'morse':".-"},
        {"letter":'B', 'morse':"-..."},
        {"letter":'C', 'morse':"-.-."},
        {"letter":'D', 'morse':"-.."},
        {"letter":'E', 'morse':"."},
        {"letter":'F', 'morse':"..-."},
        {"letter":'G', 'morse':"--."},
        {"letter":'H', 'morse':"...."},
        {"letter":'I', 'morse':".."},
        {"letter":'J', 'morse':".---"},
        {"letter":'K', 'morse':"-.-"},
        {"letter":'L', 'morse':".-.."},
        {"letter":'M', 'morse':"--"},
        {"letter":'N', 'morse':"-."},
        {"letter":'O', 'morse':"---"},
        {"letter":'P', 'morse':".--."},
        {"letter":'Q', 'morse':"--.-"},
        {"letter":'R', 'morse':".-."},
        {"letter":'S', 'morse':"..."},
        {"letter":'T', 'morse':"-"},
        {"letter":'U', 'morse':"..-"},
        {"letter":'V', 'morse':"...-"},
        {"letter":'W', 'morse':".--"},
        {"letter":'X', 'morse':"-..-"},
        {"letter":'Y', 'morse':"-.--"},
        {"letter":'Z', 'morse':"--.."},
        {"letter":'1', 'morse':".----"},
        {"letter":'2', 'morse':"..---"},
        {"letter":'3', 'morse':"...--"},
        {"letter":'4', 'morse':"....-"},
        {"letter":'5', 'morse':"....."},
        {"letter":'6', 'morse':"-...."},
        {"letter":'7', 'morse':"--..."},
        {"letter":'8', 'morse':"---.."},
        {"letter":'9', 'morse':"----."},
        {"letter":'0', 'morse':"-----"},
        {"letter":'.', 'morse':".-.-.-"},
        {"letter":',', 'morse':"--..--"},
        {"letter":':', 'morse':"---..."},
        {"letter":'?', 'morse':"..--.."},
        {"letter":'\'', 'morse':".----."},
        {"letter":'-', 'morse':"-....-"},
        {"letter":'/', 'morse':"-..-."},
        {"letter":'(', 'morse':"-.--.-"},
        {"letter":')', 'morse':"-.--.-"},
        {"letter":'"', 'morse':".-..-."},
        {"letter":'@', 'morse':".--.-."},
        {"letter":'=', 'morse':"-...-"},
        {"letter":' ', 'morse':"/"}
        ];
        //var morse2text = [];
        //var text2morse = [];
        /*for (i = 0; i < textandmorse.length; i++) {
            console.log("letter"+textandmorse[i].letter+" morse"+textandmorse[i].morse);
        }*/

        // Replace Function
        String.prototype.replaceArray = function(find, replace) {
            var replaceString = this;
            var regex;
            for (var i = 0; i < find.length; i++) {
                regex = new RegExp(find[i], "g");
                replaceString = replaceString.replace(regex, replace[i]);
            }
            return replaceString;
        };

        // Declare IO Variable
        var itext = $(".itext");
        var otext = $(".otext");
        var brun = $(".convert");

        // Function Text And Morse
        function tam(from, metode, log, type) {
            for (i = 0; i < textandmorse.length; i++) {
                var letter = textandmorse[i].letter;
                var morse = textandmorse[i].morse;
            }

            if (metode === 1) {
                if (type === "t2m") {
                    from.replace(letter, morse);
                } else if (type === "m2t") {
                    from.replace(morse, letter);
                }
            } else if (metode === 2) {
                if (type === "t2m") {
                    from.replaceArray(letter, morse);
                } else if (type === "m2t") {
                    from.replaceArray(morse, letter);
                }
            }

            if (log === true) {
                console.log(letter + "  ~  " + morse);
            } else {
                console.log("It's Worked ???");
            }
        }

        // Run
        brun.click(function() {
            var res = tam(itext.val(), 1, true, "t2m");
            otext.append(res);
        });

    });
