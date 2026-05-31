# Project Journal: Stories, Systems, and Software

## Project Links

Public GitHub Repository:

Deployed GitHub Pages Site:

## Note on Commit History

The first commits in this repository include the initial uploaded version of the website. Because the base version of the project was added to GitHub at once, this journal provides a more detailed explanation of the development process, including what I worked on, the issues I ran into, and how I addressed them.

Later commits show the project being revised, reorganized, styled, documented, and expanded with JavaScript interactivity, accessibility updates, and an animated canvas background.

## Project Overview

For my final project, I created a personal portfolio website called Stories, Systems, and Software. The site presents my background in computer science, selected projects, technical skills, and interests in human-centered software, EdTech, accessibility, voice user interfaces, and HCI applications.

The website was built with HTML, CSS, and JavaScript and deployed using GitHub Pages. My goal was to create a clean, readable, responsive portfolio that communicates my technical interests while also showing attention to usability, accessibility, and interactive design.

## Session 1: Initial Project Upload and File Setup

Related commits:

- 6829253 — first commit
- f771722 — Add initial portfolio site structure

### What I worked on

I began by creating the repository and uploading the initial project files. This included the starting version of the website and the main files needed for the project.

### How I built it

I organized the project around separate HTML, CSS, and JavaScript files. The HTML file provided the page structure, the CSS file handled layout and styling, and the JavaScript file handled interactive behavior.

### Issues I ran into

The first version of the project was uploaded in a large commit instead of being broken into smaller feature-based commits. This made the early commit history less detailed.

### How I addressed it

I used later commits and this project journal to document the development process more clearly. This journal explains the work done on the site, including structure, content, styling, interactivity, documentation, accessibility, and final revisions.

## Session 2: Page Structure and Navigation

Related commit:

- f20fbe7 — set up portfolio page structure

### What I worked on

I revised the page structure so the website had a clearer professional portfolio layout. I focused on the header, navigation, main content area, and section organization.

### How I built it

I used semantic HTML elements such as header, nav, main, section, article, aside, and footer. I also added section IDs so the navigation links could jump to the correct areas of the page.

The main sections included:

- About
- Projects
- Skills
- Contact

### Issues I ran into

The earlier version of the site had a broader creative direction. As the project developed, I wanted the website to better reflect my current interests in computer science, EdTech, accessibility, and human-centered software.

### How I addressed it

I simplified the structure and shifted the content toward a professional software portfolio. I changed the navigation and section organization so the site felt clearer and easier to follow.

## Session 3: Hero Section and Main Portfolio Message

Related commit:

- 09e35f7 — add portfolio hero section

### What I worked on

I worked on the main hero section, which introduces the purpose of the website and gives visitors a quick understanding of my focus.

### How I built it

I added a headline, short introduction, and call-to-action buttons. The hero section introduces my interest in software development, EdTech, accessibility, and human-centered applications.

### Issues I ran into

I needed the hero section to sound professional without feeling too generic. I also wanted it to connect my technical skills with my interest in usable, thoughtful software.

### How I addressed it

I revised the wording so the hero section focused on building thoughtful software for learning, creativity, and real-world workflows.

## Session 4: Portfolio Content Sections

Related commit:

- 3bd3708 — add portfolio content sections

### What I worked on

I added the main content sections of the website, including the About section, project section, skills section, and contact area.

### How I built it

I created separate sections for each major part of the portfolio. The project section uses cards to present selected work, and the skills section groups my technical and professional strengths into readable categories.

### Issues I ran into

I needed to decide which projects best represented my interests. I wanted the site to show both technical ability and human-centered thinking.

### How I addressed it

I selected projects that connect to full-stack development, voice user interfaces, education, accessibility, and practical software systems.

## Session 5: Contact and Professional Links

Related commit:

- f1ff229 — add email

### What I worked on

I added contact information and professional links so visitors could reach me or view my GitHub profile.

### How I built it

I added a mail link and a GitHub link in the contact section. This gave the page a simple contact method that works on a static GitHub Pages website.

### Issues I ran into

A direct contact form does not actually send messages by itself on a static website unless it is connected to a backend or third-party service. I needed to decide how to include contact functionality without adding server-side code.

### How I addressed it

I used a mailto link for direct contact and added a contact form with JavaScript validation for the project’s frontend requirements. The form validates user input on the client side, while the email link provides a real way to contact me.

## Session 6: Professional Focus Card

Related commit:

- 47cab35 — add professional focus card

### What I worked on

I added a professional focus card to the hero area to summarize my current technical direction.

### How I built it

The card highlights my current focus areas, including full-stack development, EdTech, accessibility, and HCI. I also included small skill tags such as React, TypeScript, Python, and HCI.

### Issues I ran into

The page needed a way to quickly communicate my professional direction without making the hero section too long.

### How I addressed it

I used a compact card layout so visitors can quickly see my current focus while still keeping the main hero text readable.

## Session 7: Styling and Responsive Design

Related commit:

- 50a20e8 — add styling to page

### What I worked on

I styled the website using CSS. This included layout, colors, spacing, typography, cards, buttons, and responsive behavior.

### How I built it

I used CSS to create a clean, card-based layout. I styled the navigation, hero section, project cards, skills section, contact section, form, and footer. I also adjusted spacing and layout so the site would be readable on different screen sizes.

### Issues I ran into

Some sections needed better spacing and alignment so the page did not feel crowded or uneven. I also needed the design to remain readable in both light and dark modes.

### How I addressed it

I adjusted the grid layout, max-width values, padding, margins, and card styles. I also made sure the text had enough contrast and spacing to stay readable.

## Session 8: JavaScript Interactivity

Related commit:

- 4d8ec79 — add portfolio interactivity

### What I worked on

