const myImages = ["https://images.unsplash.com/photo-1704078541927-7a0da547f730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1703979224361-ba5b9993b7ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1656778669500-7afe7f78c3d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1692468867066-d440f327ed36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1682685797229-b2930538da47?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg","https://images.unsplash.com/photo-1703817843977-11fe5a469e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1704128728168-21b9f1381c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D","https://plus.unsplash.com/premium_photo-1703689492853-5df5f3ff4b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"]

let currentImage = 0;
let nextLink = document.getElementById('next');
let previousLink = document.getElementById('previous');

nextLink.addEventListener('click',function(){
    currentImage = (currentImage+1)%myImages.length;
    let curr = document.getElementById('myImage');
    curr.src = myImages[currentImage];
    curr.style.height='400px';
    curr.style.borderRadius='50px';
});

previousLink.addEventListener('click',function(){
    if(currentImage===0)
    currentImage = myImages.length-1;
    else
    currentImage = (currentImage-1);
    let curr = document.getElementById('myImage');
    curr.src = myImages[currentImage];
    curr.style.height='400px';
    curr.style.borderRadius='50px';
});
