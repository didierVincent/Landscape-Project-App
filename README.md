# Landscape Project List App! (Item List App)

**Unit 2 Project - Node/Express/MongoDB Full-stack CRUD Application**
<BR> (will come up with an app name later)

## Description

**Quickly build your own comprehensive project list for your next Landscaping Project!**

<BR>
Easy user-friendly app built for anyone to calculate costs for anything.
For personal home projects, for your best friend's backyard, or more comprehensive lists for contractors looking to make quick quotes for clients.

## Getting Started!

**Here's a link to my app!:** https://landscape-project-app.onrender.com

Trello Link: https://trello.com/b/C3CVYmkt/project-2-landscape-project-builder-item-list-app-using-apis

## Screenshots

**(add view title here)**

![Title (add updated image here)]

## Technology Used (double check later)

Node, Express, MongoDB, Mongoose, CSS & JavaScript
<BR> (Created in Visual Studio Code)

## Next Steps

- Use APIs to fetch up to date product data
- For contractors:
  - Ability to add margin / labour costs to create a comprehensive quote.
    <BR> Have a 'Show/Hide' toggle button to include margin/labour costs from view.
    <BR> (Thinking of having an option to keep those costs hidden during a live quotation with a client)
- Create compatible Mobile Browser App
- Create IOS/Andriod App

## Initial Wireframe

**Login Page**
![Login Page](<wireframe/Login Page.png>)

**Home / Your Projects Page**
![Home Page / Your Projects](<wireframe/Home Page.png>)

**Project Builder Page** (New Project)
![New Project](<wireframe/Project Builder Page (New Project).png>)

**(Example Project, Buttons Annotated)**
![alt text](<wireframe/Project Builder Page (Example List, Buttons Explained).png>)

**+ Add Single Item Page** (full product list)
![Add Single Item](<wireframe/+ Add Single Item Page.png>)

## Wireframe (Extras)

**+ Add Landscape Page** (+Add Decking Page)
![Add Landscape 1](<wireframe/+ Add Landscape Page (eg + Add Decking) without custom.png>)

**+ Add Category Item Page** (+ Add Timber)
![Add Category Item Page](<wireframe/+ Add Category Item Page.png>)

**+ Add Custom Item Page**
![Add Custom Item Page](<wireframe/+ Add Custom Page.png>)

## Database ER Diagram

![ER Diagram](<wireframe/Database ER diagram v2.3.png>)

## Roadmap

- [x] Create App with basic item list builder functionality, with hard coded mock up data (no APIs)
- [ ] Use real products and prices from suppliers, hard code current values
- [ ] Implement APIs to database to fetch up-to-date prices for products
- [ ] (add more below)

## Stories (in order of priority)

- [x] As a user, I want to be able to create an item list with building and hardware products with their prices included.
- [x] As a user, I want to be able to save my items lists as projects so I can access them later.
- [x] As a user, I want to be able to create multiple projects (item lists of products)
- [x] As a user, I want to be able to edit or delete a project I have created.

### Optional Stories (in order of priority)

- [ ] As a user, I want the product prices to be accurate and up to date. (API implementation)

# To Do

### Create Mock Up Data for app

- [x] Create an ER Diagram to plan product database
- [x] Create a mock up product list of 20 items for database
- [x] Give each product a category (Decking, Retaining Wall, Other)
- [x] Add data to new MongoDB database

### Create Wireframe

- [x] Draft wireframe, including all different views
- [x] Finalise wireframe in Figma

## Create Express App

#### Create basic routes to MVP pages first

- [x] Login
- [x] Home
- [x] Projects
- [x] Project Builder
- [x] Add Single Item

### All Pages - Quick Sidebar CSS

- [x] Quickly create sidebar for each view (setup in stylesheet?)

### View: Home / Login Page

- [x] Create quick view, (setup OAuth later)

### View: Projects Page

- [x] Show user created projects in a list (with details if possible like in wireframe)
- [x] Add [+ Build New Project] button that redirects to Project Builder Page

### View: Project Builder Page

- [x] Project List showing items selected underneath
- [ ] Add a Quanity input box next to each item
- [x] (Default text shown if no items selected yet)
- [x] Project Builder buttons: [+ Add Single Item] (redirects to Add Single Item Page)
- [x] Display Total Project Cost: (setup later)
- [x] Auto-save functionality

### View: Add Single Item Page

- [x] Add 20 Items from mock up database in a list
- [x] [+ Add] buttons (setup later)

### CRUD: Login Page

- [x] Learn/Setup OAuth for page

### CRUD: Projects Page

- [x] Set up so user can create projects and view/delete them on their account
- [x] Add a view/edit button

### CRUD: Project Builder Page

- [x] Make sure selected Items add to list
- [x] Setup Display Total Project Cost: Calculate sum of item prices and show in text
- [ ] Add a Quanity input box for each item
- [x] Add delete button to remove an item
- [x] Add delete project button to remove project

### CRUD: Add Single Item Page

- [x] Add '+Add' button to each item (adds to project list and redirects to Project Builder Page)

### CSS Styling / Details (ref to wireframe)

- [ ] Add more detail to side bar
- [ ] Make pages to replicate original wireframe
- [ ] Add sort button to Projects Page?
- [ ] Add search box to Projects Page?
      (add more details below later...)

## Add Extra Pages

(add more details below later...)

#### Add Landscape Page

#### Add Category Item Page

### Refactor using Real Data

- [ ] Find realistic products from competitive suppliers, and refactor database
- [ ] Use APIs where available to retrieve up to date prices

### Things to refactor

### Things to debug

### Optional Setup

- [ ] Find supplier APIs and test if you can fetch product prices from them:
- [ ] Bunnings API
- [ ] (other supplier) API
- [ ] (other supplier) API
