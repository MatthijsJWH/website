// src/routes/blog/[id]/+page.spec.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';
import { page } from '$app/stores';

// Mock the $app/stores module
vi.mock('$app/stores', () => {
  const storeMock = {
    page: {
      subscribe: vi.fn()
    }
  };
  return {
    page: storeMock
  };
});

describe('Blog Post Page', () => {
  beforeEach(() => {
    // Setup the page store with mock data for the test
    page.subscribe.mockImplementation(callback => {
      callback({ params: { id: '1' } });
      return () => {};
    });
  });

  it('renders a blog post when given a valid ID', () => {
    render(Page);
    
    // Since we're mocking the ID to be 1, we should see the SvelteKit blog post
    setTimeout(() => {
      expect(screen.getByText(/Getting Started with SvelteKit/i)).toBeInTheDocument();
      expect(screen.getByText(/What is SvelteKit?/i)).toBeInTheDocument();
    }, 0);
  });
  
  it('displays post metadata correctly', () => {
    render(Page);
    
    setTimeout(() => {
      // Check for author name
      expect(screen.getByText('Matthijs Halvemaan')).toBeInTheDocument();
      
      // Check for category
      expect(screen.getByText('Web Development')).toBeInTheDocument();
      
      // Check for tags
      expect(screen.getByText('#SvelteKit')).toBeInTheDocument();
      expect(screen.getByText('#JavaScript')).toBeInTheDocument();
    }, 0);
  });
});
