// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Log a message to confirm the script is running
    console.log('Website loaded successfully!');

    // Get the main heading
    const mainHeading = document.querySelector('h1');
    const featuredTopics = document.querySelector('.featured-topics');

    // Add a simple click event to the heading
    mainHeading.addEventListener('click', function() {
        alert('Welcome to the website!');
    });

    // Add current year to footer copyright
    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Ethics Explorer | An Educational Resource`;

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';

    // Add event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Add input event listener to show/hide featured topics
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm === '') {
            featuredTopics.style.display = 'block';
            searchResults.innerHTML = '';
        } else {
            featuredTopics.style.display = 'none';
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentFilter = this.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            performSearch();
        });
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm === '') {
            searchResults.innerHTML = '<p class="result-item">Please enter a search term.</p>';
            featuredTopics.style.display = 'block';
            return;
        }

        // Hide featured topics when searching
        featuredTopics.style.display = 'none';

        let results = [];
        
        // Search through all categories in the database
        Object.keys(ethicsDatabase).forEach(category => {
            if (currentFilter === 'all' || currentFilter === category) {
                const categoryResults = ethicsDatabase[category].filter(item => {
                    // Search in name/title
                    if (item.name.toLowerCase().includes(searchTerm)) return true;
                    
                    // Search in description/definition if available
                    if (item.description && item.description.toLowerCase().includes(searchTerm)) return true;
                    if (item.definition && item.definition.toLowerCase().includes(searchTerm)) return true;
                    
                    // Search in main ideas if available
                    if (item.mainIdeas && item.mainIdeas.some(idea => idea.toLowerCase().includes(searchTerm))) return true;
                    
                    // Search in key thinkers if available
                    if (item.keyThinkers && item.keyThinkers.some(thinker => thinker.toLowerCase().includes(searchTerm))) return true;
                    
                    // Search in key works if available
                    if (item.keyWorks && item.keyWorks.some(work => work.toLowerCase().includes(searchTerm))) return true;

                    // Search in related concepts if available
                    if (item.relatedConcepts && item.relatedConcepts.some(concept => concept.toLowerCase().includes(searchTerm))) return true;
                    
                    return false;
                });
                results = results.concat(categoryResults);
            }
        });

        displayResults(results);
    }

    function displayResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="result-item">No results found. Try different search terms.</p>';
            return;
        }

        const resultsHTML = results.map(result => {
            let html = `
                <div class="result-item">
                    <span class="category">${capitalizeFirstLetter(result.category)}</span>
                    <h3>${result.name}</h3>
            `;

            if (result.period) {
                html += `<p><strong>Period:</strong> ${result.period}</p>`;
            }

            if (result.definition) {
                html += `<p>${result.definition}</p>`;
            } else if (result.description) {
                html += `<p>${result.description}</p>`;
            }

            if (result.mainIdeas) {
                html += `<p><strong>Main Ideas:</strong> ${result.mainIdeas.join(', ')}</p>`;
            }

            if (result.keyWorks) {
                html += `<p><strong>Key Works:</strong> ${result.keyWorks.join(', ')}</p>`;
            }

            if (result.keyThinkers) {
                html += `<p><strong>Key Thinkers:</strong> ${result.keyThinkers.join(', ')}</p>`;
            }

            if (result.relatedConcepts) {
                html += `<p><strong>Related Concepts:</strong> ${result.relatedConcepts.join(', ')}</p>`;
            }

            html += '</div>';
            return html;
        }).join('');

        searchResults.innerHTML = resultsHTML;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Initialize with some featured content
    displayFeaturedContent();

    function displayFeaturedContent() {
        // The featured content is already in the HTML, so we don't need to do anything here
        // But you could add dynamic featured content if desired
    }
}); 