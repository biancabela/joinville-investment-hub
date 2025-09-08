/**
 * Utility function to handle external link navigation
 * Works in both iframe (preview) and standalone environments
 */
export const openExternalLink = (url: string) => {
  try {
    // Check if we're in an iframe (preview environment)
    if (window.parent && window.parent !== window) {
      // Try to open in parent window first
      window.parent.open(url, '_blank');
    } else {
      // Normal environment
      window.open(url, '_blank');
    }
  } catch (error) {
    // Fallback: try window.top or direct navigation
    try {
      if (window.top) {
        window.top.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    } catch (fallbackError) {
      // Last resort: navigate in current window
      window.location.href = url;
    }
  }
};