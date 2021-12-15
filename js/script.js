var button = document.querySelector('.button');
var searchWord = document.querySelector('.searchWord');
var partOfSpeech = document.querySelector('.partOfSpeech');
var prs = document.querySelector('.prs');
var shortDef1 = document.querySelector('.shortDef1');
var shortDef2 = document.querySelector('.shortDef2');
var shortDef3 = document.querySelector('.shortDef3');
var variants = document.querySelector('.variants');
var synonyms = document.querySelector('.synonyms');



button.addEventListener('click', function(){
    // fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+searchWord.value+'')
    fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+searchWord.value+'?key=ca9f940d-d548-4bad-868e-c5ef6b430e5d')
    .then(response => response.json())

    // .then(result => console.log(result))

    .then(result => {
        var partOfSpeechResult = result [0]['fl'];
        var prsResult = result [0]['hwi']['prs'][0]['mw'];
        var shortDefResult1 = result [0]['shortdef'][0];
        var shortDefResult2 = result [0]['shortdef'][1];
        var shortDefResult3 = result [0]['shortdef'][2];
        var synonymsResult = result [0]['syns'][0]['pt'][0];
        

            prs.innerHTML ="Pronunciation: " + "/ " + prsResult + " /";
            shortDef1.innerHTML = "1. Short Definition: " + shortDefResult1;
            shortDef2.innerHTML = "2. Short Definition: " + shortDefResult2;
            shortDef3.innerHTML = "3. Short Definition: " + shortDefResult3;
            synonyms.innerHTML = "Synonyms: " + synonymsResult;
            partOfSpeech.innerHTML = "Part of Speech: " + partOfSpeechResult;
    })
        
})
