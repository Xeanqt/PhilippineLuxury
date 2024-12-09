// Carousel functionality
class Carousel {
    constructor(element) {
        this.element = element;
        this.items = element.querySelectorAll('.carousel-item');
        this.totalItems = this.items.length;
        this.currentIndex = 0;
        
        this.initControls();
        this.initPagination();
        this.showItem(0);
    }
    
    initControls() {
        const prevButton = this.element.querySelector('.carousel-prev');
        const nextButton = this.element.querySelector('.carousel-next');
        
        prevButton.addEventListener('click', () => this.prev());
        nextButton.addEventListener('click', () => this.next());
    }
    
    initPagination() {
        const pagination = this.element.querySelector('.carousel-pagination');
        
        for (let i = 0; i < this.totalItems; i++) {
            const dot = document.createElement('button');
            dot.setAttribute('aria-label', `Scroll to page ${i + 1}`);
            dot.addEventListener('click', () => this.showItem(i));
            pagination.appendChild(dot);
        }
    }
    
    showItem(index) {
        this.items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
        this.currentIndex = index;
        this.updatePagination();
    }
    
    prev() {
        const newIndex = this.currentIndex === 0 ? this.totalItems - 1 : this.currentIndex - 1;
        this.showItem(newIndex);
    }
    
    next() {
        const newIndex = this.currentIndex === this.totalItems - 1 ? 0 : this.currentIndex + 1;
        this.showItem(newIndex);
    }
    
    updatePagination() {
        const dots = this.element.querySelectorAll('.carousel-pagination button');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
});