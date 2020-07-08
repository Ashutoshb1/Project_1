document.querySelector('.btn-primary').addEventListener('mouseover',()=>{
    document.querySelector('.btn-primary').textContent = 'Beginner';
    document.querySelector('.skills h3').classList.add('animate__pulse');
    
});

document.querySelector('.btn-py').addEventListener('mouseover',()=>{
    document.querySelector('.btn-py').textContent = 'Intermediate';
    document.querySelector('.skills h3').classList.add('animate__headShake');
});

document.querySelector('.btn-css').addEventListener('mouseover',()=>{
    document.querySelector('.btn-css').textContent = 'Intermediate';
    document.querySelector('.skills h3').classList.add('animate__pulse');
});

document.querySelector('.btn-html').addEventListener('mouseover',()=>{
    document.querySelector('.btn-html').textContent = 'Intermediate';
    document.querySelector('.skills h3').classList.add('animate__pulse');
});
