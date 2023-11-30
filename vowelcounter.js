
let vowelCounter=0;
let vowels="aeiouAEIOU";
let outputText=document.getElementById("vowelcounter");


function countVowels()
{   
    let inputText = document.getElementById("sentence").value;

    console.log(inputText);   
    for(var i=0;i< inputText.length ; i++){
        for (let x=0; x<vowels.length; x++)
        {
            if (inputText[i] == vowels[x])
            {
                vowelCounter++;
            }
        }        
    }
    console.log(vowelCounter);
    document.getElementById("vowelcounter").innerHTML="No. of vowels:"+vowelCounter;
    vowelCounter=0;
}
function clearText()
{
    let inputText = document.getElementById("sentence").value=null;
    document.getElementById("vowelcounter").innerHTML="No. of vowels"
    


}
