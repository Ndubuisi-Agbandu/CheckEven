let inputAnEvenNumber = (userInput) => {
  if (userInput % 2 == 0 && userInput > 1) {
	let proof = userInput / 2;
	console.log(proof);
  } else {alert("Please input an even number")}
}
inputAnEvenNumber(parseInt(prompt("Input an even number that's greater than 1")));
