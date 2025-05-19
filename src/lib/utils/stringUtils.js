/**
 * Truncates a string to a specified length and adds an ellipsis if truncated
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated string with ellipsis if needed
 */
export function truncateString(str, maxLength = 100) {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Removes HTML tags from a string
 * @param {string} html - String containing HTML
 * @returns {string} - Plain text without HTML tags
 */
export function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The input string
 * @returns {string} - String with first letter of each word capitalized
 */
export function capitalizeWords(str) {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
