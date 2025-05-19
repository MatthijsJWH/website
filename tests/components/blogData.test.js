// tests/components/blogData.test.js
import { describe, it, expect } from 'vitest';

// Sample blog posts data structure similar to what's used in the actual component
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with SvelteKit',
    content: '<p>SvelteKit is a framework for building web applications of all sizes...</p>',
    date: '2025-05-01',
    category: 'Web Development',
    author: 'Matthijs Halvemaan',
    tags: ['SvelteKit', 'JavaScript', 'Web Development', 'Frontend']
  },
  {
    id: 2,
    title: 'The Art of Handball: Strategy and Teamwork',
    content: '<p>Handball is a fast-paced team sport that combines elements...</p>',
    date: '2025-04-15',
    category: 'Handball',
    author: 'Matthijs Halvemaan',
    tags: ['Handball', 'Sports', 'Teamwork', 'Strategy']
  }
];

describe('Blog Data Structure', () => {
  it('contains the expected blog post properties', () => {
    blogPosts.forEach(post => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('content');
      expect(post).toHaveProperty('date');
      expect(post).toHaveProperty('category');
      expect(post).toHaveProperty('author');
      expect(post).toHaveProperty('tags');
      
      // Check that tags is an array
      expect(Array.isArray(post.tags)).toBe(true);
    });
  });
  
  it('has valid date formats', () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    blogPosts.forEach(post => {
      expect(post.date).toMatch(dateRegex);
      
      // Check that the date is valid
      const date = new Date(post.date);
      expect(date.toString()).not.toBe('Invalid Date');
    });
  });
  
  it('has unique post IDs', () => {
    const ids = blogPosts.map(post => post.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids.length).toBe(uniqueIds.length);
  });
});