I worked on the JavaScript features for the website. This included the theme toggle, saved theme preference, project filtering logic, expandable project details, and contact form validation.

### How I built it

For the theme toggle, I used JavaScript to add or remove a dark class on the body element. I also used localStorage so the user’s selected theme would stay saved after refreshing the page.

For project filtering, I used data attributes on project cards and JavaScript event listeners on filter buttons. When a filter is selected, the script checks each project card’s category and shows or hides the card.

For expandable project details, I used buttons and event listeners to show or hide additional project information without making the page too crowded.

For the contact form, I used JavaScript to check whether required fields were filled out before allowing the form interaction to complete. This gave the user feedback if information was missing.

### Issues I ran into

The interactive features needed to be useful without making the page feel too busy. I also needed to make sure JavaScript was connected correctly to the HTML elements.

### How I addressed it

I kept the interactions simple and focused on usability. I used clear IDs, classes, and data attributes so the JavaScript could target the correct elements.

## Session 9: Animated Canvas Background

Related commits:

- 4d8ec79 — add portfolio interactivity
- 014c8a9 — Update portfolio content and animated canvas background

### What I worked on

I added an animated falling-code background using the HTML canvas element. This was one of the features that went beyond the basic material covered in class.

### How I built it

I added a canvas element to the HTML and used JavaScript to draw text onto the canvas. The animation uses the Canvas API and requestAnimationFrame to repeatedly redraw the background and create the falling-code effect.

The canvas is decorative, so I added aria-hidden="true" to keep it from interfering with screen readers.

### Issues I ran into

One issue was making the animation appear in the background without blocking or distracting from the main content. Another issue was making sure the canvas resized correctly with the browser window.

### How I addressed it

I styled the canvas so it stayed behind the main page content. I also adjusted the JavaScript so the canvas dimensions could match the browser window and continue working after resizing. Since the animation is decorative, I made sure it was hidden from assistive technology.

## Session 10: Accessibility and Usability Improvements

Related commit:

- 014c8a9 — Update portfolio content and animated canvas background

### What I worked on

I reviewed the website for usability and accessibility improvements.

### How I built it

I added a skip link so keyboard users can jump directly to the main content. I also used semantic HTML sections and made sure decorative elements, such as the animated canvas, were hidden from assistive technology.

### Issues I ran into

Some interactive or decorative elements needed to be considered from an accessibility perspective.

### How I addressed it

I used semantic HTML, readable spacing, clear labels, and aria-hidden on the decorative canvas background. I also kept the content sections organized so users could understand the page structure more easily.

## Session 11: README and Documentation

Related commit:

- ba42b44 — update readme

### What I worked on

I updated the README file to describe the project, its purpose, features, technologies, how to run it, and outside sources used during development.

### How I built it

I wrote the README in Markdown and included the project title, concept, feature list, technologies used, instructions for running the project locally, deployment information, and outside sources.

### Issues I ran into

The project concept changed during development. Earlier versions focused more on storytelling, but the final direction focused more on computer science, EdTech, accessibility, HCI, and human-centered applications.

### How I addressed it

I revised the README to match the final direction of the website and removed language that made the site sound primarily storytelling-focused.

## Session 12: Final Content Revision

Related commit:

- 014c8a9 — Update portfolio content and animated canvas background

### What I worked on

I made final revisions to the portfolio content and updated the animated canvas background integration.

### How I built it

I revised the HTML content so the website better represented my professional focus. I updated the title, hero content, project descriptions, skills, and contact section. I also made sure the canvas element was included in the page structure and treated as a decorative visual element.

### Issues I ran into

The final site needed to feel consistent. Some earlier wording still leaned toward the original storytelling theme, while the final version needed to focus more on software, accessibility, EdTech, and HCI.

### How I addressed it

I revised the page content so the final version presented a clearer professional direction. I kept the title Stories, Systems, and Software, but reframed the meaning around my background, technical systems, and software interests.

## Outside Sources

The following outside sources and references were used or consulted during the creation of this project:

### MDN Web Docs — HTML canvas Element

Used as a reference for understanding how the canvas element works and how it can be used to draw graphics with JavaScript.

### MDN Web Docs — Canvas API / CanvasRenderingContext2D

Used as a reference for drawing text and graphics on the canvas, including methods such as getContext(), fillText(), clearRect(), globalAlpha, and canvas sizing.

### MDN Web Docs — requestAnimationFrame()

Used as a reference for creating smooth browser-based animation for the falling code background.

### MDN Web Docs — JavaScript DOM Methods

Used as a reference for working with elements on the page, including querySelector(), querySelectorAll(), addEventListener(), classList, and updating page content with JavaScript.

### MDN Web Docs — Web Storage API / localStorage

Used as a reference for saving the user’s selected theme so the dark mode / reading mode preference remains active after refreshing the page.

### MDN Web Docs — HTML Form Validation

Used as a reference for validating contact form fields with JavaScript.

### GitHub Pages Documentation

Used as a reference for deploying the portfolio website online.

### Course Materials and Class Examples

Used as general guidance for HTML structure, CSS styling, responsive layouts, JavaScript interactivity, and project organization.

## Final Reflection

This project helped me practice building a complete static website with HTML, CSS, and JavaScript. I worked on structuring a page with semantic HTML, styling a responsive layout with CSS, adding JavaScript interactivity, and documenting the project clearly.

The most challenging feature was the animated canvas background because it required using the Canvas API, browser animation, resizing logic, and accessibility considerations. I also had to make sure the animation supported the design without distracting from the content.

The final project reflects my interest in human-centered software, EdTech, accessibility, and HCI applications. My goal was to create a portfolio that feels professional, readable, and useful while also showing some creativity through interactive and animated elements.
