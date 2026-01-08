import { useEffect } from 'react';

export const ChromeCompatibilityFix = () => {
  useEffect(() => {
    // Fix button glow effects in Chrome
    const addButtonGlow = () => {
      const buttons = document.querySelectorAll('a, button, input[type="submit"]');
      buttons.forEach((button) => {
        const element = button as HTMLElement;
        const classes = element.className || '';
        
        // Check if button has green background color
        const computedStyle = getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        const hasGreenBg = classes.includes('bg-[#787e59]') || 
                          bgColor === 'rgb(120, 126, 89)' ||
                          bgColor === 'rgba(120, 126, 89, 1)';
        
        if (hasGreenBg) {
          // Check if shadow is already applied via Tailwind
          const hasShadow = computedStyle.boxShadow && computedStyle.boxShadow !== 'none';
          
          // Only add if shadow is missing or very weak
          if (!hasShadow || computedStyle.boxShadow.includes('rgba(0, 0, 0')) {
            // Store original shadow if it exists
            const originalShadow = element.getAttribute('data-original-shadow') || computedStyle.boxShadow;
            if (originalShadow && originalShadow !== 'none') {
              element.setAttribute('data-original-shadow', originalShadow);
            }
            
            // Apply glow effect
            element.style.setProperty('box-shadow', '0 0 20px rgba(120, 126, 89, 0.5), 0 0 40px rgba(120, 126, 89, 0.3)', 'important');
            element.style.setProperty('-webkit-box-shadow', '0 0 20px rgba(120, 126, 89, 0.5), 0 0 40px rgba(120, 126, 89, 0.3)', 'important');
            
            // Add hover effect only if not already added
            if (!element.hasAttribute('data-glow-fixed')) {
              element.setAttribute('data-glow-fixed', 'true');
              
              element.addEventListener('mouseenter', function() {
                this.style.setProperty('box-shadow', '0 0 30px rgba(120, 126, 89, 0.7), 0 0 60px rgba(120, 126, 89, 0.5)', 'important');
                this.style.setProperty('-webkit-box-shadow', '0 0 30px rgba(120, 126, 89, 0.7), 0 0 60px rgba(120, 126, 89, 0.5)', 'important');
              }, { once: false });
              
              element.addEventListener('mouseleave', function() {
                this.style.setProperty('box-shadow', '0 0 20px rgba(120, 126, 89, 0.5), 0 0 40px rgba(120, 126, 89, 0.3)', 'important');
                this.style.setProperty('-webkit-box-shadow', '0 0 20px rgba(120, 126, 89, 0.5), 0 0 40px rgba(120, 126, 89, 0.3)', 'important');
              }, { once: false });
            }
          }
        }
      });
    };

    // Fix gradient overlay in Chrome
    const fixGradientOverlay = () => {
      const gradientElements = document.querySelectorAll('[class*="bg-gradient-to-r"][class*="from-gray-900"]');
      gradientElements.forEach((element) => {
        const el = element as HTMLElement;
        if (!el.style.backgroundImage || !el.style.backgroundImage.includes('linear-gradient')) {
          el.style.backgroundImage = 'linear-gradient(to right, rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.55), transparent)';
          el.style.webkitBackgroundImage = 'linear-gradient(to right, rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.55), transparent)';
        }
      });
    };

    // Run on load
    addButtonGlow();
    fixGradientOverlay();

    // Run again after a short delay to catch dynamically loaded content
    setTimeout(() => {
      addButtonGlow();
      fixGradientOverlay();
    }, 100);

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      addButtonGlow();
      fixGradientOverlay();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

