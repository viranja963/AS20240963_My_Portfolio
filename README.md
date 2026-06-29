# Personal Portfolio Website

[![CI Status](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/ci.yml)
[![CD Status](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/cd.yml/badge.svg)](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/deploy.yml)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-brightgreen)](https://viranja963.github.io/AS20240963_My_Portfolio)

##  Overview

A modern, responsive personal portfolio website showcasing my skills, education, projects, and professional background. Built with HTML, CSS, and JavaScript with a dark theme, smooth animations, and automated CI/CD pipeline using GitHub Actions.

**Live Demo:** [https://viranja963.github.io/AS20240963_My_Portfolio](https://viranja963.github.io/AS20240963_My_Portfolio)

---

##  Student Information

| Detail | Information |
|--------|-------------|
| **Name** | T.A.V. Mandini |
| **Index Number** | AS20240963 |
| **Course** | DevOps Engineering and Practices |
| **Assignment** | Personal Portfolio Website with CI/CD |
| **Date** | June 2026 |

---

##  Features

###  Design & UI
- Modern dark theme with vibrant color accents
- Fully responsive for all devices (Desktop, Tablet, Mobile)
- Smooth scrolling and transitions
- Interactive navigation with active link highlighting
- Glassmorphism effects and gradient designs

###  Interactive Elements
- **Typing Animation** - Dynamic role display in hero section
- **Floating Elements** - Animated icons around profile image
- **Progress Bars** - Interactive skill level indicators
- **Project Cards** - Hover effects and GitHub links
- **Contact Form** - Client-side validation and feedback

###  Sections
1. **Navigation** - Fixed navbar with hamburger menu
2. **Hero** - Welcome message with profile and CTA buttons
3. **About** - Personal information and background
4. **Education** - Timeline view of academic journey
5. **Skills** - Technology stack with progress bars
6. **Projects** - Portfolio of work with source code links
7. **Contact** - Contact information and form

---

##  Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript** | Interactivity and dynamic features |

### Libraries & Tools
| Tool | Purpose |
|------|---------|
| **Font Awesome** | Icon library |
| **Google Fonts** | Poppins typography |
| **Git** | Version control |
| **GitHub** | Repository hosting |

### DevOps & Deployment
| Tool | Purpose |
|------|---------|
| **GitHub Actions** | CI/CD automation |
| **GitHub Pages** | Website hosting and deployment |

---

##  Project Structure

AS20240963_My_Portfolio/
│
├── .github/
│ └── workflows/
│ ├── ci.yaml # Continuous Integration Pipeline
│ └── deploy.yaml # Continuous Deployment Pipeline
│
|
│ └── profile.jpg # Profile photo
│
├── index.html # Main HTML file
├── style.css 2 # Stylesheet
├── script.js # JavaScript functionality
├── README.md # Project documentation



---

## 🔄 CI/CD Pipeline Implementation

### Continuous Integration (CI)
The CI pipeline runs automated checks whenever code is pushed:

**File:** `.github/workflows/CI.yml`

**Checks Performed:**
-  HTML validation and syntax checking
-  CSS linting and error detection
-  JavaScript linting and code quality
-  Required file verification
-  Image optimization checks

**Trigger:**
- Push to `main` branch
- Pull requests to `main`
- Manual trigger via Actions UI

### Continuous Deployment (CD)
The CD pipeline automatically deploys to GitHub Pages:

**File:** `.github/workflows/deploy.yaml`

**Process:**
1. Checks out the latest code
2. Configures GitHub Pages
3. Builds the artifact
4. Deploys to GitHub Pages
5. Verifies successful deployment

**Trigger:**
- CI passes on `main` branch
- Manual deployment trigger

---

## Deployment

### Live URL
[https://viranja963.github.io/AS20240963_My_Portfolio](https://viranja963.github.io/AS20240963_My_Portfolio)

### Deployment Process
1. Code pushed to GitHub
2. CI pipeline runs (validation & testing)
3. CD pipeline triggers (if CI passes)
4. Website deployed to GitHub Pages
5. Site available at the URL above

### Workflow Status
| Pipeline | Status |
|----------|--------|
| **CI** | [![CI Status](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/ci.yml) |
| **CD** | [![CD Status](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/cd.yml/badge.svg)](https://github.com/viranja963/AS20240963_My_Portfolio/actions/workflows/cd.yml) |

---

##  Testing

### Responsive Testing
- Desktop (1920x1080) 
- Tablet (768x1024) 
- Mobile (375x812) 

### Browser Compatibility
- Google Chrome 
- Microsoft Edge 


### Functionality Testing
- All navigation links 
- Contact form validation 
- Animations and transitions 
- Social media links 
- Project repository links 

---

##  Features Breakdown

### Hero Section
- Glowing gradient text animation
-  Typing effect for roles
-  Profile image with floating animation
-  Call-to-action buttons
-  Animated background shapes

### About Section
-  Personal summary
-  Contact information display
-  Experience and language statistics
-  Hover effects on stat cards

### Education Section
-  Timeline layout design
-  Multiple education entries
-  Date, institution, and description
- Hover scale animation

### Skills Section
-  Technology icons
-  Interactive progress bars
-  Skill level indicators
-  Grid layout with hover effects

### Projects Section
-  Project cards with images
-  Overlay effect on hover
-  GitHub source code links
-  Technology tags
-  Description of each project

### Contact Section
-  Contact information with icons
-  Social media links
-  Form with validation
-  Responsive layout

---

##  Local Development

### Prerequisites
- Web browser (Chrome, Edge, etc.)
- Text editor (VS Code recommended)
- Git (for version control)

### Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/viranja963/AS20240963_My_Portfolio.git