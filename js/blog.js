var btn=document.querySelector(".projbtn");
var cifarbtn=document.querySelector(".cifarknowbtn");
var overfittingknowbtn=document.querySelector(".overfittingknowbtn");
var cifarnotebookbtn=document.querySelector(".cifarnotebookbtn");
var overfittingnotebookbtn=document.querySelector(".overfittingnotebookbtn");

btn.addEventListener("click",()=>{
    location.href="../html/Projects.html"
})
cifarbtn.addEventListener("click",()=>{
    location.href="../html/Cifar10_Blog.html"
})
overfittingknowbtn.addEventListener("click",()=>{
    location.href="../html/Overfitting_Blog.html"
})



var notebookbtn=document.querySelector(".notebookbtn");
var kaggleknowbtn=document.querySelector(".kaggleknowbtn");
notebookbtn.addEventListener("click",()=>{
    location.href="https://www.kaggle.com/vijayganesh3107/vijay-assignemnt-v2"
})
cifarnotebookbtn.addEventListener("click",()=>{
    location.href="https://colab.research.google.com/drive/103OXk1WwR039DWuNqOfzV064hI8iWhuv?usp=sharing"
})
overfittingnotebookbtn.addEventListener("click",()=>{
    location.href="https://colab.research.google.com/drive/1tzdyfUPxZ3XxEBDJTW4ELbhFxfv87pRQ?usp=sharing"
})
kaggleknowbtn.addEventListener("click",()=>{
    location.href="../html/Blog.html"
})

