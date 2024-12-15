# Requirements

Node.js - (if not already installed, download and install the latest version) <br>
Git - (if not already installed, download and install the latest version) <br>

# Installation
Clone the repository to your local machine: <br>

git clone https://github.com/username/repository-name.git <br>


# Navigate to the project directory:

cd repository-name <br>

Install all dependencies using npm: <br>
<pre> ``` npm install ``` </pre> <br>
This command will install all the dependencies listed in the package.json file. <br>

# Project Structure
src/ — Source files (HTML, SCSS, JS, images). <br>
dist/ — Compiled and optimized files for the production version of the site. <br>
gulpfile.mjs — Gulp task configuration. <br>
package.json — Project dependencies and scripts. <br>

# Available Gulp Tasks
Build the project (build) <br>
This task runs all the necessary processes to compile the project. It performs the following tasks: <br>

1. Compiles SCSS into CSS. <br>
2. Minifies and concatenates JavaScript files. <br>
3. Processes images. <br>
4. Copies HTML files to the dist/ folder. <br>

# Run the command:

<pre> ``` gulp build ``` </pre> <br>
After the task is completed, all the source files will be compiled and placed in the dist/ folder. <br>

Run a local server with automatic reloading (serve) <br>
This task runs a local development server with live reload when changes are made to source files. <br>

# Run the command:

<pre> ``` gulp serve ``` </pre> <br>
The project will be available at http://localhost:3000. Gulp will watch for file changes and automatically reload the page when you make updates. <br>

Run Both Build and Server (default) <br>
<pre> ``` gulp ``` </pre>

