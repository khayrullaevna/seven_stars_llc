import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (!window.googleTranslateScriptLoaded) {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(googleTranslateScript);
      window.googleTranslateScriptLoaded = true; 

      window.googleTranslateElementInit = () => {
        if (!window.googleTranslateInitialized) {
          new window.google.translate.TranslateElement(
            {pageLanguage: 'en'}, 
            'google_translate_element'
          );
          window.googleTranslateInitialized = true; 
        }
      };
    }

    return () => {
    };
  }, []);

  return <div id="google_translate_element" className="google-translate"></div>;
};

export default GoogleTranslate;


