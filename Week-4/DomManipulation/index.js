
window.addEventListener("load",()=>{

    const outer = document.getElementById("outer-Elememt");
    const inner = document.getElementById("inner-element");
    console.log(outer)
    outer.addEventListener("click",()=>{
    console.log("outer element")
    });

    inner.addEventListener("click",()=>{
    console.log("Inner element")
    })

    console.log("entered")
})

//pagination in js sample code?\\\\\\\\\\\\\\\\\\

