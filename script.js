// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const panelAll = document.querySelector('.panel-all');
    const panelOptions = document.querySelector('.panel-option');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    panelAll.addEventListener('click', () => {
        panelOptions.classList.toggle('active');
    });
});

const testimonials = [
    {
        text: "This product has changed my life! I can't imagine going back to the way things were before.",
        author: "John Doe",
        icon: "&#9733;"
    },
    {
        text: "Excellent customer service and high-quality product. Highly recommend!",
        author: "Jane Smith",
        icon: "&#9733;" 
    },
    {
        text: "Fantastic experience from start to finish. Will definitely be a repeat customer.",
        author: "Alice Johnson",
        icon: "&#9733;" 
    },
    {
        text: "Great value for money and the team was very supportive throughout.",
        author: "Michael Brown",
        icon: "&#9733;" 
    },
    {
        text: "I'm very satisfied with my purchase. The quality is top-notch and it arrived quickly.",
        author: "Emily Davis",
        icon: "&#9733;" 
    }
];

let currentIndex = 0;

const testimonialContainer = document.getElementById('testimonialContainer');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');

function displayTestimonial(index) {
    testimonialContainer.innerHTML = `
        <div class="testimonial-item">
            <div class="icon">${testimonials[index].icon}</div>
            <div class="text">${testimonials[index].text}</div>
            <div class="author">${testimonials[index].author}</div>
        </div>
    `;
}

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    displayTestimonial(currentIndex);
}

function showPreviousTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    displayTestimonial(currentIndex);
}

prevTestimonial.addEventListener('click', showPreviousTestimonial);
nextTestimonial.addEventListener('click', showNextTestimonial);




displayTestimonial(currentIndex);
