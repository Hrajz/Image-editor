var val = document.getElementsByClassName("progressbar")
var progressBar = document.querySelector(".value")
var value = 0;
var image = document.getElementById("output")
console.log(image.style.filter);
console.log(getComputedStyle(image).getPropertyValue("filter"))
console.log(value);
var box = document.querySelector(".p_bar")

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    setTimeout(print(),2000)
};
function print(){
    console.log(image.width)
    console.log(image.height)
}


const btn = document.getElementsByClassName("icon");   
 
    // btn[0].addEventListener('click', function onClick(){
    //     btn[0].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
    //   });
var brightness = 1;
var blur = 0;
var contrast = 1;
var hue = 0;
var invert = 0;
var saturation = 1;
var sepia = 0;
var bw = 0;



function edit(param){

    if(param === 'brightness'){
        btn[0].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[0].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==0){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[0].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            brightness = (100+Number(value))/100;
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    else if(param === 'shadow'){
        btn[1].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        for(var i=0;i<btn.length;i++){
            if(i!==1)btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
        }
        
    }

    else if(param === 'contrast'){
        btn[2].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[2].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==2){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[2].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            contrast = `${(Number(value)+100)/100}`
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`
        })
    }

    else if(param === 'hue'){
        btn[3].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[3].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==3){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[3].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            if(Number(value)<0){
                hue = 360+(Number(value)*(9/5));
            }
            else{
                hue = Number(value)*(9/5);
            }
    
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    else if(param === 'bw'){
        btn[4].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[4].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==4){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[4].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            bw = Number(value)/100;
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    else if(param === 'invert'){
        btn[5].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[5].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==5){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[5].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            invert = Number(value)/100;
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    else if(param === 'saturation'){
        btn[6].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[6].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==6){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[6].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            saturation = (100 + Number(value))/100;
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    else if(param === 'sepia'){
        btn[7].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[7].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==7){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[7].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            sepia = Number(value)/100;
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    else if(param === 'blur'){
        btn[8].style.border = "16.5px solid rgba(15, 26, 75, 0.8)";
        val[8].style.display = "block";
        box.style.display = "inherit";
        for(var i=0;i<btn.length;i++){
            if(i!==8){
                btn[i].style.border = "16.5px solid rgb(0, 0, 0)";
                val[i].style.display = "none"
            }
        }
        val[8].addEventListener("input", (e)=>{
            value = e.target.value;
            progressBar.innerHTML= value;
            blur = Number(value)/10;
            image.style.filter = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) hue-rotate(${hue}deg) invert(${invert}) saturate(${saturation}) sepia(${sepia}) grayscale(${bw})`;
        })
    }

    console.log(image.style.filter)
    
}
