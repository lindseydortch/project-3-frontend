# Project 3 Breakdown 

## User Stories 
- User should be able to login
- Users will be able to pick their comfortability by selecting either virtual or inperson 
- User should be able to add, update, read, and delete their events - if the user did not create the event they will not be able to edit or delete it
- User should be able to see a resources page on COVID-19 on our group's specific cities (Kansas City, Dallas, Chicago, Orlando) - stretch specific to their area when a new area is added
- User should be able to put their socializing preferences if they are vaccinated or unvaccinated - think Bumble's vaccination preferences
- User will be added to a group based on their interests
- User will be able to select whether or not they want virtual-only events and groups or in-person events (indoor and outdoor) and groups

## Stretch Goals 
- Our event rating scale
- Ways to be able to resocialize - meditating, etc.
- Users will be able to match with friends to go to events too based on their profiles
- Be able to add a city that is not on the four cities that were predefined 
- Being able to leave a comment under an event 
- Events dissapear or go into your past events after they have already happened 

## UX Walkthrough 
1. User logs in or is able to create an account 
  - If user needs to create an account: 
    1. First be able to pick whether or not they want to attend either virtual or inperson events or be able to add if you don't mind either 
    2. User will be able to create an account 
    3. User will be able to put all of their socializing preference based on vaccination status and comfortability 
  - If user already has an account: 
    1. They will be able to see their settings 
    2. They will be able to update their preferences
    3. They will be able delete their entire profile 
2. Once the user is logged in, they will be able to see their city (be able to view other cities), groups (defined strictly by interests), and interests
3. Once the user selects a city they can see events based off of their interests
  - They will be able to: 
  * User will not be able to edit or delete an event they didn't create 
    1. See all of the events and all of the events they've created (this will be shown first)
    2. Add an event to their city 
    3. Update one of their events 
    4. Delete one of their events 
    5. Favorite Events 
4. User will be able to filter out events based on our rating scale of comfortability, which can be found on the about page 
5. User will be added to groups based off of the predefined interests they've selected 
6. Once a user has visited their group they will be able to: 
  1. See all posts 
  2. Update any of their posts 
  3. Add a post 
  4. Delete a post 
7. There will be a resources page for each of the four cities in our database they can click on the link and it will take them to the CDC page on COVID in their area 

## Frontend
- Components 
  - Navbar - Lindsey 
  - Footer - Lindsey 
  - User - Whole Group 
    - Login / Create an account / profile
      - Create an account 
        - Select virtual or online 
        - Get info / form 
      - User settings with CRUDability 
    - User Display 
      * Like the first 5 cards, show events in their area based off of their interests and then anything after that is just based on city 
  - Event Component - Asif & Chloe
    - Event CRUDability 
      - Create 
      - Read 
      - Update 
      - Delete 
  - Group - Kirsten & Lindsey 
    - Group CRUDability 
      - Create 
      - Read 
      - Update 
      - Delete 
  - Resources - Chloe 
    * This will include resources to learning how to resocialize, etc. 
  - About - Asif & Kirsten 
    - Comfortability Scale - Emoji based 
  - Design - Lindsey 

## Backend 
- Models 
  - User - Whole Group 
  - Group - Kirsten & Lindsey 
  - Event - Asif & Chloe 

## Code Review Days 
- Saturday, July 24, 2021 - Afternoon (after lunch)
- Monday, July 26, 2021 
- Wednesday, July 28, 2021 
- Saturday, July 31, 2021 & Heroku Deployment

## Project Completion 
- Deployed and ready to complete - August 1, 2021 (but really we know it's the 2nd)

## Bugs and Performance Issues 
- When adding an event, the date is not pulling through, EventUpdateForm and EventForm, not showing on confirmation page or backend 
  - Change from React date picker to regular HTML picker 
✅ Cannot update event description and event name - value is there, but cannot remove anything
