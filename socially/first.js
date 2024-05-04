//SIDE-BAR
const menuIteams = document.querySelectorAll(".menu-item");
const notificationcount=document.querySelector(".notification-count")
//MESSAGES
const messagesNotification=document.querySelector("#messages-notifications")
const messages=document.querySelector(".messages");
const message=document.querySelectorAll(".message");
const messageSearch=document.querySelector("#message-search");

//THEME
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');

//FONT-SIZE
const fontSizes =document.querySelectorAll('.choose-size span');
var root=document.querySelector(':root');
//COLOR
const colorPalete=document.querySelectorAll('.choose-color span');
//BACK GROUND
const backBround=document.querySelectorAll('background');
const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');





//============SIDE BAR=======================//
const changeActiveItems =() =>{ 
menuIteams.forEach(item =>{
     item.classList.remove("active");
    });
} ;




menuIteams.forEach(item =>{
      item.addEventListener("click",() =>{
        changeActiveItems();
        item.classList.add("active");
        if(item.id != "notifications")
        {
            document.querySelector(".notifications-popup").
            style.display='none';
        }
        else{
            
            document.querySelector(".notifications-popup").
            style.display='block';     
           document.querySelector("#notifications .notification-count").
            style.display='none';
            
        }


      });
} );

//==============MESSAGES==============//
// searches chat//
const searchMessage = () =>{
  const val = messageSearch.value.toLowerCase(); 
  message.forEach(user => {
      let name=user.querySelector('h5').textContent.toLowerCase();
      if(name.indexOf(val) != -1){
        user.style.display='flex';
      }
      else{
        user.style.display='none';
      }
        
      })
  }


// search chat//
messageSearch.addEventListener('keyup',searchMessage);



messagesNotification.addEventListener('click',() =>{
      messages.style.boxShadow ='0 0 1rem var(--color-primary)';
      messagesNotification.querySelector(".notification-count").
      style.display='none';
      setTimeout( () =>{
        messages.style.boxShadow='none'
      }, 2000);
}
)

//THEME/DISPLAY//
const openThemeModal =() =>{
  themeModal.style.display ='grid';
}

const closeThemeModal =(e) =>{
  if(e.target.classList.contains('customize-theme')){
     themeModal.style.display='none';
  }
}


themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);




//----------FONTS-----------------------//
//REMOVE ACTIVE CLASS //
const removeSizeSelector =() =>{
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
} 

const removeColorSelector =() =>{
  colorPalete.forEach(color => {
  color.classList.remove('active');
  })
}


fontSizes.forEach(size => {
  
   
  size.addEventListener('click',() => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

  if(size.classList.contains('font-size-1')){
    fontSize='10px';
    root.style.setProperty('--sticky-top-left', '5.4rem');
    root.style.setProperty('--sticky-top-right', '5.4rem');
  }
  else if(size.classList.contains('font-size-2')){
    fontSize='13px';
    root.style.setProperty('--sticky-top-left', '5.4rem');
    root.style.setProperty('--sticky-top-right', '-7rem');
  }
  else if(size.classList.contains('font-size-3')){
    fontSize='16px';
    root.style.setProperty('--sticky-top-left', '-2rem');
    root.style.setProperty('--sticky-top-right', '-17rem');
  }
  else if(size.classList.contains('font-size-4')){
    fontSize='19px';
    root.style.setProperty('--sticky-top-left', '-5rem');
    root.style.setProperty('--sticky-top-right', '-25rem');
  }
  else if(size.classList.contains('font-size-5')){
    fontSize='22px';
    root.style.setProperty('--sticky-top-left', '-10rem');
    root.style.setProperty('--sticky-top-right', '-35rem');
  }

  document.querySelector('html').style.fontSize=fontSize;

  })
})

//--------------COLOR---------------//
colorPalete.forEach(color => {
  color.addEventListener('click',() =>{
    removeColorSelector();
    let primary;
    color.classList.toggle('active');
    if(color.classList.contains('color-1')){
      primaryHue= 252
    }
    else if (color.classList.contains('color-2')){
      primaryHue = 52;
    }
    else if (color.classList.contains('color-3')){
      primaryHue = 352;
    }
    else if (color.classList.contains('color-4')){
      primaryHue = 152;
    }
    else if (color.classList.contains('color-5')){
      primaryHue = 202;
    }
    root.style.setProperty('--primary-color-Hue',primaryHue);
  })
})

//--------------BACKGROUND--------------//

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty('--light-color-lightness',lightColorLightness);
  root.style.setProperty('--dark-color-lightness' ,darkColorLightness);
  root.style.setProperty('--white-color-lightness',whiteColorLightness);

}

Bg1.addEventListener('click',() =>{
  

  Bg1.classList.add('active');

  Bg2.classList.remove('active');
  Bg3.classList.remove('active');

  window.location.reload();
});





Bg2.addEventListener('click',() =>{
  lightColorLightness ='15%';
  whiteColorLightness ='20%';
  darkColorLightness ='95%';

  Bg2.classList.add('active');

  Bg1.classList.remove('active');
  Bg3.classList.remove('active');

  changeBG();
});

Bg3.addEventListener('click',() =>{
  lightColorLightness ='0%';
  whiteColorLightness ='10%';
  darkColorLightness ='95%';

  Bg3.classList.add('active');

  Bg1.classList.remove('active');
  Bg2.classList.remove('active');

  changeBG();
});






 


