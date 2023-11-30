let sum=0;

function sumCalculate()
{
    let input=document.getElementById("integer").value
    for(i=0;i<input;i++)
    {
        if(i%3==0||i%5==0){
            sum +=i;

        }
    }
    console.log(sum)
    let ouput=document.getElementById("finaloutput").innerHTML="final calculation:"+sum;
    document.getElementById("finaloutput").style.display="block";
    sum=0;
   
}