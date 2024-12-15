# Requirements

Node.js - (if not already installed, download and install the latest version) <br>
Git - (if not already installed, download and install the latest version)

# Installation
Clone the repository to your local machine:

bash
Копировать код
git clone https://github.com/username/repository-name.git
Navigate to the project directory:

bash
Копировать код
cd repository-name
Install all dependencies using npm:

bash
Копировать код
npm install
This command will install all the dependencies listed in the package.json file.

Project Structure
src/ — Source files (HTML, SCSS, JS, images).
dist/ — Compiled and optimized files for the production version of the site.
gulpfile.mjs — Gulp task configuration.
package.json — Project dependencies and scripts.
Available Gulp Tasks
1. Build the project (build)
This task runs all the necessary processes to compile the project. It performs the following tasks:

Compiles SCSS into CSS.
Minifies and concatenates JavaScript files.
Processes images.
Copies HTML files to the dist/ folder.
Run the command:

bash
Копировать код
gulp build
After the task is completed, all the source files will be compiled and placed in the dist/ folder.

2. Run a local server with automatic reloading (serve)
This task runs a local development server with live reload when changes are made to source files.

Run the command:

bash
Копировать код
gulp serve
The project will be available at http://localhost:3000. Gulp will watch for file changes and automatically reload the page when you make updates.
