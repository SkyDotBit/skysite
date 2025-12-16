// sets misskey corner roundness for users who are logged out
(function() {
    'use strict';
       
    function roundifyLoggedOut() {
        // try and see if user has a session
        const hasAuthToken = localStorage.getItem('account');
        
        // check if we have visitor-root-*
        const isWelcomePage = document.querySelector('[class*="visitor-root-"]');
        
        // compare both values to execute
        const isLoggedOut = !hasAuthToken;
        
        if (isLoggedOut) {
            // add radius-misskey if logged out
            document.documentElement.classList.add('radius-misskey');
            localStorage.clear();
            observer.disconnect(); // stop observing once we've done our job
        }
    }

    // we watch and wait until modifications to the html document happen first to execute, otherwise it doesn't work
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // execute once both html class and new elements are loaded in
            if ((mutation.type === 'attributes' && mutation.attributeName === 'class') || 
                mutation.type === 'childList') {
                roundifyLoggedOut();
            }
        });
    });

    // observe both html classes (modified once sharkey initializes) and body elements for changes (when visitor-root-* loads in)
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
        childList: true,
        subtree: true
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
