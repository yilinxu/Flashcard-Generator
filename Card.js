// BasicCard Constructor
function BasicCard(question, answer){
	if (this instanceof BasicCard){
		this.front = question;
		this.back = answer;
	}else{
		return new BasicCard(question, answer);
	}

};
// Example of BasicCard object
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log("Front is: " + '"' + firstPresident.front + '"');
console.log("Back is: " + '"' +firstPresident.back + '"');

// ClozeCard constructor
function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		this.cloze = cloze;
		this.fullText = text;
		this.partialText = this.partText();
	}else{
		return new ClozeCard(text, cloze);
	}
	
};

ClozeCard.prototype.partText = function(){
	if (this.fullText.indexOf(this.cloze)!==-1){
		var clozeArray = this.cloze.split(" ");
		var textArray = this.fullText.split(" ");
		var firstIndex = textArray.indexOf(clozeArray[0]);
		var lastIndex = textArray.indexOf(clozeArray[clozeArray.length-1]);
		var displayArray = textArray.slice(0,firstIndex).concat("....").concat(textArray.slice(lastIndex+1));
		return displayArray.join(" ");
	}else{
		return null;
	}
};

ClozeCard.prototype.brokenCloze = function(){
	if(this.fullText.indexOf(this.cloze)===-1){
		return "Error: " + '"' +this.cloze+'"' + " doesn't appear in " + '"'+this.fullText+'"';
	}else{
		return '"' + this.cloze +'"' + " appears in " + '"'+this.fullText+'"';
	}
};

// Example of ClozeCard object
var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");
// Display the property of the ClozeCard example
console.log(firstPresidentCloze.brokenCloze());
console.log("The cloze of the ClozeCard is: " + '"' + firstPresidentCloze.cloze + '"', "\n"+ "The full Text of the ClozeCard is: " + 
	'"' + firstPresidentCloze.fullText + '"', "\n"+ "The partial text of the ClozeCard is: " + '"' + firstPresidentCloze.partialText+ '"');

// Store the ClozeCard in array
var clozeCards = [];
clozeCards.push(firstPresidentCloze);
// Display the arry
console.log("All the clozeCards are stored here: " + JSON.stringify(clozeCards, null, 2));
