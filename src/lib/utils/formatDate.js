/**
 * Formats a date string into a more readable format
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @param {Object} options - Formatting options for toLocaleDateString
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, options = { year: 'numeric', month: 'long', day: 'numeric' }) {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return dateString;
    }
    
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}
