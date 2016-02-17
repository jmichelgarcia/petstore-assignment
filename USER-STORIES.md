DoD
===
- The website should be responsive and all features should work on small screens (> 400px width)
- All user stories should be fully tested using Robot framework (using Selenium underneath)
- Supported browser is Chrome (latest version)


US0001 - Viewing the current date
=================================
Story points : 5 

Description
-----------
As a pet store user I want to see the current date displayed on the top banner so that I can easily see it.

Acceptance Criteria
-------------------
- Date is displayed on the format DD-MM-YYYY, ie: 01/12/2016
- The background color of the banner is black

US0002 - Viewing my pets
========================
Story points : 10

Description
-----------
As a pet store user I want to see my current pets so that I can view all my pets in one page.

Acceptance Criteria
-------------------
- List of pets displayed in a table like component
- I need to be able to easily identify my pets *Name* and *Status*
- Ensure the component can load up to 100 pets in a single page in less than 2 seconds

US0003 - Adding a new pet
=========================
Story points : 15

Description
-----------
As a pet store user I want to be able to add a new pet so that I can add new pets to my collection

Acceptance Criteria
-------------------
- *Name* and *Status* should be mandatory fields (a warning message should be displayed to the end user)
- End user is able to add new pet by typing the keyboard *Enter* key or by clicking on a *Create* button.
- The following sequence should be respected in terms of acessibility : 
*Name* -> tab key press -> *Status* -> tab key press -> *Enter button*

US0004 - Modifying an existing pet
=================================
Story points : 10

Description
-----------
As a pet store user I want modifying my existing pets so that I can update their status

Acceptance Criteria
-------------------
- Be able to trigger the pet edit by clicking on the pet name or pet status
- 3 ways to quit the editing of a pet
    - Pressing the *Esc* keyboard key => Changes should be discarted and not saved.
    - Pressing the *Enter* keyboard key => Changes should be saved.
    - Clicking outside the edition zone => Changes should be saved.

US0005 - Exposing a REST api
============================
Story points : 20

Description
-----------
As a pet store user I want to access my resource by using the following REST API
- GET /api/pets : Returns the JSON representation of my pets
- GET /api/pets/{id} : Returns the JSON representation of my pet having ID = {id}
- PUT /api/pets/{id} : Update an existing pet, where {id} is the unique ID of the pet
- DELETE /api/pets/{id} : Delete an existing pet, where {id} is the unique ID of the pet

Acceptance Criteria
-------------------
Assumptions :
- We have one pet having `id=1`, `name=Pluto`, `Status=Available`
- All REST calls requiring content to be passed are providing a body encoded as `application/json`

calling GET /api/pets
---------------------
Should return :

```javascript
[
  {
    "id": 1,
    "name": "Pluto",
    "status": "Available"
  }
]
```

calling GET /api/pets/1
-----------------------
Should return :

```javascript
{
    "id": 1,
    "name": "Pluto",
    "status": "Available"
}
```

calling UPDATE /api/pets/1
--------------------------
With http body :

```javascript
{
    "id": 1,
    "name": "Pluto",
    "status": "Sold"
}
```

Should return :

```javascript
{
    "id": 1,
    "name": "Pluto",
    "status": "Sold"
}
```