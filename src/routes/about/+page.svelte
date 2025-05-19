<script>
  // Timeline data for experience and education
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Example Tech',
      period: '2021 - Present',
      description: 'Developing modern web applications using JavaScript frameworks. Working on both frontend and backend systems, implementing database solutions, and ensuring high performance and scalability.'
    },
    {
      title: 'Web Developer',
      company: 'Digital Solutions Inc.',
      period: '2018 - 2021',
      description: 'Built responsive websites and web applications. Collaborated with design and product teams to implement user interfaces and integrate backend services.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2016 - 2018',
      description: 'Started my career working on various web development projects. Gained experience with HTML, CSS, JavaScript, and various frameworks and libraries.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2012 - 2016',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.'
    }
  ];

  // Skills with proficiency levels
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Svelte/SvelteKit', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 }
  ];
</script>

<svelte:head>
  <title>About Me | Matthijs Halvemaan</title>
  <meta name="description" content="Learn more about Matthijs Halvemaan, a full stack developer with experience in modern web technologies." />
</svelte:head>

<div class="about-page">
  <section class="about-intro">
    <h1>About Me</h1>
    <div class="about-content">
      <div class="about-text">
        <p>
          Hello! I'm Matthijs Halvemaan, a passionate full stack developer with a love for creating 
          elegant, efficient, and user-friendly web applications. With several years of experience 
          in the industry, I've worked on a variety of projects ranging from small business websites 
          to complex enterprise applications.
        </p>
        <p>
          When I'm not coding, you can find me on the handball court. I've been playing handball 
          for many years, and it's a sport that has taught me a lot about teamwork, strategy, and 
          perseverance – skills that I bring to my development work as well.
        </p>
        <p>
          As a self-proclaimed geek, I'm always exploring new technologies, reading about the latest 
          advancements in tech, and experimenting with side projects. I believe in continuous learning 
          and staying ahead of the curve in this ever-evolving field.
        </p>
      </div>
      <div class="about-image">
        <div class="profile-placeholder">
          <span>MH</span>
        </div>
      </div>
    </div>
  </section>

  <section class="skills-section">
    <h2>Technical Skills</h2>
    <div class="skills-container">
      {#each technicalSkills as skill}
        <div class="skill-item">
          <div class="skill-info">
            <span class="skill-name">{skill.name}</span>
            <span class="skill-percentage">{skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: {skill.level}%"></div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="timeline-section">
    <h2>Work Experience</h2>
    <div class="timeline">
      {#each experiences as exp}
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>{exp.title}</h3>
            <div class="timeline-info">
              <span class="company">{exp.company}</span>
              <span class="period">{exp.period}</span>
            </div>
            <p>{exp.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="timeline-section">
    <h2>Education</h2>
    <div class="timeline">
      {#each education as edu}
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>{edu.degree}</h3>
            <div class="timeline-info">
              <span class="company">{edu.institution}</span>
              <span class="period">{edu.period}</span>
            </div>
            <p>{edu.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="interests-section">
    <h2>Interests & Hobbies</h2>
    <div class="interests-grid">
      <div class="interest-card">
        <div class="interest-icon">🤾</div>
        <h3>Handball</h3>
        <p>Active player and enthusiast. I love the teamwork and strategy involved in the game.</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon">💻</div>
        <h3>Coding Projects</h3>
        <p>Working on side projects to explore new technologies and frameworks.</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon">📚</div>
        <h3>Tech Reading</h3>
        <p>Staying up-to-date with the latest in technology and software development.</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon">🎮</div>
        <h3>Gaming</h3>
        <p>Enjoy both video games and board games as a way to relax and connect with friends.</p>
      </div>
    </div>
  </section>

  <section class="contact-section" id="contact">
    <h2>Get In Touch</h2>
    <p>Interested in working together or just want to say hi? Feel free to reach out!</p>
    <div class="contact-methods">
      <a href="mailto:contact@example.com" class="contact-method">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span>Email</span>
      </a>
      <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" class="contact-method">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" class="contact-method">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>GitHub</span>
      </a>
    </div>
  </section>
</div>

<style>
  .about-page {
    max-width: 900px;
    margin: 0 auto;
  }

  .about-intro {
    margin-bottom: 3rem;
  }

  .about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .about-text p {
    margin-bottom: 1rem;
  }

  .profile-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: var(--primary-light);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
  }

  .skills-section,
  .timeline-section,
  .interests-section,
  .contact-section {
    margin-bottom: 4rem;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .skill-item {
    margin-bottom: 1rem;
  }

  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .skill-bar {
    height: 8px;
    background-color: var(--background-alt);
    border-radius: 4px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 4px;
  }

  .timeline {
    position: relative;
    padding-left: 2rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--primary-light);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2rem;
  }

  .timeline-marker {
    position: absolute;
    left: -2.45rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid var(--background-color);
  }

  .timeline-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: var(--text-muted);
  }

  .interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .interest-card {
    background-color: var(--background-alt);
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: center;
  }

  .interest-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .contact-section {
    text-align: center;
  }

  .contact-methods {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .contact-method {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    transition: color 0.2s ease;
  }

  .contact-method:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    .about-content {
      grid-template-columns: 1fr;
    }

    .about-image {
      display: flex;
      justify-content: center;
      order: -1;
      margin-bottom: 2rem;
    }

    .contact-methods {
      flex-direction: column;
      gap: 1rem;
    }

    .contact-method {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
