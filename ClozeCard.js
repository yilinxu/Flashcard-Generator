function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		if(text.indexOf(cloze)!==-1){
			this.cloze = cloze;
			this.fullText = text;
			this.partialText = this.partText();
		}else{
			throw err;
		}		
	}else{
		return new ClozeCard(text, cloze);
	}
};

ClozeCard.prototype.partText = function(){
		var clozeArray = this.cloze.split(" ");
		var textArray = this.fullText.split(" ");
		var firstIndex = textArray.indexOf(clozeArray[0]);
		var lastIndex = textArray.indexOf(clozeArray[clozeArray.length-1]);
		var displayArray = textArray.slice(0,firstIndex).concat("....").concat(textArray.slice(lastIndex+1));
		return displayArray.join(" ");
};

module.exports = ClozeCard;