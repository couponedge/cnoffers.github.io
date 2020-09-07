var homepage=document.location.origin
var referral_link="https://classroom.codingninjas.com/app/invite/TNMBH"


function openReferalPage(){
    window.open(referral_link, '_blank'); 
}

function openHomePage(){
    window.open(homepage, '_self'); 
}

function openInSameTab(link){
    window.open(link, '_self'); 
}

function openInNewTab(link){
    window.open(link, '_blank'); 
}


// Referral Ka Sara
$('#menu-cta-btn').add('#landing-cta-btn').add('#cta1-btn').add('#end-cta-join-btn')
.on('click', openReferalPage);


// Homepage
$('#logo').add('')
.on('click', openHomePage);

//Courses
$('#tc-all-courses-btn')
.on('click', (e)=>{
    openInNewTab('https://www.codingninjas.com/courses')
});

// Free Trial
$('#tc-free-trial-btn').add('#end-cta-try-free-btn')
.on('click', (e)=>{
    openInNewTab('https://www.codingninjas.com/start-learning')
});



// Etc
// How To Get Discounts
$('#h2gd-check-ongoing-discounts-btn').on('click',(e)=>{
    openInNewTab('https://www.codingninjas.com/')
});

$('#h2gd-my-referral-btn').on('click',openReferalPage);

$('#h2gd-check-fb-btn').on('click', (e)=>{
    openInNewTab('https://www.facebook.com/codingninjas')
});
