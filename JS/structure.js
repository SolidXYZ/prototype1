function createMeta() {
    let curPath = document.location.pathname;

    let home = `${document.location.origin}/${curPath.split('/')[1]}`;

    let path = curPath.split('/');

    if (path[0] === '') {
        path.splice(0, 1);
    }
    if (path[path.length - 1] === '') {
        path.splice(path.length - 1, 1);
    }

    let loc;

    if (path.length > 1) {
        loc = path[1];
    } else {
        loc = 'index';
    }

    let thisPath = `${home}/${loc}/`;

    const head = document.head;

    //assets
    const favIcon = document.createElement('link');
    favIcon.rel = 'icon';
    favIcon.type = 'image/x-icon';
    favIcon.href = `${home}/Images/icon.png`;
    head.appendChild(favIcon);

    const charSet = document.createElement('meta');
    charSet.setAttribute('charset', 'UTF-8');
    head.appendChild(charSet);

    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    head.appendChild(viewport);

    const structureLink = document.createElement('link');
    structureLink.rel = 'stylesheet';
    structureLink.href = `${home}/CSS/structure.css`;
    head.appendChild(structureLink);

    const jsMain = document.createElement('script');
    jsMain.type = 'module';
    jsMain.src = `${thisPath}index.js`;
    head.appendChild(jsMain);

    const cssMain = document.createElement('link');
    cssMain.rel = 'stylesheet';
    cssMain.type = 'text/css';
    cssMain.href = `${thisPath}index.css`;
    head.appendChild(cssMain);

    //nav bar

    //main
    const navBarMain = document.createElement('div');
    navBarMain.id = 'nav_bar';

    //home
    const navBarHomeLink = document.createElement('a');
    navBarHomeLink.id = 'nav_bar_home_link';
    navBarHomeLink.classList.add('button_style');
    navBarHomeLink.href = home;

    const navBarHomeIcon = document.createElement('img');
    navBarHomeIcon.id = 'nav_bar_home_icon';
    navBarHomeIcon.src = `${home}/Images/icon.png`;

    const navBarHomeText = document.createElement('div');
    navBarHomeText.id = 'nav_bar_home_text';
    navBarHomeText.innerHTML = 'MDSS';

    navBarHomeLink.appendChild(navBarHomeIcon);
    navBarHomeLink.appendChild(navBarHomeText);

    //buttons
    const navBarButtons = document.createElement('div');
    navBarButtons.id = 'nav_bar_buttons';

    //menu
    const navBarMenu = document.createElement('div');
    navBarMenu.id = 'nav_bar_menu';

    //appending
    navBarMain.appendChild(navBarHomeLink);
    navBarMain.appendChild(navBarButtons);
    navBarMain.appendChild(navBarMenu);

    //final append
    const body = document.body;
    body.insertBefore(navBarMain, body.firstChild);

    //footer

    //main
    const footerSectionsData = [
        {
            header: 'MDSS',
            links: [
                {
                    text: 'Download the app',
                    href: `${home}/wip`,
                },
                {
                    text: 'Offers',
                    href: `${home}/wip`,
                },
                {
                    text: 'Promises',
                    href: `${home}/wip`,
                },
                {
                    text: 'Security',
                    href: `${home}/wip`,
                },
            ],
        },
        {
            header: 'Products',
            links: [
                {
                    text: 'Battle pass',
                    href: `${home}/wip`,
                },
                {
                    text: 'Product page',
                    href: `${home}/wip`,
                },
                {
                    text: 'Subscriptions',
                    href: `${home}/wip`,
                },
                {
                    text: 'Product updates',
                    href: `${home}/wip`,
                },
            ],
        },
        {
            header: 'Support',
            links: [
                {
                    text: 'Help center',
                    href: `${home}/wip`,
                },
                {
                    text: 'Contact us',
                    href: `${home}/wip`,
                },
                {
                    text: 'Privacy and terms',
                    href: `${home}/wip`,
                },
                {
                    text: 'Guidelines for cookies',
                    href: `${home}/wip`,
                },
                {
                    text: 'Settings for cookies',
                    href: `${home}/wip`,
                },
                {
                    text: 'Site map',
                    href: `${home}/wip`,
                },
                {
                    text: 'Resources',
                    href: `${home}/wip`,
                },
            ],
        },
        {
            header: 'Forum',
            links: [
                {
                    text: 'Forum',
                    href: `${home}/wip`,
                },
                {
                    text: 'Blog',
                    href: `${home}/wip`,
                },
                {
                    text: 'Developers',
                    href: `${home}/wip`,
                },
                {
                    text: 'Enlistments',
                    href: `${home}/wip`,
                },
            ],
        },
        {
            header: 'Company',
            links: [
                {
                    text: 'About us',
                    href: `${home}/wip`,
                },
                {
                    text: 'Positions',
                    href: `${home}/wip`,
                },
                {
                    text: 'Investorrelations',
                    href: `${home}/wip`,
                },
                {
                    text: 'Partners',
                    href: `${home}/wip`,
                },
            ],
        },
    ];

    const footerMain = document.createElement('div');
    footerMain.id = 'footer';

    for (const sectionData of footerSectionsData) {
        const section = document.createElement('div');
        section.classList.add('footer_section');

        const header = document.createElement('h2');
        header.classList.add('footer_header');
        header.innerHTML = sectionData.header;

        const linksContainer = document.createElement('div');
        linksContainer.classList.add('footer_links_container');

        for (const linkData of sectionData.links) {
            const link = document.createElement('a');
            link.classList.add('footer_link');
            link.href = linkData.href;
            link.target = '_blank';
            link.innerHTML = linkData.text;

            linksContainer.appendChild(link);
        }

        section.appendChild(header);
        section.appendChild(linksContainer);

        footerMain.appendChild(section);
    }

    document.getElementById('main_content').appendChild(footerMain);
}

const isCached = performance.getEntriesByType('navigation')[0].transferSize === 0;

if (isCached === true) {
    document.location.reload();
} else {
    if (true) {
        createMeta();
    } else {
        window.onload = () => {
            createMeta();
        }
    }
}