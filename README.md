# fibonacci-generator

Tech stack used: Postgres, Express, React, Node.

Database schema for this project consists of number (int) and value (varchar), which is stored as a string in order to avoid computational errors after the max integer value and allow the larger fibonacci numbers to be stored. 

Backend consists of a single endpoint, which would be a POST endpoint that receives the number and would both create and write new numbers into the database (if necessary) and query for the sequence up to the number desired. The endpoint would send the comma-separated string as the data, which would then be used to display, per the requirements of the assignment.

Frontend mainly consisted of two components, Home, which contains a place for the user to input the number of fibonacci numbers to display, and FibListPage, which was used to display the fibonacci numbers as a comma separated list.
