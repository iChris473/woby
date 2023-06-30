AOS.init();

window.addEventListener('load', function() {
    // Hide the loading animation
    var loadingAnimation = document.getElementById('loading-animation');
    loadingAnimation.style.display = 'none';

    // Show the page content
    var pageContent = document.getElementById('page-content');
    pageContent.style.display = '';
    document.querySelector('body').classList.remove('centerBody');
    AOS.init();
});

const arrowRight = document.querySelector('.arrowRight');
const arrowLeft = document.querySelector('.arrowLeft');
const roadCont = document.querySelector('.roadCont');
const roadClass = document.querySelector('.roadClass');

arrowLeft.addEventListener('click', () => {
    roadCont.scroll({
        left: roadCont.scrollLeft - roadClass.scrollWidth,
        behavior: 'smooth'
    })
})
arrowRight.addEventListener('click', () => {
    roadCont.scroll({
        left: roadCont.scrollLeft + roadClass.scrollWidth,
        behavior: 'smooth'
    })
})

const copyBtnETH = document.querySelector('.cAddBtnETH');
copyBtnETH.addEventListener('click', copyETH);

function copyETH(){
    const textToCopy = document.querySelector('.cAddETH').innerText;
    copyToClipboard(textToCopy, copyBtnETH);
}

const copyBtnBSC = document.querySelector('.cAddBtnBSC');
copyBtnBSC.addEventListener('click', copyBSC);

function copyBSC(){
    const textToCopy = document.querySelector('.cAddBSC').innerText;
    copyToClipboard(textToCopy, copyBtnBSC);
}

function copyToClipboard(textToCopy, copyBtn) {
    navigator.clipboard.writeText(textToCopy)
     .then(() => {
        copyBtn.innerText = 'Copied';
        copyBtn.style.backgroundColor = '#02a701';
        setTimeout(() => {
            copyBtn.innerText = 'Copy';
            copyBtn.style.backgroundColor = '#1d29415f';
        }, 2000)
    })
    .catch((error) => {
        window.alert('Unable to copy text to clipboard');
    });
};
