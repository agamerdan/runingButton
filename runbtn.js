const form=document.querySelector('.form-group')
const btn=document.querySelector('.btn')
const info=document.querySelector('.info')
const span=info.querySelector('span')

form.parola.addEventListener('keyup', e=>{
    const parola="merdan96"
    if(parola==e.target.value){
        span.innerHTML=`<b> Successfull</b>`
        span.classList.remove('text-danger')
        span.classList.add('text-success')
        info.classList.remove('d-none')
    }else{
        span.innerHTML=`<b>Yuor password is wrong</b>`
        span.classList.remove('text-success')
        span.classList.add('text-danger')
        info.classList.remove('d-none')
        btn.addEventListener('mouseover',e=>{
           if(pos(btn)==835){
               
               btn.classList.add('run')
           }
           else if(pos(btn)==1034)
           {
                console.log(pos(btn))
                btn.classList.remove('run')
                btn.classList.add('runleft')
            }
            else
            {
                btn.classList.remove('runleft')
            }
        })
    }
})


function pos(buton){

    var konum=buton.getBoundingClientRect(),//objeye erişiyoruz ve pozisyon bilgilerini alıp konum değişkenine atıyoruz

           left=Math.round(konum.left)//objenin solda ne kadar uzak olduğunu alıyoruz
          return left
           
    }
