<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  // Sample blog posts data - in a real app, this would come from a database or API
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with SvelteKit',
      content: `
        <p>SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. In this post, we'll explore the basics of getting started with SvelteKit.</p>
        
        <h2>What is SvelteKit?</h2>
        <p>SvelteKit is a framework for building web applications using Svelte. It handles all the routing, server-side rendering, and other complex tasks that are typically involved in building a modern web application.</p>
        
        <p>Unlike traditional frameworks that do a lot of work in the browser, Svelte shifts that work into a compile step that happens when you build your app. Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p>
        
        <h2>Setting Up a SvelteKit Project</h2>
        <p>Getting started with SvelteKit is straightforward. You can create a new project using the following command:</p>
        
        <pre><code>npm create svelte@latest my-app</code></pre>
        
        <p>This will prompt you to choose a project template, whether to add TypeScript support, and other configuration options. Once you've made your selections, you can navigate to your project directory and install the dependencies:</p>
        
        <pre><code>cd my-app
npm install</code></pre>
        
        <p>After the installation is complete, you can start the development server:</p>
        
        <pre><code>npm run dev</code></pre>
        
        <h2>Routing in SvelteKit</h2>
        <p>SvelteKit uses a file-based routing system. Each page of your app is defined by a Svelte component in the <code>src/routes</code> directory. For example, to create a page at the URL <code>/about</code>, you would create a file at <code>src/routes/about/+page.svelte</code>.</p>
        
        <p>Dynamic routes are handled using square brackets. For instance, to create a blog post page with a dynamic ID, you would create a file at <code>src/routes/blog/[id]/+page.svelte</code>.</p>
        
        <h2>Data Loading</h2>
        <p>SvelteKit provides several ways to load data for your pages. One common approach is to use the <code>+page.js</code> or <code>+page.server.js</code> files alongside your <code>+page.svelte</code> components. These files export a <code>load</code> function that fetches data before the page is rendered.</p>
        
        <p>For example, to fetch data for a blog post page, you might have a <code>+page.server.js</code> file that looks like this:</p>
        
        <pre>
          <code>export async function load({ params }) {
  const post = await fetchPost(params.id);
  return { post };
}</code>
        </pre>
        
        <p>Then, in your <code>+page.svelte</code> file, you can access this data using the <code>data</code> prop:</p>
        
        <pre>
          <code>&lt;script&gt;
    export let data;
    const { post } = data;
&lt;/script&gt;

&lt;h1&gt;{post.title}&lt;/h1&gt;
&lt;div&gt;{@html post.content}&lt;/div&gt;</code>
        </pre>
        
        <h2>Conclusion</h2>
        <p>SvelteKit provides a powerful yet simple framework for building modern web applications. Its file-based routing, server-side rendering capabilities, and seamless integration with Svelte make it an excellent choice for developers looking to build fast, responsive web apps.</p>
        
        <p>In future posts, we'll dive deeper into more advanced SvelteKit features, such as API routes, form actions, and deployment strategies. Stay tuned!</p>
      `,
      date: '2025-05-01',
      category: 'Web Development',
      author: 'Matthijs Halvemaan',
      tags: ['SvelteKit', 'JavaScript', 'Web Development', 'Frontend']
    },
    {
      id: 2,
      title: 'The Art of Handball: Strategy and Teamwork',
      content: `
        <p>Handball is a fast-paced team sport that combines elements of basketball, soccer, and water polo. In this post, I share some insights on handball strategy and the importance of teamwork.</p>
        
        <h2>Introduction to Handball</h2>
        <p>Handball is played between two teams of seven players each (six outfield players and a goalkeeper) on a court divided into two halves with a goal at each end. The objectives are simple: score goals by throwing the ball into the opponent's goal and prevent the opposing team from scoring.</p>
        
        <p>What makes handball unique is its combination of speed, physicality, and technical skill. Players need to be quick, strong, and agile, with good hand-eye coordination and the ability to think strategically under pressure.</p>
        
        <h2>Key Strategies in Handball</h2>
        
        <h3>Offensive Strategies</h3>
        <p>In handball, offensive strategies revolve around creating and exploiting spaces in the opponent's defense. Some common offensive tactics include:</p>
        
        <ul>
          <li><strong>Fast Breaks:</strong> Quickly transitioning from defense to offense before the opposing team can set up their defensive formation.</li>
          <li><strong>Positional Attacks:</strong> Methodical attacks against a set defense, involving coordinated movements and passes to create shooting opportunities.</li>
          <li><strong>Crossing:</strong> Players changing positions to confuse defenders and create openings.</li>
          <li><strong>Screening:</strong> Setting up screens to block defenders and create space for shooters.</li>
        </ul>
        
        <h3>Defensive Strategies</h3>
        <p>Defensive strategies in handball aim to prevent the opposing team from scoring while potentially creating opportunities for fast breaks. Common defensive systems include:</p>
        
        <ul>
          <li><strong>6-0 Defense:</strong> All defenders line up along the 6-meter line, focusing on protecting the goal area.</li>
          <li><strong>5-1 Defense:</strong> Five defenders stay near the 6-meter line, while one defender moves forward to disrupt the opponent's attack.</li>
          <li><strong>3-2-1 Defense:</strong> A more aggressive formation with defenders positioned at different depths to pressure the attackers.</li>
        </ul>
        
        <h2>The Importance of Teamwork</h2>
        <p>Handball is fundamentally a team sport where success depends on effective collaboration. Here's why teamwork is crucial in handball:</p>
        
        <h3>Communication</h3>
        <p>Clear and constant communication is essential in handball. Players need to communicate about defensive assignments, offensive plays, and potential opportunities during fast-paced gameplay.</p>
        
        <h3>Trust and Understanding</h3>
        <p>Players must trust their teammates to be in the right positions and make the right decisions. This trust is built through practice and developing an understanding of each other's tendencies and strengths.</p>
        
        <h3>Complementary Skills</h3>
        <p>A successful handball team leverages the diverse skills of its players. Some might excel at shooting from distance, others at breaking through defenses, and others at setting up teammates or defending.</p>
        
        <h2>Lessons from Handball</h2>
        <p>Playing handball has taught me valuable lessons that extend beyond the court:</p>
        
        <ul>
          <li><strong>Adaptability:</strong> The ability to quickly adjust to changing situations and opponents.</li>
          <li><strong>Resilience:</strong> Learning to bounce back from setbacks and maintain focus under pressure.</li>
          <li><strong>Leadership:</strong> Taking responsibility and guiding teammates in critical moments.</li>
          <li><strong>Collaboration:</strong> Understanding that collective success often outweighs individual achievement.</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Handball is more than just a sport—it's a complex interplay of strategy, skill, and teamwork. Whether you're a player, coach, or fan, appreciating these elements can enhance your understanding and enjoyment of the game.</p>
        
        <p>In future posts, I'll dive deeper into specific handball techniques, training methods, and match analyses. Stay tuned for more insights from the handball court!</p>
      `,
      date: '2025-04-15',
      category: 'Handball',
      author: 'Matthijs Halvemaan',
      tags: ['Handball', 'Sports', 'Teamwork', 'Strategy']
    }
  ];
  
  // Get the current post based on the ID parameter
  let post;
  let relatedPosts = [];
  let formattedDate = '';
  
  onMount(() => {
    const id = parseInt($page.params.id);
    post = blogPosts.find(p => p.id === id);
    
    if (post) {
      // Format the date
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      formattedDate = new Date(post.date).toLocaleDateString('en-US', options);
      
      // Get related posts (same category, excluding current post)
      relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);
    }
  });
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | Matthijs Halvemaan's Blog</title>
    <meta name="description" content={post.content.substring(0, 160).replace(/<[^>]*>/g, '')} />
  {:else}
    <title>Blog Post | Matthijs Halvemaan</title>
  {/if}
