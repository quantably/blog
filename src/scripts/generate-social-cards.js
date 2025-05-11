const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter'); // Make sure to install: npm install gray-matter
const readingTime = require('reading-time');

// Ensure the output directory exists
const outputDir = path.join(process.cwd(), 'static', 'social-cards');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateSocialCard({ filename, title, tags = [], timeToRead = '3' }) {
  console.log(`Generating social card for: ${title} (filename: ${filename})`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for social media card size
    await page.setViewport({ width: 1200, height: 630 });
    
    // Encode parameters for URL
    const params = new URLSearchParams({
      title: title,
      tags: tags.join(','),
      time: `${timeToRead} min`,
      filename: filename // Pass the folder name as filename param
    });
    
    const url = `http://localhost:9000/social-card?${params.toString()}`;
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    console.log(`Page loaded for: ${title}`);
    
    // Wait for fonts and images to load
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Take screenshot
    const outputPath = path.join(outputDir, `${filename}.png`);
    console.log(`Taking screenshot for: ${outputPath}`);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false
    });
    
    console.log(`✓ Generated: ${outputPath}`);
  } catch (error) {
    console.error(`Error generating social card for ${title} (filename: ${filename}):`, error);
  } finally {
    await browser.close();
  }
}

function getAllBlogPosts() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  const posts = [];
  const dirs = fs.readdirSync(blogDir);
  dirs.forEach(dir => {
    const postPath = path.join(blogDir, dir, 'index.md');
    if (fs.existsSync(postPath)) {
      const fileContent = fs.readFileSync(postPath, 'utf8');
      const { data, content } = matter(fileContent);
      if (data && data.title && data.draft !== true) {
        let timeToRead;
        if (data.timeToRead) {
          // Use the value from frontmatter if present (strip 'min' if present)
          timeToRead = parseInt(data.timeToRead, 10);
        } else {
          // Use reading-time package to calculate minutes (rounded up)
          const stats = readingTime(content);
          timeToRead = Math.ceil(stats.minutes);
        }
        posts.push({
          filename: dir,
          title: data.title,
          tags: Array.isArray(data.tags) ? data.tags : [],
          timeToRead,
        });
      }
    }
  });
  return posts;
}

async function generateCards(posts) {
  console.log(`\nGenerating ${posts.length} social cards...\n`);
  console.log('Posts to generate:', posts);
  
  for (const post of posts) {
    await generateSocialCard(post);
  }
  
  console.log('\n✓ All social cards generated successfully!\n');
}

if (require.main === module) {
  console.log('generate-social-cards.js script started');
  const posts = getAllBlogPosts();
  if (posts.length === 0) {
    console.log('No blog posts found.');
    process.exit(0);
  }
  generateCards(posts);
}

module.exports = { generateSocialCard, generateCards, getAllBlogPosts };