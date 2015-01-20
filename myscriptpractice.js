console.log("hello")

var counter=100

while(counter) {
	if(counter%15==0){
		console.log("fizzbuzz")
		counter=counter-1
	} else {
		if(counter%3==0){
			console.log("fizz")
			counter=counter-1
		} else {
			if(counter%5==0) {
				console.log("buzz")
				counter=counter-1
			} else {
				console.log("number " +counter)
				counter=counter-1
			}
		}
	}
}

// while(counter) {
// 	if (counter==2) {
// 		console.log('heebe')
// 		counter=counter-1
// 	} else{
// 	console.log("fizzbuzz")
// 	counter=counter-1
// 	}
// }

// for(var counter=100;counter;counter=counter-1) {
// 	if(counter%15==0){
// 		console.log("fizzbuzz")
// 	} else {
// 		if(counter%3==0){
// 			console.log("fizz")
// 		} else {
// 			if(counter%5==0) {
// 				console.log("buzz")
// 			} else {
// 				console.log("number " +counter)
// 			}
// 		}
// 	}
// }

// for (var counter=100; counter; counter = counter -1) {

// 	if (counter % 15==0) {
//         console.log("fizzbuzz")
//     }

//     else if (counter % 5==0) {
//         console.log("buzz")
//     }

//     else if (counter % 3==0) {
//         console.log("fizz")
//     } else{
//     console.log(counter)
// 	}
// }











