addEventListener('load', function () {
        
    firts_img_section = document.querySelectorAll("img")[0]
    currentIndex = parseInt(firts_img_section.src.match(/\/(\d+)\./)[1]);
    first_div = document.querySelectorAll("div")[0]
    slide_mode = false
    var slider 
    
    var students = [
        { name: "Ali", age: 20, Crs: "Biology" },
        { name: "Hamza", age: 22, Crs: "Math" },
        { name: "Anas", age: 19, Crs: "Biology" },]


    next.addEventListener('click', function () {
        
        if (slide_mode == false ) {
        // console.log(currentIndex)
        currentIndex++ 
        if(currentIndex > 6)
            currentIndex = 1
        
        first_div.className = "images"
        firts_img_section.src = "images/" + currentIndex + ".jpg"
        }

    })

    previous.addEventListener('click', function () {
        
        if(slide_mode == false) {
        // console.log(currentIndex)
        currentIndex -- 
        if(currentIndex < 1)
            currentIndex = 6
        
        first_div.className = "images"
        firts_img_section.src = "images/" + currentIndex + ".jpg" 
        }
    })

    slideshow.addEventListener('click' , function() {
        
        //logic : 
        //       this button stops "next" , "previous" 
        //       it expands the current image(not necessary the 1st) and slides the images every 2 seconds
        //       only until the 6th images then images returns to its default size 
        //              
        
        slide_mode = true  //stop all buttons except stop and slide
        first_div.className = "slides"

        // wait 2 sec for the first image
        setTimeout(function(){
            
            if(currentIndex  !=  6) { // if the currentIndex = 6 because of next , previous
                    currentIndex++    //necessary to be increased here : otherwise the first waits 4 sec not 2
                    firts_img_section.src = "images/" + currentIndex + ".jpg" 
                    //it wait 2 sec then get next 
                    slider= setInterval(function(){ 
                            
                            if(currentIndex < 6){
                                currentIndex++ 
                                firts_img_section.src = "images/" + currentIndex + ".jpg" }
                    
                            else { //currentIndex  =  6
                                
                                slide_mode=false
                                clearInterval(slider)
                                first_div.className = "images"//runs only after the interval stops after(clear) 
                            }
                    },2000)
                }
            else 
                {   //currentIndex  =  6
                    slide_mode=false
                    clearInterval(slider)
                    first_div.className = "images"
                }
            },2000)    

    })

    
    mystop.addEventListener('click' , function() {
        
        clearInterval(slider);
        slide_mode = false;
        first_div.className = "images"; 
        
    })

    //handle the initial value of drop down 

    selected_val = document.getElementById("dropdown").value
    student_idx = selected_val  -1 
    studentdata.innerText=`student ${student_idx+1} \n name : ${students[student_idx].name} , age : ${students[student_idx].age} , course : ${students[student_idx].Crs}`
      
    //handle if we change 
    dropdown.addEventListener('change',function(){


        student_idx = this.value -1 
        studentdata.innerText=`student ${student_idx+1} \n name : ${students[student_idx].name} , age : ${students[student_idx].age} , course : ${students[student_idx].Crs}`
       
    })


    //task 5
    
    i = 0
    students.forEach(function(){
        if(i %2 ==0 ){
            oddstudentdata.innerText +=`student ${i+1} \n name : ${students[i].name} , age : ${students[i].age} , course : ${students[i].Crs } \n`

        }
        else {
            evenstudentdata.innerText +=`student ${i+1} \n name : ${students[i].name} , age : ${students[i].age} , course : ${students[i].Crs}`
        }
        i++
        
    })















    
})
