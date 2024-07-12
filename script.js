const imagesDiv =document.getElementById("images")

const resultDiv =document.getElementById("result")
const rnd = Math.random()>0.5
const arr = [rnd,!rnd]

let id = (Math.random() *6+1) *10000
id=Math.floor(id)
const fake = "https://thispersondoesnotexist.com/"
const real= `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`

const again = document.createElement("button")
again.innerText='play again'
again.onclick= function(){
     location.reload()
}
for (x of arr)
{
    const i1 = document.createElement("img")
    i1.src=(x? real:fake)
    imagesDiv.append(i1)

    i1.onclick = function(){
        resultDiv.innerText = x?'👌correct👌':'🤦‍♀️not correct🤦‍♂️'
        imagesDiv.style.pointerEvents='none'
        resultDiv.appendChild(again)
    }
}

