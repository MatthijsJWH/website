<script>
  import { onMount } from 'svelte';
  
  let skills = [
    { name: 'Frontend Development', icon: '💻' },
    { name: 'Backend Development', icon: '🔧' },
    { name: 'Database Design', icon: '🗄️' },
    { name: 'API Integration', icon: '🔄' },
    { name: 'DevOps', icon: '🚀' },
    { name: 'Handball', icon: '🤾' }
  ];
  
  let isVisible = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>Matthijs Halvemaan | Full Stack Developer</title>
  <meta name="description" content="Personal website of Matthijs Halvemaan, a full stack software developer, handball enthusiast, and all-around geek." />
</svelte:head>

<section class="hero {isVisible ? 'visible' : ''}">
  <div class="hero-content">
    <h1>Hi, I'm <span class="text-primary">Matthijs Halvemaan</span></h1>
    <p class="hero-subtitle">Full Stack Developer | Handball Enthusiast | Geek</p>
    <p class="hero-description">
      I build modern web applications with a focus on clean code, performance, and user experience.
    </p>
    <div class="hero-buttons">
      <a href="/about" class="btn">About Me</a>
      <a href="/blog" class="btn btn-outline">Read My Blog</a>
    </div>
  </div>
  <div class="hero-image">
    <div class="avatar-placeholder">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <span>MH</span>
    </div>
  </div>
</section>

<section class="skills">
  <h2>What I Do</h2>
  <div class="skills-grid">
    {#each skills as skill}
      <div class="skill-card">
        <div class="skill-icon">{skill.icon}</div>
        <h3>{skill.name}</h3>
      </div>
    {/each}
  </div>
</section>

<section class="cta">
  <div class="cta-content">
    <h2>Interested in working together?</h2>
    <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
    <a href="/about#contact" class="btn">Get In Touch</a>
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 4rem 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .hero.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    max-width: 500px;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .avatar-placeholder {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: var(--primary-light);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: bold;
    position: relative;
    overflow: hidden;
  }
  
  .avatar-placeholder svg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
  
  .skills {
    padding: 4rem 0;
    text-align: center;
  }
  
  .skills h2 {
    margin-bottom: 2rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .skill-card {
    background-color: var(--background-alt);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
  }
  
  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .skill-card h3 {
    font-size: 1.25rem;
    margin-bottom: 0;
  }
  
  .cta {
    background-color: var(--primary-color);
    color: white;
    padding: 4rem 0;
    margin: 4rem 0 2rem;
    border-radius: 0.5rem;
  }
  
  .cta-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .cta h2 {
    color: white;
    margin-bottom: 1rem;
  }
  
  .cta p {
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .cta .btn {
    background-color: white;
    color: var(--primary-color);
  }
  
  .cta .btn:hover {
    background-color: var(--background-alt);
  }
  
  @media (max-width: 768px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .hero-content {
      order: 2;
    }
    
    .hero-image {
      order: 1;
      margin-bottom: 2rem;
    }
    
    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-buttons {
      justify-content: center;
    }
    
    .avatar-placeholder {
      width: 200px;
      height: 200px;
      font-size: 3rem;
    }
  }
</style>
