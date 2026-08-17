const contactBtn = document.getElementById('contactBtn');
const contactBtn2 = document.getElementById('contactBtn2');

const contactPanel = document.getElementById('contactPanel');
const closeBtn = document.getElementById('closePanel');


if (contactBtn) {
    contactBtn.addEventListener("click", openContact);
}

if (contactBtn2) {
    contactBtn2.addEventListener("click", openContact);
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeContact);
}


function openContact() {
    if (contactPanel) {
        contactPanel.classList.add("active");
    }
}

function closeContact() {
    if (contactPanel) {
        contactPanel.classList.remove("active");
    }
}

const projects = [
    {
        projectName: 'The Foodie Leonne Blog',
        projectImage: 'assets/TFL.png',
        projectIcon: '',
        technologies: [{
            name: 'HTML',
            icon: 'assets/icons/html-icon.png'
        },
        {
            name: 'CSS',
            icon: 'assets/icons/css-icon.png'
        },
        {
            name: 'JavaScript',
            icon: 'assets/icons/JS-icon.png'
        }],
        projectDescription: 'A responsive food blog featuring recipes, restaurant reviews, and desserts, with a focus on clean design and user-friendly navigation.',
        liveDemo: '',
        github: 'https://github.com/Siiierraaaaaa/TheFoodieLeonneBlog'
        // 'https://the-foodie-leonne-blog.vercel.app/',
    },
    {
        projectName: 'The Foodie Leonne | WordPress Food Blog',
        projectImage: 'assets/TFL-WordPress.png',
        projectIcon: '',
        technologies: [
            {
                name: 'WordPress',
                icon: 'assets/icons/wp-icon.png'
            },
            {
                name: 'HTML',
                icon: 'assets/icons/html-icon.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css-icon.png'
            }
        ],
        projectDescription: 'A WordPress version of my original food blog, customized with Gutenberg, HTML, and CSS. ',
        liveDemo: 'https://sierra-parker.webhostingforstudents.com/classes/2510/',
        github: 'https://sierra-parker.webhostingforstudents.com/classes/2510/'
    },
    {
        projectName: 'Brew Haven Coffee — Angular Café & Online Ordering Website',
        projectImage: 'assets/Brew-Haven-Coffee.png',
        projectIcon: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html-icon.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css-icon.png'
            },
            {
                name: 'Anuglar',
                icon: 'assets/icons/angular-icon.png'
            }
        ],
        projectDescription: 'A responsive café website built with Angular featuring dynamic menu categories, an interactive shopping cart, checkout flow, order confirmation, responsive design, and reusable component-based architecture.',
        liveDemo: 'https://brew-haven-mu-red.vercel.app/',
        github: 'https://github.com/Siiierraaaaaa/Brew-Haven'
    },
    {
        projectName: 'Color Changing App',
        projectImage: 'assets/color-changing.png',
        projectIcon: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html-icon.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css-icon.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/JS-icon.png'
            }
        ],
        projectDescription: 'An interactive JavaScript application that allows users to change the background color with a button click. Built to practice JavaScript events, functions, DOM manipulation, and dynamic styling.',
        liveDemo: 'https://color-changing-app-mauve.vercel.app/',
        github: 'https://github.com/Siiierraaaaaa/Color-changing-app'
    },
    {
        projectName: 'Counter App',
        projectImage: 'assets/Count-App.png',
        projectIcon: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html-icon.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css-icon.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/JS-icon.png'
            }
        ],
        projectDescription: 'An interactive JavaScript application that allows users to increase, decrease, and reset a counter  while demonstrating DOM manipulation, event handling, and responsive design.',
        liveDemo: 'https://count-app-cyan-omega.vercel.app/',
        github: 'https://github.com/Siiierraaaaaa/Count-App'
    },
]
// declaring that projectItem is selecting html class projects
const projectItem = document.querySelector('.projects')




function displayProjects() {
    if (!projectItem) {
        return; 
    }

    projectItem.innerHTML = projects.map(project => {

        const technologiesHTML = project.technologies.map(technology => {
            return `
                <div class="project-technology">
                    <span>${technology.name}</span>
                    <img src="${technology.icon}" alt="${technology.name}">
                </div>
            `;
        }).join('');

        return `
            <div class="project-card">

                <img src="${project.projectImage}" alt="${project.projectName}">

                <div class="project-description">

                    <h4>${project.projectName}</h4>

                    <p>${project.projectDescription}</p>

                    <h5>Built With:</h5>

                    <div class="project-technologies">
                        ${technologiesHTML}
                    </div>

                    <div class="project-links">
                        <a href="${project.liveDemo}" target="_blank" class="btn">
                            Live Demo
                        </a>

                        <a href="${project.github}" target="_blank" class="btn">
                            Github
                        </a>
                    </div>

                </div>

            </div>
        `;

    }).join('');
}

displayProjects();