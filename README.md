# learnEJS
This project will help a person understand the working of EJS (Embedded JavaScript).

###Views
  
  View is the webpage that will be served to the client, it can be static/dynamic. The server, when requested with a particular route, it serves the view along with data according to request.
  
  This repository contains the following views which are stroed in [`views`](https://github.com/hvarday/learnEJS/tree/master/views) folder
  
  *  [/sample](http://localhost:3000/sample)
  *  [/](http://localhost:3000/)

###New Views(In Progress)
  * [/product](http://localhost:3000/product)
  * [/projects](http://localhost:3000/projects)
  * [/record](http://localhost:3000/record)

###Instructions for Installation
  
  *  Clone this repo
  *  Install Node.js from [here](https://nodejs.org/en/download/)
  *  Install Dependencies  `npm install`
  *  Run the server        `npm start`
  *  Goto                  [localhost:3000](http://localhost:3000)

###Example

  Suppose this object `{ "Name":"David Bowie", "Songs":["Man who sold the world", "Starman", "Space Oddity"]  }` is provided by the server to a particular view, and this data is to be displayed on the page which is requested by the client, then the view will include the following lines of code-
  
  1.  <%= key %>  - will result in rendering the value of `key` (property of the object defined above).
      
    <%= Name %> - In this case it will be `David Bowie`
  
  2.  <% %> - will execute as normal javascript.
  
      For displaying the list of `Songs` -
      ```
      <%  for(var i=0; i<Songs.length; i++){  %>
          <%= Songs[i]  %>
      <%  } %>    
      ```
      
For documentation on EJS goto this site -> http://embeddedjs.com/
