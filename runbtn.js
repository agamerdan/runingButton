const form=document.querySelector('.form-group')
const btn=document.querySelector('.btn')
form.parola.addEventListener('keyup', e=>{
    const parola="merdan96"
    if(parola==e.target.value){
        console.log("dogru")
    }else{
        btn.addEventListener('mouseover',e=>{
           if(pos(btn)==835){
               console.log("ok")
               btn.classList.add('run')
           }else{
            btn.classList.remove('run')
           }
        })
    }
})


function pos(buton){

    var konum=buton.getBoundingClientRect(),//objeye erişiyoruz ve pozisyon bilgilerini alıp konum değişkenine atıyoruz

           left=Math.round(konum.left)//objenin solda ne kadar uzak olduğunu alıyoruz
          return left
           
    }
