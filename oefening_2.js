function Text(str) {
  this.textFile = str;
}

Text.prototype.left = function (number) {
  return this.firstLeft = this.textFile.slice(0, number);
};

Text.prototype.right = function (number) {
  console.log(this.textFile.slice(-1, number));
};

Text.prototype.charCount = function (){
   return this.totalChar = this.textFile.length

}

Text.prototype.wordCount = function (){
     this.wordCount = this.textFile.split(' ')
        return this.wordCount= this.wordCount.filter(word => word !== '').length
    }


Text.prototype.vowelCount = function (){
     this.vowels = 0
    for (let i = 0; i <= this.textFile.length - 1; i++) {
        if (this.textFile.charAt(i) == "a" || this.textFile.charAt(i) == "e" || this.textFile.charAt(i) == "i" || this.textFile.charAt(i) == "o" || this.textFile.charAt(i) == "u") {
            this.vowels += 1;
    }
}
return this.vowels;
}

Text.prototype.capitalsCount = function (){
     this.capitals = this.textFile.length - this.textFile.replace(/[A-Z]/g,'').length;
    return this.capitals
}


Text.prototype.append = function (str){
     return  this.textFile = this.textFile.concat( " " + str)
}

Text.prototype.prepend = function (str){
    return  this.textFile = str + " " + this.textFile
}





const text1 = new Text("hjfeadudsqqjskDSDSfhj kdsqhfhdskjfdsk jfhkjdshjkkjfjf");
text1.prepend("mehdi");
console.log(text1)
;
