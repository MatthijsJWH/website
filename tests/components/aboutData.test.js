// tests/components/aboutData.test.js
import { describe, it, expect } from 'vitest';

// Sample data structure similar to what's used in the About page
const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Example Tech',
    period: '2021 - Present',
    description: 'Developing modern web applications using JavaScript frameworks.'
  },
  {
    title: 'Web Developer',
    company: 'Digital Solutions Inc.',
    period: '2018 - 2021',
    description: 'Built responsive websites and web applications.'
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2012 - 2016',
    description: 'Focused on software engineering, algorithms, and web development.'
  }
];

const technicalSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 85 }
];

describe('About Page Data Structure', () => {
  describe('Experiences', () => {
    it('contains the expected experience properties', () => {
      experiences.forEach(exp => {
        expect(exp).toHaveProperty('title');
        expect(exp).toHaveProperty('company');
        expect(exp).toHaveProperty('period');
        expect(exp).toHaveProperty('description');
      });
    });
    
    it('has valid period format', () => {
      experiences.forEach(exp => {
        expect(exp.period).toMatch(/^\d{4}( - (Present|\d{4}))?$/);
      });
    });
  });
  
  describe('Education', () => {
    it('contains the expected education properties', () => {
      education.forEach(edu => {
        expect(edu).toHaveProperty('degree');
        expect(edu).toHaveProperty('institution');
        expect(edu).toHaveProperty('period');
        expect(edu).toHaveProperty('description');
      });
    });
    
    it('has valid period format', () => {
      education.forEach(edu => {
        expect(edu.period).toMatch(/^\d{4} - \d{4}$/);
      });
    });
  });
  
  describe('Technical Skills', () => {
    it('contains the expected skill properties', () => {
      technicalSkills.forEach(skill => {
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('level');
      });
    });
    
    it('has valid skill levels', () => {
      technicalSkills.forEach(skill => {
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      });
    });
  });
});
