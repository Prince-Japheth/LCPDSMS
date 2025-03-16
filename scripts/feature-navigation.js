/**
 * Feature Navigation Script
 * This script handles navigation from header links to specific features in guides.html
 */

document.addEventListener('DOMContentLoaded', function() {
    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Add click handlers to feature links in the header
    // This needs to be added after the header is loaded
    setTimeout(function() {
        // Feature links in dropdown menu
        $('.category-sub-menu .menu-item').click(function(e) {
            e.preventDefault();
            const featureName = $(this).text().trim();
            window.location.href = 'guides.html?feature=' + encodeURIComponent(featureName);
        });
        
        // Feature links in nice-select dropdown
        $('.nice-select.select-control .option').click(function() {
            if ($(this).data('value') && $(this).data('value') !== '') {
                const featureName = $(this).text().trim();
                window.location.href = 'guides.html?feature=' + encodeURIComponent(featureName);
            }
        });
    }, 500); // Wait for header to be fully loaded
    
    // Check if we're on the guides.html page - use setTimeout to run after page initialization
    if (window.location.pathname.includes('guides.html')) {
        // Use setTimeout to ensure this runs after the page's own initialization
        setTimeout(function() {
            // Get the feature parameter from URL
            const featureParam = getUrlParameter('feature');
            
            if (featureParam) {
                // Show the System Features section
                $('.content-section').addClass('d-none');
                $('#content3').removeClass('d-none');
                
                // Set the System Features sidebar link as active
                $('.sidebar a').removeClass('active');
                $('.sidebar a[data-target="#content3"]').addClass('active');
                
                // Find the feature in the content
                const featureElement = $('#content3 li strong:contains("' + featureParam + '")');
                
                if (featureElement.length > 0) {
                    // Scroll to the feature with animation
                    $('html, body').animate({
                        scrollTop: featureElement.offset().top - 150
                    }, 500);
                    
                    // Highlight the feature
                    const featureListItem = featureElement.closest('li');
                    featureListItem.css({
                        'background-color': 'rgba(214, 0, 0, 0.1)',
                        'border-radius': '10px',
                        'padding': '10px',
                        'transition': 'background-color 0.5s ease'
                    });
                    
                    // Remove highlight after 3 seconds
                    setTimeout(function() {
                        featureListItem.css({
                            'background-color': 'transparent',
                            'transition': 'background-color 1s ease'
                        });
                    }, 3000);
                }
            }
        }, 100); // Short delay to ensure it runs after page initialization
    }
});