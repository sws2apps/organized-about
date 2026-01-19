// Function to get translated cookie consent text
function getCookieTranslations() {
  const translations = window.currentTranslations || {};
  
  return {
    consentModal: {
      title: translations.tr_cookieTitle || "Cookie preferences",
      description: translations.tr_cookieDesc || "We use cookies to save your language preference and understand site usage.",
      acceptAllBtn: translations.tr_cookieAcceptAll || "Accept all",
      acceptNecessaryBtn: translations.tr_cookieRejectAll || "Reject all",
      showSettingsBtn: translations.tr_cookieManagePreferences || "Manage preferences",
      footer: `<div style="display: flex; justify-content: space-between; width: 100%;"><a href="https://about.organized-app.com/#" style="color: #6b7280;">${translations.tr_cookiePrivacyPolicy || "Privacy Policy"}</a><a href="https://about.organized-app.com/#" style="color: #6b7280;">${translations.tr_cookieTerms || "Terms and conditions"}</a></div>`,
    },
    settingsModal: {
      title: translations.tr_cookieSettingsTitle || "Cookie preferences",
      acceptAllBtn: translations.tr_cookieSettingsAcceptAll || "Accept all",
      acceptNecessaryBtn: translations.tr_cookieSettingsRejectAll || "Reject all",
      saveSettingsBtn: translations.tr_cookieSettingsSave || "Save settings",
      closeIconLabel: translations.tr_cookieSettingsClose || "Close modal",
      serviceCounterLabel: "Service",
      sections: [
        {
          title: translations.tr_cookieUsageTitle || "Cookie Usage",
          description: translations.tr_cookieUsageDesc || 'We use cookies to ensure the basic functionalities of the website and to improve your experience. You can manage your preferences for each category below. For more details, please read our <a href="#" class="cc__link">privacy policy</a>.',
        },
        {
          title: translations.tr_cookieNecessaryTitle || "Strictly Necessary cookies",
          description: translations.tr_cookieNecessaryDesc || "These cookies are essential for the proper functioning of the website, such as remembering your language selection. Without these cookies, some features would not work as intended.",
          linkedCategory: "necessary",
        },
        {
          title: translations.tr_cookieAnalyticsTitle || "Analytics cookies",
          description: translations.tr_cookieAnalyticsDesc || "These cookies help us understand how visitors interact with the website, helping us find and fix issues and improve the overall experience.",
          linkedCategory: "analytics",
        },
        {
          title: translations.tr_cookieMoreInfoTitle || "More information",
          description: translations.tr_cookieMoreInfoDesc || 'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="mailto:support@organized-app.com">contact us</a>.',
        },
      ],
    },
  };
}

// Initialize CookieConsent
function initCookieConsent() {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box wide",
        position: "bottom right",
        equalWeightButtons: true,
        flipButtons: false,
      },
      settingsModal: {
        layout: "box",
        position: "left",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: {
        readOnly: true,
      },
      analytics: {
        enabled: false,
        readOnly: false,
      },
    },
    language: {
      default: "en",
      autoDetect: "browser",
      translations: {
        en: getCookieTranslations(),
      },
    },
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
  initCookieConsent();
}

// Update cookie consent when language changes
window.updateCookieConsentLanguage = function() {
  if (typeof CookieConsent !== 'undefined') {
    const translations = getCookieTranslations();
    CookieConsent.updateLanguage('en', translations);
  }
};
