// tests/utils/stringUtils.test.js
import { describe, it, expect } from 'vitest';
import { truncateString, stripHtml, capitalizeWords } from '../../src/lib/utils/stringUtils';

describe('String Utilities', () => {
  describe('truncateString', () => {
    it('truncates strings longer than maxLength', () => {
      const longString = 'This is a very long string that should be truncated';
      expect(truncateString(longString, 10)).toBe('This is a ...');
    });

    it('does not truncate strings shorter than maxLength', () => {
      const shortString = 'Short';
      expect(truncateString(shortString, 10)).toBe(shortString);
    });

    it('handles empty strings', () => {
      expect(truncateString('', 10)).toBe('');
      expect(truncateString(null, 10)).toBe('');
      expect(truncateString(undefined, 10)).toBe('');
    });

    it('uses default maxLength if not provided', () => {
      const longString = 'a'.repeat(150);
      expect(truncateString(longString)).toBe('a'.repeat(100) + '...');
    });
  });

  describe('stripHtml', () => {
    it('removes HTML tags from a string', () => {
      const htmlString = '<p>This is <strong>bold</strong> text</p>';
      expect(stripHtml(htmlString)).toBe('This is bold text');
    });

    it('returns original string if no HTML tags present', () => {
      const plainString = 'Just plain text';
      expect(stripHtml(plainString)).toBe(plainString);
    });

    it('handles empty strings', () => {
      expect(stripHtml('')).toBe('');
      expect(stripHtml(null)).toBe('');
      expect(stripHtml(undefined)).toBe('');
    });
  });

  describe('capitalizeWords', () => {
    it('capitalizes the first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    it('lowercases the rest of each word', () => {
      expect(capitalizeWords('hELLO wORLD')).toBe('Hello World');
    });

    it('handles empty strings', () => {
      expect(capitalizeWords('')).toBe('');
      expect(capitalizeWords(null)).toBe('');
      expect(capitalizeWords(undefined)).toBe('');
    });

    it('handles single words', () => {
      expect(capitalizeWords('javascript')).toBe('Javascript');
    });
  });
});
