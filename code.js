var images=[
    "https://cdn1.vectorstock.com/i/1000x1000/72/00/young-man-cartoon-vector-15497200.jpg",
    "https://image.shutterstock.com/image-vector/cute-thinking-woman-looking-away-260nw-439245706.jpg",
    "https://image.shutterstock.com/image-vector/cute-little-girl-spring-260nw-337904864.jpg",
    "https://i.pinimg.com/736x/26/54/0c/26540c6037f048c80ffcf0be31c944ff.jpg",
    "https://cdn2.vectorstock.com/i/1000x1000/32/86/cartoon-old-woman-with-a-cane-vector-25043286.jpg"

];
var names=[
    "Rajesh Sharma","Rita Sharma","Vidya Sharma","Ayaan Sharma","Ananya Sharma"
];
var i=0;
function update()
{
    i++;
    var numbersoffamilymemberinarray=5
    if(i>numbersoffamilymemberinarray)
    {
        i=0;
    }
    var updatedimage=images[i];
    var updatedname=names[i];
    document.getElementById("familymemberimage").src=updatedimage;
    document.getElementById("familymembername").innerHTML=updatedname;
}