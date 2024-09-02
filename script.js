
AOS.init({
    easing:'ease-in-out-sine'
});

var time_1 = "1s";
var time_2 = "2s";
var timeArray = ["1s","1.5s","2s","2.8s","3s","3.6s","4s","4.8s","5s","5.5s","6s"];
const n = document.getElementsByClassName("first");
var web = ["W","e-3","b","D","e-4","v","e-5","l-2","o-2","p","e-6","r-3"]

for(let i = 0;i <= 4;i++){
    n[i].style.animationDelay = timeArray[i];
   // console.log(n[i]);
}

// Animation Delay for Web Developer text //
console.log(web.length);
for(let j=(web.length-1);j > 0;j--){
    let k = document.getElementById(web[j]);
   // console.log(k);
    k.style.animationDelay = timeArray[j];
}

//Background color for moving blocks//
var design = ["de-1","de-2","de-3"] ;
var color = "rgb(224, 173, 129)";
let j = 0;
let v;
while(j >= 0){
    v = document.getElementsByClassName(design[j]);
    for(let i = 0;i < 4;i++){
        
        v[i].style.background = color;
   }
   j += 1;
  
   if(j >= 3){
    break;
   }
}




//observer for main page animations //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if(entry.isIntersecting) {
           
            entry.target.classList.add('first');
          
        }
        else{
            entry.target.classList.remove('first');
        }
    });
});

const observer_two = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("second");
        }
        else{
            entry.target.classList.remove("second");
        }
    });
});

const observer_three = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("third");
        }
        else{
            entry.target.classList.remove("third");
        }
    });
});

const observer_fourth = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("fourth");
        }
        else{
            entry.target.classList.remove("fourth");
        }
    });
});
const first_brick = document.querySelector("#first-move");
const second_brick = document.querySelector(".second-move");
const third_brick = document.querySelector(".third-move");
const fourth_brick = document.querySelector(".fourth-move");
observer_fourth.observe(fourth_brick);
observer_three.observe(third_brick);
observer_two.observe(second_brick);
observer.observe(first_brick);


// Observer for tech page animations //
const tech_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("leaf-two");
           
        }
        else{
            entry.target.classList.remove("leaf-two");
        }
    });
});

const leaf = document.querySelectorAll(".leaf");
leaf.forEach((el) => {
    tech_observer.observe(el);
});

const html_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if(entry.isIntersecting){
            entry.target.classList.add("html");
           
        }
        else{
            entry.target.classList.remove("html");
        }
    });
});

const html = document.querySelector("#html");
html_observer.observe(html);

const js_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("js");
           
        }
        else{
            entry.target.classList.remove("js");
        }
    });
});

const js = document.querySelector("#js");
js_observer.observe(js);

const data_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("data");
           
        }
        else{
            entry.target.classList.remove("data");
        }
    });
});

const data = document.querySelector("#data");
data_observer.observe(data);


const ios_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if(entry.isIntersecting){
            entry.target.classList.add("ios");
           
        }
        else{
            entry.target.classList.remove("ios");
        }
    });
});

const ios = document.querySelector("#ios");
ios_observer.observe(ios);

const lis_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("lis");
           
        }
        else{
            entry.target.classList.remove("lis");
        }
    });
});

const lis = document.querySelector("#lis");
lis_observer.observe(lis);

const java_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("java");
           
        }
        else{
            entry.target.classList.remove("java");
        }
    });
});

const java = document.querySelector("#java");
java_observer.observe(java);

// Onclick Events for work Cards //
const work_1 = document.querySelector("#work_one");
const work_2 = document.querySelector("#work_two");
const work_3 = document.querySelector("#work_three");
const work_4 = document.querySelector("#work_four");
const work_5 = document.querySelector("#work_five");
let image1 = document.querySelector("#img1");


work_1.addEventListener("click",() => {
image1.src = "Images\\work_one.png";
image1.style.opacity = "1";
  
});
work_2.addEventListener("click",() => {

    image1.src = "Images\\work_two.png";
      
});
work_3.addEventListener("click",() => {

    image1.src = "Images\\work_three.png";
      
});
work_4.addEventListener("click",() => {

    image1.src = "Images\\work_four.png";
      
});
work_5.addEventListener("click",() => {

    image1.src = "Images\\work_five.png";
      
});

//Image Slider 
var slider_img_right = document.querySelector(".slider_button_right") ;
var slider_img_left = document.querySelector("#img_slider_left") ;
var anim = document.querySelector(".work1");
var counter = 0;

slider_img_right.addEventListener("click",img_slider);
slider_img_left.addEventListener("click",img_slider);
function img_slider(){
        counter++;
        if(counter == 5){
            counter = 1;
        }
        nextCards(counter);
     
};


work_1.style.zIndex = "1";
work_2.style.zIndex = "1";
work_3.style.zIndex = "-1";
work_4.style.zIndex = "-1";
work_5.style.zIndex = "0";  

