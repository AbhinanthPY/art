document.addEventListener('DOMContentLoaded', () => {
    console.log('SHANI Art website loaded');

    // Simple interaction for buttons
    const buyBtns = document.querySelectorAll('.buy-now-btn, .add-to-cart-btn');
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const originalText = this.innerText;

            if (this.classList.contains('buy-now-btn')) {
                alert('Thank you! This would take you to checkout.');
            } else {
                this.innerText = 'ADDED!';
                this.style.backgroundColor = '#ccc';
                this.style.borderColor = '#ccc';
                this.style.color = '#fff';

                setTimeout(() => {
                    this.innerText = originalText;
                    this.style.backgroundColor = '';
                    this.style.borderColor = '';
                    this.style.color = '';
                }, 2000);
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }



    // Add to Basket Buttons (Shop & Product Pages)
    const addToBasketBtns = document.querySelectorAll('.btn-shop-add, .add-to-cart-btn');
    addToBasketBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.closest('.product-card')?.querySelector('h4')?.innerText || 'Product';
            alert(`Added ${productName} to your basket!`);
        });
    });

    // Buy Now Button (Product Page)
    const buyNowBtn = document.querySelector('.buy-now-btn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            alert('Proceeding to checkout...');
        });
    }

    // Contact Form & Newsletter Subscription
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isNewsletter = form.querySelector('input[type="email"]')?.placeholder.includes('email');

            if (isNewsletter) {
                alert('Thank you for subscribing to our newsletter!');
            } else {
                alert('Thank you for your message! We will get back to you soon.');
            }
            form.reset();
        });
    });
});
