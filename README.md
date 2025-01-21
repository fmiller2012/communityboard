# project-1-fmiller2012

# Web Development Project 1 - *Community Economic Development Hub*

Submitted by: **Faraji Miller**
Z-Number: **Z-23232205**

This web app: **Compiles together a collection of resources in the community responsible for creating sustainable economic development within the local community.**

Time spent: **10** hours spent in total

🎯 Goals
- [x] Initialize a new React application with Vite
- [x] Create a functional React component
- [ ] Define and pass props to components
- [ ] Apply CSS styling to React components

## Required Features

The following **required** functionality is completed:

- [ ] Create a unique theme for events or resources relevant to a specific community
- [ ] Display at least 10 unique resources or events in a responsive card format

## Stretch Features

The following **optional** features are implemented:

- [ ] Add buttons or links to a related resource on each card component
- [ ] Make the site responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

My understanding of the files automatically installed by Node.js/React (packages.json, node_modules, package-lock.json, vite.config.js, eslint.config.js, public, index.html, src, README.md)
Index.html serves as the basic html container of the website specifying the head and body. The head contains meta-data plus the icon corresponding to the website tab header and title of the tab website header. The body has two tags - a div tag to act as a container for the React application. Think of this as an empty stage where no actors are present yet. The second statement with the script tag Loads the JavaScript file (main.jsx) that initializes and renders the React application. This is the director who then brings on the actors (React components) to perform on stage.
Src contains the bulk of the code that corresponds to the React application.
README.md is a simple markdown document for writing down documtnation of what the app does.
Packages.json is for specifying all of the libraries, dependencies and tools that the user's app relies on. Node_modules stores all the actual code of the dependencies the user downloads and uses from the libraries/tools of packages.json. Package-lock.json ensures that all of the dependencies of the node_modules will stay in their current versions and not accidentally update leading to unpredictable behavior. Vite.config.js and eslint.config.js are both used to config vite and eslint. And public is to hold static assets such as images or files that dont require processing by Vite.

Inside of the src folder are 5 files (App.css, App.jsx, main.jsx, index.css, and assets). Assets is a folder that stores the assets not secured in the public folder at the higher directory due to these assets needing to be processed by Vite. index.css applies styling across the entire app whereas App.css only applies styling to that specific component. main.jsx renders the App component into the DOM. App.jsx acts as the main component, often importing and rendering other components.

main.jsx acts as the analogue to Java's OOP main class in that serves as the entry point for the program while App.jsx (possibly other classes?) handle the specific functionality (similar to Java's non-tester classes). main.jsx sets up the React application and links it to the Document Object Model (DOM) index.html. And it also tells React what the "main component" of the app is (in this case App) and where to render it (in this case 'root', found in index.html's <div id = "root">)

Everything starts at index.html by which the DOM is created. In the body section of index.html the div tag has id = "root" to act as the future container for the React app. After this div tag is a source tag that will call the main.jsx file. main.jsx imports React and ReactDOM using the specified code in the node_modules directory and imports the App component from the App.jsx file. In the first line of main.jsx, the object ReactDOM calls the createRoot method to create a React Root that will serve as the component root of it's tree-structured React component tree. Inside the argument of createRoot it accepts a DOM element/node by which this will be obtained by using the document.getElementByID method with its argument specifying the id in the document (ALWAYS named index.html as the starting point for all web servers).

This newly created object has now stored the specific DOM node object in question as a React root for rendering React components. The first React component to be rendered/made visible will be the main (App from App.jsx) component that typically controls all of the other components.

The App.jsx file is typically the root component of a React application. It serves as the main container for other components and the overall structure of your app. 
The specific type of component that App is is a "functional" component - a function is how it is specified. This App function returns JSX (Javascript XML) which is a syntax extension that allows the user to write html-like code within javascript.
The export default App; line exports the App component so it can be imported and used in other parts of the application, such as in main.jsx or index.js.


 
## License

    Copyright [2025] [Faraji Miller]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
