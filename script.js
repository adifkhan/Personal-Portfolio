const homeSection = document.createElement('div');
homeSection.classList.add('home-container');
homeSection.innerHTML=`<div class="home-image">
<img src="images/Maynul Islam Adif.png" alt="" />
</div>
<div class="home-contents">
<h3>Hello, It's</h3>
<h1>Maynul Islam Adif</h1>
<h3>A Passionate <span>MERN Stack Developer</span></h3>
<p>
Proficient in : <span class="skills"></span>
</p>
<div class="social-icon">
<a href="#" style="--i:6;"><i class="bx bxl-facebook"></i></a>
<a href="#" style="--i:7;"><i class="bx bxl-linkedin"></i></a>
<a href="#" style="--i:8;"><i class="bx bxl-github"></i></a>
<a href="#" style="--i:9;"><i class="bx bxl-twitter"></i></a>
</div>
<a href="#" class="btn">Download CV</a>
</div>
`;

const skillSection = document.createElement('div');
skillSection.classList.add('skill-container');
skillSection.innerHTML=`
<p>i am at portfolio</p>
`;

const portfolioSection = document.createElement('div');
portfolioSection.classList.add('portfolio-container');
portfolioSection.innerHTML=`
<p>i am at skill</p>
`;

const resumeSection = document.createElement('div');
resumeSection.classList.add('resume-container');
resumeSection.innerHTML=`
<p>i am at resume</p>
`;

const contactSection = document.createElement('div');
contactSection.classList.add('contact-container');
contactSection.innerHTML=`
<p>i am at contact</p>
`;


const outlet=document.getElementById('outlet')

const makeActive=(className)=>{
    outlet.firstChild.remove()
    outlet.appendChild(className);
}






// outlet.innerHTML=`<div class="home-container"></div>`

// console.log(outlet)
