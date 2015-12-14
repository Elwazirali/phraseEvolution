
var MainController = function($scope) {
    
    var isPunctuation = function(character)
    {
      var puctuations = '`~!@#$%^&*()_+{}|:"<>?-=[]\;\'.\/,1234567890';
      var punctuationArray = puctuations.split('');
      console.log(punctuationArray);
      for(var i=0; i<punctuationArray.length; i++)
      {
        if(punctuationArray[i]===character)
        {
          return true;
        }
        
      }
      return false;
    };
    
    
    var final;
    var generateEvolution = function(outcome){
    var letters = ['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r','s',
    't','u',' ','v','w','x','y','z'];
    var sentence = $scope.outcome;
    sentence = sentence.toLowerCase();
    var evolving = [];
    var tries = [];
    var i = 0;
    
    window.scrollBy(0, 100);
    
    for(var i = 0; i<sentence.length; i++)
    {
        evolving.push(letters[Math.round(Math.random()*25)]);
    }
    
    for(var j=0; j<sentence.length; j++)
    {
      if(isPunctuation(sentence[j])==true)
            {
              evolving[j]=sentence[j];

            }
    }
    
    for(var i=0; i<sentence.length; i++)
    {

        while(evolving[i] !== sentence[i])
        {
           for(g=i; g<sentence.length; g++)
            {
              if(sentence[g]!==evolving[g])
              evolving[g] = letters[Math.round(Math.random()*26)];
            }
          
            var randomLetter = Math.round(Math.random()*26);
            evolving [i] = letters[randomLetter];
            if (typeof(evolving[i]) === 'undefined') {
                evolving[i]= letters[Math.round(Math.random()*26)];
            }
            
            //if(evolving[i]===)
            var product = evolving.join("");
            product.replace(/,/g,'');
            
            tries.push(product)
            
             final=tries.join(" / ");

        }
    }
    return final;
  }
  
  var obj = {creature:null, cels:null, hello2:null, fehr:null}
  

  var displaying = function(){
    
        obj.creature =  generateEvolution();
       
  };
  
  var clear = function(){
      
      obj.creature = ' ';
    
  }
  
  $scope.clear = clear;
  $scope.displaying = displaying;
  $scope.obj = obj;

};


