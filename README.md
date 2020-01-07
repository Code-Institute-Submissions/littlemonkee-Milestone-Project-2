# Star Wars Chart

#### Milestone Project Two: Interactive Frontend Development - Code Institute

This site is built to complete the second part of the Full Stack Developer course. The website uses the open source Swapi API (https://swapi.co/) as the data source for data about Star Wars films.
The purpose of the site is to provide a fun graphing tool which will show users the proportions of male, female and other genders of the main characters in the first seven Star Wars films.

## UI/UX
My goal in the design was to make it as easy as possible to click and create the graphs while also having a little fun with the scrolling text, the styling of which is taken from the beginning of the Star Wars movies!  
The color scheme was intended to be similar to that of the Star Wars movie intro credits. 
It is intended to have a very simple look and feel with only a minimal number of buttons and options to select (only those actually needed).

The site is fluid in design, using media queries to re-size the scrolling text and pie chart for different screen sizes. Bootstrap grid layout is used to position the pie chart alongside the radio buttons on larger screens and move it to below the buttons on smaller screens. 

## Technologies Used
- HTML5
- CSS3
- Bootstrap (4.3.1)
- Font Awesome (5.10.1)
- JQuery (3.3.1)
- Javascript
- D3.js

## Features
This site uses the following features:
- The Swapi API (https://swapi.co/). The data is accessed using Javascript.
- An intro page with angled, scrolling text to mimic the star wars movie intros. This is achieved using css and by following the tutorial here: https://css-tricks.com/snippets/css/star-wars-crawl-text/
- Compatability across devices using a responsive design approach.
- Quality web content - key information required by site users is in focus e.g. the films to choose from are always on show either to the left or above the pie chart.
- Some accessibility considerations have been made, e.g. using "alt" text for non-text elements.

### Features That Could Be Added
Data on the Swapi API is paginated. I have iterated through each page using a variable that will iterate up to 11 times. This is because I know there are currently 10 pages of data relevant to my project.
It would be better to iterate through the pages until the "next page" property becomes "null" so that the site will always access the full dataset even after more data is added, however I did not have time to work out how to do this.

Further graphs could also be added to allow site users to investigate data about planets or ships, for example.

## Testing
#### Approach
This site was tested across multiple browsers (Chrome, Microsoft Edge, Internet Explorer, FireFox) using browsers downloaded on my own Windows based hardware, and on multiple mobile devices (Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5/SE, 6/7/8 and 6/7/8 Plus, iPhone X, iPad and iPad Pro) using Google Chrome Developer Tools and also using my own mobile phone following deployment, to ensure compatibility and responsiveness. 
I also undertook sessions of "User Acceptance Testing (UAT)" with family members.
The HTML code passed through the W3C validator and the CSS code passed through the jigsaw validator with only one error relating to script links to javascript files: "The type attribute is unnecessary for JavaScript resources.". I have subsequently removed this and tested the site again.
The site mostly functions as intended with the exception noted above about access to the Swapi data.

#### Issue resolution
During the testing phase, I found and resolved the following issues:
- Formatting of the pie chart on different screen sizes - the pie chart would reposition poorly and did not scale on smaller screens. I resolved this issue using media queries. I did attempt to use a responsive aproach[1] to the svg however it did not work.
- The scrolling intro text would complete its scroll before all the text had been viewed on screen on smaller screen sizes. I used media queries to change the text size to resolve this.
- The buttons became misaligned when purely using Bootstrap grid layout to position them. I opted to centrally position them using left and right margins of "auto" instead.
- The scrolling intro text would scroll over the button above it. I resolved this issue by amending the "fade" class in the css.

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch and located here https://littlemonkee.github.io/ADR-website/. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.
I deployed the website by going to my GitHub repository, clicking on settings and going to GitHub Pages. Here I selected the source Master Branch. The site was then hosted on GitHub Pages.

## Credits
### Content
Content on all web pages apart from the page "Terms" was written by myself. 

Data was provided by Swapi[2].

### Acknowledgements

#### References
[1] http://thenewcode.com/744/Make-SVG-Responsive
[2] Swapi API - https://swapi.co/
[3] Star Wars scrolling text - https://css-tricks.com/snippets/css/star-wars-crawl-text/ This was shared with me by my mentor Aaron Sinnet.
[4] Creation of my d3.js pie chart was based on the following tutorial - http://bl.ocks.org/enjalot/1203641

###### This site is for educational use only.


