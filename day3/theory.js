export const add = (a, b) => a +b
export const multiply = (a, b) => a *b
export const subtract = (a, b) => a -b

export default (function doSomeMath(){
    return{add, multiply , subtract}
})
// It is good to know these folders and files.

// node_modules - stores all the necessary node packages of the React applications.

// Public

// index.html - the only HTML file we have in the entire application

// favicon.ico - an icon file

// manifest.json - is used to make the application a progressive web app

// other images - open graph images(open graph images are images which are visible when a link share on social media)

// robots.txt - information, if the website allows web scraping

// src

// App.css, index.css - are different CSS files
// index.js - a file which allows to connect all the components with index.html
// App.js - A file where we usually import most of the presentational components
// serviceWorker.js: is used to add progressive web app features
// setupTests.js - to write testing cases
// package.json- List of packages the applications uses

// .gitignore - React boilerplate comes with git initiated, and the .gitingore allows files and folders not to be pushed to GitHub

// README.md - Markdown file to write documentation

// yarn.lock or package-lock.json - a means to lock the version of the package