</svelte:head>

{#if post}
  <article class="blog-post">
    <header class="post-header">
      <div class="post-meta">
        <span class="post-category">{post.category}</span>
        <span class="post-date">{formattedDate}</span>
      </div>
      <h1>{post.title}</h1>
      <div class="post-author">
        <div class="author-avatar">MH</div>
        <div class="author-info">
          <span class="author-name">{post.author}</span>
        </div>
      </div>
    </header>
    
    <div class="post-content">
      {@html post.content}
    </div>
    
    <footer class="post-footer">
      <div class="post-tags">
        {#each post.tags as tag}
          <span class="tag">#{tag}</span>
        {/each}
      </div>
      
      <div class="post-share">
        <span>Share this post:</span>
        <div class="share-buttons">
          <button class="share-btn" aria-label="Share on Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </button>
          <button class="share-btn" aria-label="Share on Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </button>
          <button class="share-btn" aria-label="Share on LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </button>
        </div>
      </div>
    </footer>
  </article>
  
  {#if relatedPosts.length > 0}
    <section class="related-posts">
      <h2>Related Posts</h2>
      <div class="related-grid">
        {#each relatedPosts as related}
          <div class="related-card">
            <div class="related-category">{related.category}</div>
            <h3><a href={`/blog/${related.id}`}>{related.title}</a></h3>
            <p>{related.content.substring(0, 120).replace(/<[^>]*>/g, '')}...</p>
            <a href={`/blog/${related.id}`} class="read-more">Read More →</a>
          </div>
        {/each}
      </div>
    </section>
  {/if}
  
  <div class="post-navigation">
    <a href="/blog" class="back-to-blog">← Back to Blog</a>
  </div>
{:else}
  <div class="post-not-found">
    <h1>Post Not Found</h1>
    <p>Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
    <a href="/blog" class="btn">Back to Blog</a>
  </div>
{/if}

<style>
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .post-header {
    margin-bottom: 2rem;
  }
  
  .post-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }
  
  .post-category {
    color: var(--primary-color);
    font-weight: 500;
  }
  
  .post-date {
    color: var(--text-muted);
  }
  
  .post-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .post-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .author-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--primary-light);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  
  .author-name {
    font-weight: 500;
  }
  
  .post-content {
    line-height: 1.8;
    margin-bottom: 3rem;
  }
  
  .post-content :global(h2) {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .post-content :global(h3) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  .post-content :global(p) {
    margin-bottom: 1.5rem;
  }
  
  .post-content :global(ul), .post-content :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  .post-content :global(li) {
    margin-bottom: 0.5rem;
  }
  
  .post-content :global(pre) {
    background-color: var(--background-alt);
    padding: 1.5rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }
  
  .post-content :global(code) {
    font-family: var(--font-mono);
    font-size: 0.9em;
  }
  
  .post-footer {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
    margin-bottom: 3rem;
  }
  
  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tag {
    background-color: var(--background-alt);
    color: var(--text-muted);
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.875rem;
  }
  
  .post-share {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .share-buttons {
    display: flex;
    gap: 0.5rem;
  }
  
  .share-btn {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: var(--background-alt);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .share-btn:hover {
    background-color: var(--primary-light);
    color: white;
  }
  
  .related-posts {
    max-width: 800px;
    margin: 0 auto 4rem;
  }
  
  .related-posts :global(h2) {
    margin-bottom: 1.5rem;
  }
  
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .related-card {
    background-color: var(--background-alt);
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: transform 0.3s ease;
  }
  
  .related-card:hover {
    transform: translateY(-5px);
  }
  
  .related-category {
    color: var(--primary-color);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  
  .related-card :global(h3) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .related-card :global(h3) :global(a) {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .related-card :global(h3) :global(a):hover {
    color: var(--primary-color);
  }
  
  .related-card :global(p) {
    color: var(--text-muted);
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  
  .read-more {
    font-weight: 500;
    font-size: 0.875rem;
  }
  
  .post-navigation {
    max-width: 800px;
    margin: 0 auto 4rem;
    display: flex;
    justify-content: space-between;
  }
  
  .back-to-blog {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--background-alt);
    border-radius: 0.375rem;
    text-decoration: none;
    color: var(--text-color);
    transition: background-color 0.2s ease;
  }
  
  .back-to-blog:hover {
    background-color: var(--border-color);
  }
  
  .post-not-found {
    max-width: 600px;
    margin: 4rem auto;
    text-align: center;
  }
  
  .post-not-found :global(h1) {
    margin-bottom: 1rem;
  }
  
  .post-not-found :global(p) {
    margin-bottom: 2rem;
    color: var(--text-muted);
  }
  
  @media (max-width: 768px) {
    .post-header :global(h1) {
      font-size: 2rem;
    }
    
    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
