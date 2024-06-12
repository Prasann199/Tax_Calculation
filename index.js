function tooltips(){
    const tip1=document.querySelector(".gross1")
const compo1=document.querySelector(".first");
compo1.addEventListener("mouseenter",function(dets){
    
    let xval=dets.clientX-50;
    let yval=dets.clientY-100;
    tip1.style.left=xval+"px";
    tip1.style.top=yval+"px";
    tip1.style.display="block"
})
compo1.addEventListener("mouseleave",function(dets){
    tip1.style.display="none"
})

const tip2=document.querySelector(".gross2")
const compo2=document.querySelector(".second");
compo2.addEventListener("mouseenter",function(dets){
    let xval=dets.clientX-50;
    let yval=dets.clientY-50;
    tip2.style.left=xval+"px";
    tip2.style.top=yval+"px";
    tip2.style.display="block"
})
compo2.addEventListener("mouseleave",function(dets){
    tip2.style.display="none"
})

const tip3=document.querySelector(".othersrc")
const compo3=document.querySelector(".third");
compo3.addEventListener("mouseenter",function(dets){
    let xval=dets.clientX-50;
    let yval=dets.clientY-50;
    tip3.style.left=xval+"px";
    tip3.style.top=yval+"px";
    tip3.style.display="block";
})
compo3.addEventListener("mouseleave",function(dets){
    tip3.style.display="none";
})
const tip4=document.querySelector(".agegrp")
const compo4=document.querySelector(".fourth");
compo4.addEventListener("mouseenter",function(dets){
    let xval=dets.clientX-50;
    let yval=dets.clientY-50;
    tip4.style.left=xval+"px";
    tip4.style.top=yval+"px";
    tip4.style.display="block";
})
compo4.addEventListener("mouseleave",function(dets){
    tip4.style.display="none";
})
const tip5=document.querySelector(".dctc")
const compo5=document.querySelector(".fifth");
compo5.addEventListener("mouseenter",function(dets){
    let xval=dets.clientX-50;
    let yval=dets.clientY-80;
    tip5.style.left=xval+"px";
    tip5.style.top=yval+"px";
    tip5.style.display="block";
})
compo5.addEventListener("mouseleave",function(dets){
    tip5.style.display="none";
})
}
tooltips();
function calculate(){
    
document.querySelector("#submitbtn").addEventListener("click",function (){
    let grs=parseFloat(document.querySelector(".input1").value);
    let extra=parseFloat(document.querySelector("#extraincome").value);
    let age=parseInt(document.querySelector("#agegroup").value);
    let deduct=parseFloat(document.querySelector("#deduction").value);

    if(isNaN(grs)){
        let fir=document.querySelector(".second")
        fir.style.border="1px solid red";
        fir.style.color="red";
    }else{
        const overallIncome = grs + extra - deduct;
        let tax = 0;

        if (overallIncome > 800000) {
            let taxableIncome = overallIncome - 800000;

            if (age<40) {
                tax = 0.30 * taxableIncome;
            } else if (age >=40 & age<60) {
                tax = 0.40 * taxableIncome;
            } else if (age >=60) {
                tax = 0.10 * taxableIncome;
            }
        }
        console.log(overallIncome-tax)
        var main=document.querySelector(".main");
        let result=document.querySelector(".result");
        let amt=document.querySelector(".amount")
        result.style.display="flex";
        main.style.display="none"
        amt.textContent=overallIncome-tax;
        let cls=document.querySelector(".close");
        cls.addEventListener("click",function(){
            result.style.display="none"
            main.style.display="block"

        })
        resetForm();

    }
})
function resetForm() {
    document.querySelector(".input1").value = "";
    document.querySelector("#extraincome").value = "";
    document.querySelector("#agegroup").value = "";
    document.querySelector("#deduction").value = "";
}
}
calculate()