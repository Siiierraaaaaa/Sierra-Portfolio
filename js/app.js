const contactBtn = document.getElementById('contactBtn');
const contactBtn2 = document.getElementById("contactBtn2");
contactBtn.addEventListener("click", openContact);
contactBtn2.addEventListener("click", openContact);

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
        technologies: [{
            name: 'HTML',
            icon: 'assets/icons/html.png'
        },
        {
            name: 'CSS',
            icon: 'assets/icons/css.png'
        },
        {
            name: 'JavaScript',
            icon: 'assets/icons/javascript.png'
        }],
        projectDescription: 'A responsive food blog featuring recipes, restaurant reviews, and desserts, with a focus on clean design and user-friendly navigation.',
        liveDemo: '',
        github: ''
    },
    {
        projectName: '',
        projectImage: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/javascript.png'
            }
        ],
        projectDescription: '',
        liveDemo: '',
        github: ''
    },
    {
        projectName: '',
        projectImage: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/javascript.png'
            }
        ],
        projectDescription: '',
        liveDemo: '',
        github: ''
    },
        {
        projectName: '',
        projectImage: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/javascript.png'
            }
        ],
        projectDescription: '',
        liveDemo: '',
        github: ''
    },
        {
        projectName: '',
        projectImage: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/javascript.png'
            }
        ],
        projectDescription: '',
        liveDemo: '',
        github: ''
    },
        {
        projectName: '',
        projectImage: '',
        technologies: [
            {
                name: 'HTML',
                icon: 'assets/icons/html.png'
            },
            {
                name: 'CSS',
                icon: 'assets/icons/css.png'
            },
            {
                name: 'JavaScript',
                icon: 'assets/icons/javascript.png'
            }
        ],
        projectDescription: '',
        liveDemo: '',
        github: ''
    },
]