function nextCards(counter){
   
    if ((counter == 1) || (counter == 3)){
        work_1.style.opacity = "0";
        work_2.style.opacity = "0";
        work_3.style.opacity = "1";
        work_4.style.opacity = "1";
        work_5.style.opacity = "0";
        work_3.style.zIndex = "1"; 
        work_4.style.zIndex = "1";
        work_5.style.zIndex = "0"; 
        }
    else if((counter == 2) ){
        work_5.style.opacity = "1";
        work_4.style.opacity = "0";
        work_3.style.opacity = "0";
        work_1.style.opacity = "0";
        work_2.style.opacity = "0";
        work_5.style.zIndex = "1"; 
    }
    else if(counter == 4){
        work_1.style.opacity = "1";
        work_2.style.opacity = "1";
        work_5.style.opacity = "0";
        work_1.style.zIndex = "1";
        work_2.style.zIndex = "1";
        work_3.style.zIndex = "-1";
        work_4.style.zIndex = "-1";
        work_5.style.zIndex = "0";   
    }

    if(counter == 2){
        slider_img_right.style.opacity = "0";
        slider_img_left.style.opacity = "1";
    }
    else if(counter == 4){
        slider_img_right.style.opacity = "1";
        slider_img_left.style.opacity = "0";
    }
}    
all_work = document.querySelector(".work")  ;
slider_img_right.addEventListener("click",anim_work);
slider_img_left.addEventListener("click",anim_work); 

function anim_work(){
   
    work_3.animate({transform:['translateY(20px)','translate(0)']},
        {duration:400,iterations:1}
    );
    work_4.animate({transform:['translateY(-20px)','translate(0)']},
        {duration:500,iterations:1}
    );
    work_1.animate({transform:['translateX(-20px)','translate(0)']},
        {duration:400,iterations:1}
    );
    work_2.animate({transform:['rotate(20deg)','rotate(0)']},
        {duration:500,iterations:1}
    );
    work_3.animate({transform:['rotate(40deg)','rotate(0)']},
        {duration:400,iterations:1}
    );
    work_5.animate({transform:['rotate(-80deg)','rotate(0)']},
        {duration:500,iterations:1}
    );
}  


//Experience divs animation

var job1_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("job1");
        }
        else{
            entry.target.classList.remove("job1");
        }
    });
});
var first_des = document.querySelector(".job_1");
job1_observer.observe(first_des);

var job2_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("job2");
        }
        else{
            entry.target.classList.remove("job2");
        }
    });
});

var second_des = document.querySelector(".job_2");
job2_observer.observe(second_des);


var title_one_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("title_one_anim");
        }
        else{
            entry.target.classList.remove("title_one_anim");
        }
    });
});

var title_one = document.querySelector("#title_1");
title_one_observer.observe(title_one);


var title_two_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("title_two_anim");
        }
        else{
            entry.target.classList.remove("title_two_anim");
        }
    });
});

var title_two = document.querySelector("#title_2");
title_two_observer.observe(title_two);


//Nav bar and menu

const menu = document.querySelector(".chat_container");
const home = document.querySelector("#home");
const skill = document.querySelector("#skill");
const work = document.querySelector("#work");
const exp = document.querySelector("#exp");
const contact = document.querySelector("#contact");
const resume = document.querySelector("#resume");
const nav_bar_elem = ["#home","#skill","#work","#exp","#contact","#resume"];

var nav_counter = 0;
menu.addEventListener('click',() => {
    nav_counter++;
    nav_bar(nav_counter);
});
function nav_bar(nav_counter)    {
    if(nav_counter % 2 != 0){
    home.animate( {transform:['translate(0)',"translateX(-210px)"]},{duration:500, fill:'forwards'} );
    work.animate( {transform:['translate(0)',"translateX(-210px)"]},{duration:500, fill:'forwards'} );
    skill.animate( {transform:['translate(0)',"translateX(-210px)"]},{duration:500, fill:'forwards'} );
    exp.animate( {transform:['translate(0)',"translateX(-210px)"]},{duration:500, fill:'forwards'} );
    resume.animate( {transform:['translate(0)',"translateX(-210px)"]},{duration:500, fill:'forwards'} );
    contact.animate( {transform:['translate(0)',"translateX(-210px)"]},{duration:500, fill:'forwards'} );
    
    }
    else if(nav_counter == 4){
        home.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        work.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        skill.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        exp.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        resume.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        contact.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
    }
    else{
        home.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        work.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        skill.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        exp.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        resume.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
        contact.animate( {transform:['translate(-210px)',"translateX(210px)"]},{duration:850, fill:'forwards'} );
    }
};

//Contact nav click 
var con_sec = document.getElementsByClassName("con1");
var cross = document.querySelector(".cross_mark");  //Cross mark animation

contact.addEventListener("click",() =>{
    contact_bar();
});
function contact_bar(){
    for(let i = 0;i<3;i++){
   
    con_sec[i].classList.add("contact_anim");
    
    }
        nav_bar(4);
    
    cross.classList.add("cross_anim");
    document.querySelector(".con1").style.zIndex = "2";
    
};

cross.zIndex = "1";
cross.addEventListener("click",() => {
   
    for(let i = 0;i<3;i++){
   
        con_sec[i].classList.add("general_opacity");
    
    }
    cross.classList.add("general_opacity");
   
});