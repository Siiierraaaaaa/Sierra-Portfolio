const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener("click", openContact);


const contactPanel = document.getElementById('contactPanel')

const closeBtn = document.getElementById('closePanel')
closeBtn.addEventListener("click", closeContact)

function openContact() {
    contactPanel.classList.add("active")
}
function closeContact() {
    contactPanel.classList.remove("active")
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
            icon: 'assets/icons/js-icon.png'
        }],
        projectDescription: 'A responsive food blog featuring recipes, restaurant reviews, and desserts, with a focus on clean design and user-friendly navigation.',
        liveDemo: '',
        github: ''
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
                name: 'Gutenberg',
                icon: 'assets/icons/gutenberg.png'
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
        github: ''
    },
    {
        projectName: 'Brew Haven Coffee',
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
                name: 'JavaScript',
                icon: 'assets/icons/js-icon.png'
            }
        ],
        projectDescription: 'A responsive coffee shop website designed to create a warm, welcoming experience for customers. Features include a featured drinks section, customer testimonials, location map, interactive pop-ups, and a structured navigation system.',
        liveDemo: 'https://brew-haven-coffeee-jchd.vercel.app/',
        github: 'https://github.com/Siiierraaaaaa/brew-haven-coffeee'
    },
    {
        projectName: 'Color Changing App',
        projectImage: 'assets/Color-Changing-App.png',
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
                icon: 'assets/icons/js-icon.png'
            }
        ],
        projectDescription: 'An interactive JavaScript application that allows users to change the background color with a button click. Built to practice JavaScript events, functions, DOM manipulation, and dynamic styling.',
        liveDemo: '',
        github: ''
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
                icon: 'assets/icons/js-icon.png'
            }
        ],
        projectDescription: 'An interactive JavaScript application that allows users to increase, decrease, and reset a counter  while demonstrating DOM manipulation, event handling, and responsive design.',
        liveDemo: '',
        github: ''
    },
]
// declaring that projectItem is selecting html class projects
const projectItem = document.querySelector('.projects')




function displayProjects() {

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