
const learnMoreBtn = document.getElementById('learn-more-btn');
const extraContent = document.getElementById('extra-content');

if (learnMoreBtn && extraContent) {
    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        extraContent.style.display = extraContent.style.display === 'block' ? 'none' : 'block';
        
        learnMoreBtn.textContent = extraContent.style.display === 'block' ? 'Show Less' : 'Learn More';
    });
} else {
    console.error('Could not find the required elements.');
}
