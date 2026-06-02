// Main Application Logic
class MedicinalFoodApp {
    constructor() {
        this.foods = medicinalFoods;
        this.filteredFoods = [];
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.bindEvents();
        this.displayAllFoods();
        this.updateResultsCount();
    }

    bindEvents() {
        // Search functionality
        document.getElementById('search-btn').addEventListener('click', () => this.handleSearch());
        document.getElementById('search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });

        // Filter functionality
        document.getElementById('food-type-filter').addEventListener('change', () => this.applyFilters());
        document.getElementById('sort-filter').addEventListener('change', () => this.applyFilters());
        document.getElementById('reset-filters').addEventListener('click', () => this.resetFilters());

        // Quick tags
        document.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('click', (e) => {
                const problem = e.target.getAttribute('data-problem');
                document.getElementById('search-input').value = problem;
                this.handleSearch();
            });
        });

        // Language selector
        document.getElementById('language-selector').addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            this.handleLanguageChange();
        });

        // Modal functionality
        this.setupModal();
    }

    setupModal() {
        const modal = document.getElementById('food-modal');
        const closeBtn = document.querySelector('.close-modal');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    handleSearch() {
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
        
        if (searchTerm === '') {
            this.filteredFoods = this.foods;
        } else {
            this.filteredFoods = this.foods.filter(food => 
                food.problem.toLowerCase().includes(searchTerm) ||
                food.name.toLowerCase().includes(searchTerm) ||
                food.nutrients.toLowerCase().includes(searchTerm) ||
                food.ingredients.toLowerCase().includes(searchTerm)
            );
        }

        this.applyFilters();
        this.updateResultsCount();
    }

    applyFilters() {
        let filtered = [...this.filteredFoods];
        const foodTypeFilter = document.getElementById('food-type-filter').value;
        const sortFilter = document.getElementById('sort-filter').value;

        // Apply food type filter
        if (foodTypeFilter !== 'all') {
            filtered = filtered.filter(food => food.type === foodTypeFilter);
        }

        // Apply sorting
        if (sortFilter === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortFilter === 'time') {
            filtered.sort((a, b) => this.parseTime(a.time) - this.parseTime(b.time));
        } else if (sortFilter === 'problem') {
            filtered.sort((a, b) => a.problem.localeCompare(b.problem));
        }

        this.displayFoods(filtered);
    }

    resetFilters() {
        document.getElementById('search-input').value = '';
        document.getElementById('food-type-filter').value = 'all';
        document.getElementById('sort-filter').value = 'name';
        this.filteredFoods = this.foods;
        this.applyFilters();
        this.updateResultsCount();
    }

    parseTime(timeString) {
        // Convert time strings to minutes for sorting
        const time = timeString.toLowerCase();
        if (time.includes('hour')) {
            const hours = parseInt(time) || 1;
            return hours * 60;
        } else if (time.includes('min')) {
            return parseInt(time) || 5;
        }
        return 0;
    }

    displayAllFoods() {
        this.filteredFoods = this.foods;
        this.displayFoods(this.foods);
    }

    displayFoods(foods) {
        const foodGrid = document.getElementById('food-grid');
        const noResults = document.getElementById('no-results');

        if (foods.length === 0) {
            foodGrid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        foodGrid.innerHTML = foods.map(food => this.createFoodCard(food)).join('');
        
        // Add click event listeners to all food cards
        document.querySelectorAll('.food-card').forEach((card, index) => {
            card.addEventListener('click', () => this.showFoodDetail(foods[index]));
        });
    }

    createFoodCard(food) {
        return `
            <div class="food-card" data-id="${food.id}">
                <img src="${food.image}" alt="${food.name}" class="food-image">
                <div class="food-info">
                    <h3 class="food-name">${food.name}</h3>
                    <p class="food-problem"><i class="fas fa-stethoscope"></i> Helps with: ${food.problem}</p>
                    <div class="food-time">
                        <i class="fas fa-clock"></i>
                        <span>${food.time}</span>
                    </div>
                    <p class="food-nutrients"><strong>Key Nutrients:</strong> ${food.nutrients}</p>
                    <span class="food-type">
                        ${food.type === 'veg' ? '<i class="fas fa-leaf"></i> Vegetarian' : '<i class="fas fa-drumstick-bite"></i> Non-Vegetarian'}
                    </span>
                </div>
            </div>
        `;
    }

    showFoodDetail(food) {
        const modal = document.getElementById('food-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = this.createFoodDetailHTML(food);
        modal.style.display = 'block';
    }

    createFoodDetailHTML(food) {
        return `
            <div class="food-detail">
                <img src="${food.image}" alt="${food.name}" class="detail-image">
                <div class="detail-content">
                    <div class="detail-header">
                        <div>
                            <h1 class="detail-title">${food.name}</h1>
                            <p class="food-problem"><i class="fas fa-stethoscope"></i> <strong>Target Problem:</strong> ${food.problem}</p>
                        </div>
                        <span class="food-type">
                            ${food.type === 'veg' ? '<i class="fas fa-leaf"></i> Vegetarian' : '<i class="fas fa-drumstick-bite"></i> Non-Vegetarian'}
                        </span>
                    </div>

                    <div class="detail-meta">
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            <span>Preparation Time: ${food.time}</span>
                        </div>
                    </div>

                    <div class="detail-section">
                        <h3><i class="fas fa-apple-alt"></i> Key Nutrients</h3>
                        <p>${food.nutrients}</p>
                    </div>

                    <div class="detail-section">
                        <h3><i class="fas fa-list"></i> Ingredients</h3>
                        <ul class="ingredients-list">
                            ${food.ingredients.split(',').map(ingredient => 
                                `<li>${ingredient.trim()}</li>`
                            ).join('')}
                        </ul>
                    </div>

                    <div class="detail-section">
                        <h3><i class="fas fa-utensils"></i> Recipe Instructions</h3>
                        <div class="recipe-steps">
                            ${food.recipe.split('.').filter(step => step.trim()).map(step => 
                                `<p>${step.trim()}.</p>`
                            ).join('')}
                        </div>
                    </div>

                    <div class="detail-section">
                        <h3><i class="fas fa-heart"></i> Health Benefits</h3>
                        <p>This remedy helps with ${food.problem.toLowerCase()} through its rich content of ${food.nutrients.toLowerCase()}.</p>
                    </div>
                </div>
            </div>
        `;
    }

    updateResultsCount() {
        const count = this.filteredFoods.length;
        const resultsCount = document.getElementById('results-count');
        resultsCount.textContent = `Found ${count} remedy${count !== 1 ? 'ies' : ''} matching your search`;
    }

    handleLanguageChange() {
        // This would typically load different language files
        // For now, we'll just show an alert
        const languages = {
            'en': 'English',
            'ta': 'Tamil',
            'hi': 'Hindi'
        };
        
        // Show a temporary message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-green);
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            z-index: 3000;
            box-shadow: var(--shadow);
        `;
        message.textContent = `Language changed to ${languages[this.currentLanguage]}`;
        document.body.appendChild(message);
        
        setTimeout(() => {
            document.body.removeChild(message);
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MedicinalFoodApp();
});