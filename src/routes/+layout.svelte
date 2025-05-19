<script>
  import { onMount } from 'svelte';
  import '../lib/styles/global.css';
  
  let isDarkMode = false;
  
  onMount(() => {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    updateTheme();
  });
  
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
  }
  
  function updateTheme() {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<div class="app">
  <header>
    <div class="container">
      <nav>
        <a href="/" class="logo">Matthijs Halvemaan</a>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
          {#if isDarkMode}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          {/if}
        </button>
      </nav>
    </div>
  </header>
  
  <main>
    <div class="container">
      <slot />
    </div>
  </main>
  
  <footer>
    <div class="container">
      <p>&copy; {new Date().getFullYear()} Matthijs Halvemaan. All rights reserved.</p>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  header {
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-left: 2rem;
  }
  
  .nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .nav-links a:hover {
    color: var(--primary-color);
  }
  
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  main {
    flex: 1;
    padding: 2rem 0;
  }
  
  footer {
    padding: 1.5rem 0;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: var(--text-muted);
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
