DoD
===
- The website should be responsive and all features should work on small screens (> 400px width)
- Supported browser is Chrome (latest version)


US0001 - Viewing the current date
=================================
Story points captured during Spring planning : 5 

Description
-----------
As a pet store user I want to see the current date displayed on the top banner so that I can easily see it.

Acceptance Criteria
-------------------
- Date is displayed on the format DD-MM-YYYY, ie: 01/12/2016
- The background color of the banner is black

US0002 - Viewing my pets
========================
Story points captured during Spring planning : 10

Description
-----------
As a pet store user I want to see my current pets so that I can view all my pets in one page.

Acceptance Criteria
-------------------
- List of pets displayed in a table like component
- I need to be able to easily identify my pets *Name* and *Status*
- Ensure the component can load up to 100 pets in a single page in less than 2 seconds (on any developer machine)

US0003 - Adding a new pet
=========================
Story points : 15

Description
-----------
As a pet store user I want to be able to add a new pet so that I can add new pets to my collection

Acceptance Criteria
-------------------
- `Name` and `Status` should be **mandatory** fields to add a new pet.
- After filling the form, adding a new pet should be possible by typing the keyboard `Enter key` or by clicking on a `Create button`.
- The following sequence should be respected in terms of accessibility (using the tab key) : 

![alt text](../assignment/acessibility.png "Accessibility path when adding a new pet")


US0004 - Modifying an existing pet
=================================
Story points captured during Spring planning : 10

Description
-----------
As a pet store user I want modifying my existing pets so that I can update their name or/and status.

Acceptance Criteria
-------------------
- Pet edit should be possible by clicking on pet `name` or pet `status`
- 3 ways to quit the editing of a pet
    - Pressing the `Esc key` => Changes should be **discarded**.
    - Pressing the `Enter key` => Changes should be **saved**.
    - Clicking outside the edition zone => Changes should be **saved**.

US0005 - Exposing a REST api (Bonus)
===================================
Story points captured during Spring planning : 20

Description
-----------
As a pet store user I want to access my resource by using the following REST API : 

- GET /api/pets 
- GET /api/pets/{id} 
- PUT /api/pets/{id}
- DELETE /api/pets/{id}
- POST /api/pets

Acceptance Criteria
-------------------
API respects this : [Swagger definition file](../src/client/swagger.html)