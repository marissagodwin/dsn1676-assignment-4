var blueberries = {
    commonName: "Blueberries",
    name: "Vaccinium corymbosum",
    growsOnShrub: true,
    energy: "240",
    carbohydrates: "14.49",
    protein: "0.74"
};

var grapes = {
    commonName: "Grapes",
    name: "Vitis vinifera",
    growsOnShrub: false,
    energy: "288",
    carbohydrates: "18.1",
    protein: "0.72"
};

var redcurrant = {
    commonName: "Red currants",
    name: "Ribes rubrum",
    growsOnShrub: true,
    energy: "234",
    carbohydrates: "13.8",
    protein: "1.4"
};


var berries = [blueberries, grapes, redcurrant];
console.log(berries[1].age);

berries.forEach(function (item) {
    
    document.write("<h2>" + item.commonName + "</h2>");
    
    document.write("<dl>");
    document.write("<dt>Scientific name:</dt>");
    document.write("<dd>" + item.name + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Does it grow on shrubs?</dt>");
    document.write("<dd>" + item.growsOnShrub + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Energy in kJ</dt>");
    document.write("<dd>" + item.energy + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Carbohydrates in grams</dt>");
    document.write("<dd>" + item.carbohydrates + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Protein in grams</dt>");
    document.write("<dd>" + item.protein + "</dd>");
    document.write("</dl>");
});

var writeBerries = function (allBerries) {
    
  allBerries.forEach(function (item) {
    document.write("<h2>" + item.commonName + "</h2>");
    document.write("<dl>");
    document.write("<dt>Scientific name:</dt>");
    document.write("<dd>" + item.name + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Does it grow on shrubs?</dt>");
    document.write("<dd>" + item.growsOnShrub + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Energy in kJ</dt>");
    document.write("<dd>" + item.energy + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Carbohydrates in grams</dt>");
    document.write("<dd>" + item.carbohydrates + "</dd>");
    document.write("</dl>");
    
    document.write("<dl>");
    document.write("<dt>Protein in grams</dt>");
    document.write("<dd>" + item.protein + "</dd>");
    document.write("</dl>");
 });  
};

writeBerries( [blueberries, grapes, redcurrant] );
writeBerries( [blueberries, grapes, redcurrant] );


