# Star Wars Chart

#### Milestone Project Two: Interactive Frontend Development - Code Institute

This site is built to complete the second part of the Full Stack Developer course. The website uses the open source Swapi API (https://swapi.co/) as the data source for data about Star Wars films.
The purpose of the site is to provide a fun graphing tool which will show users the proportions of male, female and other genders of the main characters in the first seven Star Wars films.

## UI/UX
My goal in the design was to make it as easy as possible to click and create the graphs while also having a little fun with the scrolling text, the styling of which is taken from the beginning of the Star Wars movies!  
The color scheme was intended to be similar to that of the Star Wars move intro credits. It is intended to have a very simple look and feel with only a minimal number of buttons and options to select (only those actually needed).

The site is fluid in design. The larger header section is exchanged for an alternative on smaller screens, at which point the professional organisation logos are moved to a lower part of the screen but retained due to their importance to the company.

I have created separate menus - one for larger screens and one (collapsed) menu for smaller screens because my client wanted a different design approach to each. Each menu design appears or disappears in relation to the screen size.

One of the menu items has a sub-menu where that section of the site is split into two pages. On mobile devices the menu item which 'drops down' is not clickable and simply expands the sub-menu, giving the user the chance to then select the sub-menu item. It is important to consider different approaches for user experiences between using a mouse/mousepad which can hover over menu items and using fingers or pens on touch-screen.

## Technologies Used
- HTML5
- CSS3
- Bootstrap (4.3.1)
- Font Awesome (5.10.1)
- JQuery (3.3.1)

## Features
This site uses the following features:
- The navbar expands or collapses depending on device/screen size used. This is achieved using Bootstrap and JQuery.
- Compatability across devices using a responsive design approach.
- Quality web content - key information required by site users is in focus e.g. the Contact Us section always on show in the left hand section on larger screens but on smaller screens the key contact information moves into the header when the Contact Us section becomes hidden, and a Contact Us page is made available from the menu button.
- Social Media links will not open respective site pages as the company does not in fact have any. They will however open a new, social media platform home page as demonstration of the intended functionality.  
- Some accessibility considerations have been made, e.g. using <nav> code blocks and using "alt" text for images.

### Features That Could Be Added
A scroll to top function/sticky button could be useful for smaller screens/mobile devices due to the length of content on some pages. Also to be considered is fixing the footer to the bottom of the screen and setting an overflowy style of auto on the contact and info sections.

Consideration should be given as to whether a short form could be included somewhere that will allow site users to message the company directly from the website.

## Testing
#### Approach
This site was tested across multiple browsers (Chrome, Safari, Microsoft Edge, Internet Explorer, FireFox) using browsers downloaded on my own Windows based and Mac OS based hardware, and on multiple mobile devices (Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5/SE, 6/7/8 and 6/7/8 Plus, iPhone X, iPad and iPad Pro) using Google Chrome Developer Tools and also using my own mobile phone following deployment, to ensure compatibility and responsiveness. 
I also undertook two sessions of "User Acceptance Testing (UAT)" with the Company Director.
The HTML code passed through the W3C validator and the CSS code passed through the jigsaw validator.
The site mostly functions as intended with one exception (see below). Links to external websites open in new tabs. The menu swaps from the larger segmented bar to the collapsed mobile-friendly navigation with elements within each working as intended for either touch screen or mouse usage.

#### Issue resolution
During the testing phase, I found and resolved the following issues:
- Formatting of the navigation bars in particular the sub-menu appeared quite different across the various screen sizes. I resolved this issue using media queries.
- The header sections with the 'strapline' and professional body logos in would not resize initially with changes to the screen width below about 768 pixels in width. I determined this was due to my choice of Bootstrap grid sizing so moved from "col-md-#" to "col-sm-#" which resolved the problem. 
- The position of the images in the main Section was reviewed and amended as a result of UAT. 
- On Internet Explorer the Header section currently does not function properly: The strapline has moved to the left and the professional body logos have disappeared. This has been fixed by removing the logos from individual divs. 
- The main company logo was not rendering nicely on Internet Explorer. I fixed this by setting the image width to different percentages including using media queries to resize it in line with screen size.
- The 'strapline' text seemed too large on smaller screens.  I used a viewport ("vw") related sizing on the font as well as media queries to improve the look of this.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch and located here https://littlemonkee.github.io/ADR-website/. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.
I deployed the website by going to my GitHub repository, clicking on settings and going to GitHub Pages. Here I selected the source Master Branch. The site was then hosted on GitHub Pages.

## Credits
### Content
Content on all web pages apart from the page "Terms" was written by the Company Direcctor. Content on the "Terms" page was written by the company'y solicitor. The downloadable form was designed by the Company Director and created as a document by me.

Links to other websites for legal and professional purposes take the user to the formal sites of each organisation (the "Health and Safety Executive", "Trusted Trader" "Gas Safe" and "Oftec").

### Media
Images were taken from the existing website, for which the acquisition of them was from open sources.

Logos used for Trusted Trader, Gas Safe and Oftec are used with permission through Professional Accreditation with each organisation.

### Acknowledgements
The functionality to provide a sub-menu within an existing menu item (Servicing) was taken from the following Bootstrap page: https://getbootstrap.com/docs/4.0/components/navbar/#responsive-behaviors




###### This site is for educational use only.


