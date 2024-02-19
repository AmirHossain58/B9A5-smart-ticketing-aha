let  seatsLeft=40;
let seatSelect=0;
let totalPrice =0;
let grandTotal=0;
const seatPrice=550;
document.getElementById('next-btn').disabled=true
document.getElementById('apply-btn').disabled=true
const buyTicket=document.getElementById('buy-tickets')
    buyTicket.addEventListener('click',function(){
       const selectYourSeat=document.getElementById('select-your-seat')
       selectYourSeat.scrollIntoView({behavior:'smooth'})
    })
const seats=document.getElementsByClassName('seats')
// console.log(seats);
for(const seat of seats){
    seat.addEventListener('click',function(event){
        
        seatsLeft-=1;
        seatSelect+=1;
        totalPrice+=seatPrice;
        grandTotal=totalPrice;
        if(totalPrice>=2200){
            document.getElementById('apply-btn').disabled=false;
            const applyBtn=document.getElementById('apply-btn');
            applyBtn.addEventListener('click',function(){
                const value =document.getElementById('coupon').value
                const coupon=value.split(' ').join('').toUpperCase()
                console.log(coupon);
                console.log(grandTotal);
               if(coupon==='NEW15'){
                const discount=totalPrice*.15
                grandTotal=totalPrice-discount
                const discountPrice=document.getElementById('discount-price');
                const li=document.createElement('li');
                const p0=document.createElement('p');
                const p1=document.createElement('p');
                p0.innerText='Discount Price';
                p1.innerText=discount;
                li.appendChild(p0);
                li.appendChild(p1);
                discountPrice.appendChild(li);
                setText('grand-total',grandTotal);
                document.getElementById('apply-container').classList.add('hidden');
               }
               const couponCouple=value.charAt(0).toUpperCase()+value.slice(1)
               if(couponCouple==='Couple 20'){
                const discount=totalPrice*.20
                grandTotal=totalPrice-discount
                const discountPrice=document.getElementById('discount-price');
                const li=document.createElement('li');
                const p0=document.createElement('p');
                const p1=document.createElement('p');
                p0.innerText='Discount Price';
                p1.innerText=discount;
                li.appendChild(p0);
                li.appendChild(p1);
                discountPrice.appendChild(li);
                setText('grand-total',grandTotal);
                document.getElementById('apply-container').classList.add('hidden');
               }else{
                setText('grand-total',grandTotal);
                alert('Invalid Coupon Code')
                return
               }
            //    if(coupon !=='NEW15'|| couponCouple!=='Couple 20'){
            //     alert('Invalid Coupon Code')
            //     return
            //    }

            })
            // document.getElementById('apply-btn').
           
            // 
        }
        if(totalPrice>2200){   
            alert('You can-not buy more then 4 Tickets');
            return;
         }
        seat.style.backgroundColor='#1DD100';
        seat.disabled=true;
        const seatLeft=setText('seats-left',seatsLeft);
        let seatsSelect=setText('seat-select',seatSelect);;
        const totalPrices=setText('total-price',totalPrice);
       const gTotal=setText('grand-total',grandTotal);
         const seatName=seat.innerText;

         const selectedContainer=document.getElementById('selected-container');
      const li=document.createElement('li');
      const p0=document.createElement('p');
      const p1=document.createElement('p');
      const p2=document.createElement('p');
      p0.innerText=seatName;
      p1.innerText='Economoy';
      p2.innerText='550';
      li.appendChild(p0);
      li.appendChild(p1);
      li.appendChild(p2);
      selectedContainer.appendChild(li);
      document.getElementById('next-btn').disabled=true;
      const phone=document.getElementById('phone').value;
      console.log(phone);
      if(totalPrice>=550){
        document.getElementById('next-btn').disabled=false;
      }

      const continueAgain=document.getElementById('continue');
    continueAgain.addEventListener('click',function(){
       const home=document.getElementById('home');
       home.scrollIntoView({behavior:'smooth'});
       document.getElementById('success').classList.add('hidden');
       seat.style.backgroundColor='#F7F8F8';
       selectedContainer.removeChild(li);
       setText('seat-select','0');
       setText('total-price','0');
       setText('grand-total','0');
    })
      


    })
}
document.getElementById('next-btn').addEventListener('click',function(){
    document.getElementById('success').classList.remove('hidden');
})



function getText(id){
    document.getElementById(id).innerText;
}
function setText(id,value){
    document.getElementById(id).innerText=value;
}

