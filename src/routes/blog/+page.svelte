<script>
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with SvelteKit',
      excerpt: 'SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. In this post, we explore the basics of getting started with SvelteKit.',
      date: '2025-05-01',
      category: 'Web Development',
      image: '/images/blog/sveltekit.jpg'
    },
    {
      id: 2,
      title: 'The Art of Handball: Strategy and Teamwork',
      excerpt: 'Handball is a fast-paced team sport that combines elements of basketball, soccer, and water polo. In this post, I share some insights on handball strategy and the importance of teamwork.',
      date: '2025-04-15',
      category: 'Handball',
      image: '/images/blog/handball.jpg'
    },
    {
      id: 3,
      title: 'Modern CSS Techniques Every Developer Should Know',
      excerpt: 'CSS has evolved significantly in recent years. This post covers some of the most useful modern CSS techniques that can make your life as a developer much easier.',
      date: '2025-03-28',
      category: 'Web Development',
      image: '/images/blog/css.jpg'
    },
    {
      id: 4,
      title: 'Building a Dark Mode Toggle with Svelte',
      excerpt: 'Dark mode has become a popular feature in modern web applications. Learn how to implement a smooth dark mode toggle using Svelte and CSS variables.',
      date: '2025-03-10',
      category: 'Web Development',
      image: '/images/blog/dark-mode.jpg'
    },
    {
      id: 5,
      title: 'My Favorite Developer Tools in 2025',
      excerpt: 'As a developer, having the right tools can significantly improve your productivity. Here are some of my favorite tools and extensions that I use daily in 2025.',
      date: '2025-02-22',
      category: 'Tools',
      image: '/images/blog/dev-tools.jpg'
    }
  ];

  // Filter function for categories
  let selectedCategory = 'All';
  $: filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
</script>

<svelte:head>
  <title>Blog | Matthijs Halvemaan</title>
  <meta name="description" content="Read articles about web development, handball, and technology written by Matthijs Halvemaan." />
</svelte:head>

<div class="blog-page">
  <header class="blog-header">
    <h1>My Blog</h1>
    <p>Thoughts, stories, and ideas about web development, handball, and technology.</p>
  </header>

  <div class="blog-filter">
    <div class="category-filter">
      <span>Filter by:</span>
      <div class="category-buttons">
        {#each categories as category}
          <button 
            class="category-btn {selectedCategory === category ? 'active' : ''}" 
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <div class="blog-posts">
    {#if filteredPosts.length > 0}
      {#each filteredPosts as post}
        <article class="blog-card">
          <div class="blog-card-image">
            <div class="image-placeholder">
              <span>{post.category[0]}</span>
            </div>
          </div>
          <div class="blog-card-content">
            <div class="blog-meta">
              <span class="blog-category">{post.category}</span>
              <span class="blog-date">{formatDate(post.date)}</span>
            </div>
            <h2><a href={`/blog/${post.id}`}>{post.title}</a></h2>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`} class="read-more">Read More →</a>
          </div>
        </article>
      {/each}
    {:else}
      <div class="no-posts">
        <p>No posts found in this category.</p>
      </div>
    {/if}
  </div>

  <div class="blog-pagination">
    <button class="pagination-btn" disabled>← Previous</button>
    <div class="pagination-numbers">
      <button class="pagination-number active">1</button>
    </div>
    <button class="pagination-btn" disabled>Next →</button>
  </div>

  <section class="newsletter">
    <div class="newsletter-content">
      <h2>Subscribe to my newsletter</h2>
      <p>Get notified when I publish new articles. No spam, just quality content.</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Your email address" required />
        <button type="submit" class="btn">Subscribe</button>
      </form>
    </div>
  </section>
</div>

<style>
  .blog-page {
    max-width: 900px;
    margin: 0 auto;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .blog-header h1 {
    margin-bottom: 0.5rem;
  }

  .blog-header p {
    color: var(--text-muted);
    font-size: 1.125rem;
  }

  .blog-filter {
    margin-bottom: 2rem;
  }

  .category-filter {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .category-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .category-btn {
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--text-color);
  }

  .category-btn:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .category-btn.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
  }

  .blog-posts {
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1.5rem;
    background-color: var(--background-color);
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .blog-card-image {
    height: 100%;
    min-height: 200px;
    background-color: var(--primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }

  .blog-card-content {
    padding: 1.5rem;
  }

  .blog-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
  }

  .blog-category {
    color: var(--primary-color);
    font-weight: 500;
  }

  .blog-date {
    color: var(--text-muted);
  }

  .blog-card h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .blog-card h2 a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .blog-card h2 a:hover {
    color: var(--primary-color);
  }

  .blog-card p {
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .read-more {
    font-weight: 500;
    display: inline-block;
  }

  .no-posts {
    text-align: center;
    padding: 3rem;
    background-color: var(--background-alt);
    border-radius: 0.5rem;
  }

  .blog-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  .pagination-btn {
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pagination-btn:not([disabled]):hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .pagination-btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination-numbers {
    display: flex;
    gap: 0.5rem;
  }

  .pagination-number {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pagination-number:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .pagination-number.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
  }

  .newsletter {
    background-color: var(--background-alt);
    border-radius: 0.5rem;
    padding: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .newsletter-content {
    max-width: 600px;
    margin: 0 auto;
  }

  .newsletter h2 {
    margin-bottom: 1rem;
  }

  .newsletter p {
    margin-bottom: 2rem;
  }

  .newsletter-form {
    display: flex;
    gap: 1rem;
  }

  .newsletter-form input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .newsletter-form input:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    .blog-card {
      grid-template-columns: 1fr;
    }

    .blog-card-image {
      min-height: 150px;
    }

    .newsletter-form {
      flex-direction: column;
    }
  }
</style>
