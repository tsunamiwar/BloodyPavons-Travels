:root {
  --primary-color: #B22222;
  --secondary-color: #2E8B57;
  --accent-color: #FFD700;
  --dark-blue: #0B3D91;
  --light-bg: #fff8f0;
  --font-primary: 'Poppins', sans-serif;
  --font-secondary: 'Merriweather', serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-primary);
  background-color: var(--light-bg);
  color: #333;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.site-header {
  background-color: var(--dark-blue);
  color: white;
  padding: 1rem 0;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header .brand-text {
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 0.5rem;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.main-nav a:hover {
  text-decoration: underline;
}

.hero {
  background: linear-gradient(to right, rgba(255,248,240,0.9), rgba(255,255,255,0.95)),
              url('assets/azulejos_bg.png') repeat;
  background-size: cover;
  padding: 6rem 1rem;
  color: #333;
}

.hero-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.hero-copy {
  flex: 1 1 50%;
}

.hero-copy h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero-copy p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.hero-media {
  flex: 1 1 45%;
  text-align: center;
}

.hero-media img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  margin-right: 1rem;
}

.btn-primary:hover {
  background-color: #a31b1b;
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary:hover {
  background-color: #246b46;
}

.site-footer {
  background: var(--dark-blue);
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
}

a {
  color: var(--primary-color);
}

a:hover {
  color: var(--secondary-color);
}
