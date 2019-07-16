/*f4cce747ad88957

https://api.ocr.space/parse/imageurl?apikey=f4cce747ad88957&url=https://irctclive.nlpcaptcha.in/index.php/media/getTC/17A8_L3BYOXo1clV0aGRpN0FHM2FZdUIzQnVIdGtQVTYwRHRJcHhuU1Y0RlhVQXZFR2lWb1FTbXhodjE5WUVkaEFsTzhqbkJMRUt6d3dvWG84U1c4RlpLZzhyUzdwMHE4UnA1NDgxQmgrNmN0V2VCTjg2L0pSSzdmU25ER2tTRWZxRmp3QkVRK2ZMeDY5TW1jZWR4MkdRN3pvUXArbTJtQ241ZmY1aUw5Snk0bGNRPQ==/banner

2c8b4db2-8379-4ed6-acf7-da411ff4196d

var y = `ype in the box below 
↵8B9AC6 
↵`;
y.split('\n').map(x => x.trim()).filter(x => x.length == 6)[0]*/

var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
var x = async () => {
     await sleep(1000)
    var imgURL = document.getElementById('captchaImg').src;
    console.table('ok-1');
    var result = await fetch(`https://api.ocr.space/parse/imageurl?apikey=f4cce747ad88957&url=${imgURL}`);
    console.table('result is ', result);
    result = await result.json();
    console.table(result);
    try{
        let text = result.ParsedResults[0].ParsedText;
        text = text.split("\n").map(r => r.trim()).filter(x => x.length == 6)[0];
        document.getElementById('nlpAnswer').value = text;
    } catch (e){
        alert(e);
    }
}

var refreshButton = document.querySelectorAll('a.nlpRefresh')[0];
var shadowEvent = refreshButton.onclick;
refreshButton.onclick = () => {
    shadowEvent();
    x();
}
x();



