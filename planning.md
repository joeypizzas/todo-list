# Planning for to-do list
## Does your program have a user interface? What will it look like? What functionality will the interface have?
- UI has a LHN alongside a main section. LHN has:
    - Home section. 
    - Lists section, showing existing lists as sub-headers. 
    - Name/avatar in top left, with ability to edit. 
    - Maybe button to add new list in LHN, instead of on home page. 
- App lands you on home page upon load. 
- Home page:
    - Shows all lists in a grid format, with each card showing the various to-dos inside them. 
    - The ability to tap a to-do to expand more information about it (initally just show name and due-date on home page). 
    - Expanding to do opens a center-state modal with ability to edit the to-do. 
    - Editing to-do includes the ability to change:
        - Name. 
        - Due-date. 
        - List. 
        - Description. 
        - Mark as complete. 
        - Delete. 
    - Has the ability to click a list and move to just showing that list. 
    - Is seeded with a "personal" list that contains a few initial to-dos to complete, like adding your first to-do and creating your first project.  
    - A button to add a new list. Opens center state modal to add new list. 
    - A button to add a new to-do. Opens center state modal to add new list. 
    - A header that has includes the date and title. 
- List pages, includes:
    - Header with list name. 
    - Option to add new to-do. 
    - Option to delete list, which warns will delete all to-dos for that list. 
    - Grid with two cards, one left and one right. 
    - Left hand card:
        - To-dos for that list. 
        - Two sections:
            - Top has active to-dos. 
            - Bottom has previously completed to-dos, which are struck through. 
        - To-dos show name, due date and option to delete. They have circle on the left, of which clicking completes the to-do (or uncompletes, for previously completed to-dos).
        - Tapping a to-do opens it in the right hand card. 
        - To-dos are sorted in the top section by due date, and secondarily by most recently added. 
        - Sort in the bottom section is by most recently completed. 
        - Badge to indicate it is overdue in some way, if necessary. 
    Right hand card:
    - All fields are shown for the to-do and it can be edited. This will be the same edit center state modal shown on the home page, but rendered as a right hand card. 
    - Top un-completed to-do is opened by default in right hand card when you load the list, and one is always open. 
- Clean UI with a nice color scheme. Focus on clean and modern. Some ideas:
    - #F7F9FC - Background  
    - #1A1A1A - Primary Text  
    - #6B7280 - Secondary Text  
    - #3B82F6 - Accent / Button  
    - #10B981 - Success  
    - #E5E7EB - Borders  
    - #FFFFFF - Task Background

## How do you plan to design the application state?
- Goal is to write application state independent of UI, so it works first in the console. 
- Initially will have methods that print to-dos and lists to the console, to be able to verify that their state is being managed correctly. These will be in their own module to start. Later on, we'll shirk these in favor of the UIcontroller module, which adds the to-dos and lists to the UI. 
- Use a class to create todo objects. Details:
    - It will have methods to operate and manage its own state, like:
        - Editing name. 
        - Editing due-date. 
        - Editing the list it's on. 
        - Editing description. 
        - Changing completeness status. 
        - (Delete will be part of the list methods, since it is really related to removing a to-do from a list.)
    - It will have the following NVPs:
        - Name. 
        - Due date. 
        - List. 
        - description. 
        - Complete. 
- Class for todo list objects. Details:
    - It has the following keys:
        - Name. 
        - To-do list, which is an array that will hold to-do objects added to it. 
    - Methods:
        - Edit list name. 
        - Add to-do to list. 
        - Remove to-do from list. 
        - Get completed to-dos. 
        - Get incompleted to-dos. 
- Name / avatar:
    - IIFE factory with method to update name. 
- All application state items are saved in local storage. 

## How do you plan to organize your project files? 
- Index.js file where project is run from. 
- Modules:
    - Home page UI controller. 
    - To-do list page UI controller. 
    - Add/edit to-do / modal UI controller. 
    - Add list / modal UI controller. 
    - to-do class
    - list class
    - name management factory 
    - local storage. 

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?
- An initial seeded "personal" list with a few sample to-dos. Initiated by the app on first load. 
- To-dos, come from user input via a form. 
- Lists, come from user input via a form. 
- Name, comes from user input, method TBD. 

## Given your inputs, what are the steps necessary to return the desired output?
1. Write the application state to work for the console:
    - Create to-do class with constructor and methods listed above. 
    - Create list class with constructor and methods listed above. 
    - Create name management factory with methods listed above. 
    - Create local storage module with functions needed to get and set data to localStorage.
        - Export those functions and import them to other application state modules, and call them in every method related to modifying data to ensure data persists after page load. 