
//task 1 


addEventListener('load', function () {
   
//a)

//sol1: the default collection is : document.all 

for(i = 0 ;i <document.all.length ;i++){
    //document.all[i] : returns as <head> //some code </head>
    if (document.all[i].tagName == "IMG") { // should be compared to upper case 
        console.log(document.all[i].src)    // return only the src 
    }
}

//sol2:

collected_imgs = document.getElementsByTagName("img") //can not use foreach  , but i can use length
for ( i = 0 ;i <collected_imgs.length ;i++){
    //console.log(collected_imgs[i]) // html tagg : <img src ="images/1.png" name="firstImage">
    console.log(collected_imgs[i].src) // i use absolute file location 
}



//b)

select_tag = document.getElementsByName("City")[0]
for (i = 0 ;i <select_tag.length ;i++){
    console.log(select_tag.children[i].value)
}


//c)

all_tables = document.getElementsByTagName("table")
second_table = all_tables[1]
table_body = second_table.children[0] 
all_rows = table_body.getElementsByTagName("tr") 

for (i = 0 ; i< all_rows.length ; i++){ 
    console.log(all_rows[i]) //row by row 
}


//d)
//sol1 :
all=this.document.getElementsByClassName("fontBlue")
for ( i = 0 ; i< all.length ;i++){
    console.log(all[i].tagName)
}

//sol2 :
elements = document.querySelectorAll(".fontBlue"); //list so we can use foreach
elements.forEach(function(ele)  {
    console.log(ele.tagName)
});


//-------------------------------------------------------------------------------------------------------//

//task 2 


//a)
second_table_body = document.getElementsByTagName("table")[1].children[0]
first_anchor = second_table_body.querySelector("a") //the first anchor 
first_anchor.href = "training.com" 
first_anchor.text = "Training"


//b)
all_images = document.getElementsByTagName("img")
last_img = all_images[all_images.length-1 ] 
last_img.style.border = "solid pink 2px"


//c)

function alert_only_check_checkbox () {

all_input = document.getElementsByTagName("input")

for (i = 0 ;i<all_input.length ; i++){
    inpt = all_input[i]
    if (inpt.type == "checkbox" && inpt.checked == true ) 
       alert(inpt.value)
}
}

alert_only_check_checkbox()


//d)
element = document.querySelector("#example") //by id 
element.style.backgroundColor = "pink"


})