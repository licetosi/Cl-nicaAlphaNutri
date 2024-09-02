/*Efeito viwerpoint Rodas*/

document.addEventListener('DOMContentLoaded', function() {
    const texto3 = document.querySelector('.texto3');
    const rodas = document.querySelector('.rodas');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    observer.observe(texto3);
    observer.observe(rodas);
});



/*Carrosel*/

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont >= 5){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true   
}












/*Efeito viwerpoint Convênios*/

document.addEventListener('DOMContentLoaded', function() {
    const texto7 = document.querySelector('.texto7');
    const parceiros = document.querySelector('.parceiros');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    observer.observe(texto7);
    observer.observe(parceiros);
});



// script.js

document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('typing-section');
    const paragraphs = section.querySelectorAll('p');
    const typingSpeed = 50; // Speed of typing effect (ms per character)
    const delayBetweenParagraphs = 1000; // Delay between paragraphs (ms)
    
    let currentParagraphIndex = 0;

    function typeParagraph(paragraph, callback) {
        const text = paragraph.textContent;
        paragraph.textContent = ''; // Clear text
        paragraph.style.display = 'inline'; // Show paragraph

        let index = 0;

        function type() {
            if (index < text.length) {
                paragraph.textContent += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else {
                if (callback) callback();
            }
        }

        type();
    }

    function showNextParagraph() {
        if (currentParagraphIndex < paragraphs.length) {
            typeParagraph(paragraphs[currentParagraphIndex], function() {
                currentParagraphIndex++;
                setTimeout(showNextParagraph, delayBetweenParagraphs);
            });
        }
    }

    function startTyping() {
        // Create an observer to start typing effect when the section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showNextParagraph();
                    observer.disconnect(); // Stop observing after starting the effect
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Adjust based on when you want the effect to start
        });

        observer.observe(section);
    }
    startTyping();
});


