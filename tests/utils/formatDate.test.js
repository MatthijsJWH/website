// tests/utils/formatDate.test.js
import { describe, it, expect } from 'vitest';
import { formatDate } from '../../src/lib/utils/formatDate';

describe('formatDate utility', () => {
  it('formats a date string correctly', () => {
    const result = formatDate('2025-05-01');
    // Using a regex to match the expected format (e.g., "May 1, 2025")
    expect(result).toMatch(/[A-Z][a-z]+ \d{1,2}, \d{4}/);
    expect(result).toContain('2025');
  });
  
  it('returns empty string for empty input', () => {
    expect(formatDate('')).toBe('');
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });
  
  it('accepts custom formatting options', () => {
    const result = formatDate('2025-05-01', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    // Should be in format like "May 1, 2025" but with short month
    expect(result).toMatch(/[A-Z][a-z]{2} \d{1,2}, \d{4}/);
  });
  
  it('handles invalid dates gracefully', () => {
    const invalidDate = 'not-a-date';
    // When an invalid date is passed, it will create an "Invalid Date" object
    // Our implementation should return the original string
    const result = formatDate(invalidDate);
    expect(result).toBe(invalidDate);
  });
});
