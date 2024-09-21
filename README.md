# COSC4353-Group-34
This is the official repo for COSC 4353 - Software Design (Group 34)

Assignment 2
In this assignment, you will build the front end for the web or mobile application that you designed in Assignment 1. Remember, we are only focusing on the front end in this assignment. 
-----------------------------------------
Front-End Components
1. Login & User Registration
Users (volunteers and administrators) can register using their email and password.
Existing users can log in to access the application features
-----------------------------------------
2. User Profile Management
After registration, users must complete their profiles, which include:
Full Name: 50 characters, required.
Address 1: 100 characters, required.
Address 2: 100 characters, optional.
City: 100 characters, required.
State: Drop-down list, required (two-character code stored in DB).
Zip Code: 9 characters (at least 5 required).
Skills: Multi-select dropdown, required.
Preferences: Text area, optional.
Availability: Date picker, multiple dates allowed, required.
-----------------------------------------
3. Event Management (For Administrators)
Administrators can create and manage events through a form, which includes:
Event Name: 100 characters, required.
Event Description: Text area, required.
Location: Text area, required.
Required Skills: Multi-select dropdown, required.
Urgency: Drop-down list, required.
Event Date: Date picker, required.
-----------------------------------------
4. Volunteer Matching (For Administrators)
A form for matching volunteers to events based on their profile and event requirements:
Volunteer Name: Auto-filled from the database.
Matched Event: Auto-filled based on volunteer’s skills and availability.
-----------------------------------------
5. Notification System
Display notifications for:
New event assignments.
Updates and reminders.
-----------------------------------------
6. Volunteer History
A tabular display of volunteer participation history.
Shows event details along with volunteer participation status.
Validation
Validations are in place for required fields, field types, and field lengths to ensure data integrity.
-----------------------------------------

Technologies Used
Frontend Framework: [CSS/JS]
