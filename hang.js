var list = [
		[ "food" ],
		[ "studentloans" ],
		[ "socialdrinking" ],
		[ "treatyoself" ],
];

var words = list[Math.floor(Math.random() * list.length)];
var n;
var wordH = [];


function spread() {
	
	for (var i = 0; i < words.length; i++) {
		
		wordH[i] = "_";
	}

	n = wordH.join(" ");

	document.getElementById("word").innerHTML = n;

}

// 	document.onkeyup = function(event) {

// 	var guess = event.key.toLowerCase();

// 		for(var i=0; i<words.length; i++) {

// 			if(words[i] === guess) {

// 				wordH[i] = guess;

// 				guess === W;
// 			}
			
// 		}
// 	document.getElementById("word").innerHTML = workH.join(" ");

// 	};

// };

var loss = 1;
var yay = 1;
var gl = 9;

function WinLossRules() {

		if ( guess === W ) {
			document.getElementById("win").innerHTML = yay++;
		}

		if ( guess !== W ) {
			document.getElementById("loss").innerHTML = loss++;
		}
		
		if (event.key !== ) {
			document.getElementById("loss").innerHTML = gl--;
		}

		if (gl === 0) {
			gl +=9;
		}
		
	}
};

			
		
	
		

	