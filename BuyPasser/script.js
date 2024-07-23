var primy = document.getElementById("h-پیشنهاد-پرایمی");
if(primy){
  primy.innerHTML = "!!!BuyPasser!!!";
  document.title = "!!!BUYPASSER!!!";
};
///////////////////////////////////////////////////////////////////////////
const elements = document.querySelectorAll('[data-id^="post-"]');
if (elements){

  elements.forEach(element => {
    const id = element.getAttribute('data-id');
    const classes = element.classList;
    for (let i = classes.length - 1; i >= 0; i--) {
      if (classes[i].startsWith('post-')) {
        element.classList.remove(classes[i]);
      }
    }
  });
};//endIF
