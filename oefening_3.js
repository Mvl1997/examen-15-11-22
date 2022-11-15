function Schilderij(name, size, cost) {
  this.name = name;
  this.size = size;
  this.cost = cost;
}

function Schilder(voorNaam, achterNaam, stijl, schilderijen) {
  this.voorNaam = voorNaam;
  this.achterNaam = achterNaam;
  this.stijl = stijl;
  this.schilderijen = [];
}

Schilder.prototype.addPainting = function (painting) {
  this.schilderijen.push(painting);
}; 

Schilder.prototype.printHtml = function (){
    console.log(`<h1>${this.voorNaam}${this.achterNaam}</h1>\n <h2>${this.stijl}</h2>\n<ul>\n<il>\n${this.schilderijen}\n</il>\n</ul>\n`)
    
}



const painting1 = new Schilderij( "de lach", "50X60", 456625565)
const schilder1 = new Schilder("bert","dirk","empresionisme")


