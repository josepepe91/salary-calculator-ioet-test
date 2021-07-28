# ioet Position test
## Install
Node Version: **14.15.4**

###To run in local follow the next steps:

- In the project root execute `npm install`
- Execute `npm start`

You will get the next output by console:

````
The amount to pay RENE is: 215
The amount to pay ASTRID is: 85
The amount to pay JOSE is: 220
The amount to pay JUAN is: 45
The amount to pay MARIA is: 25
````

### Change input and configuration

You can add or change input records in the file `/config/register.txt`. Every record must be in a new line with the format `ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

Also, you can change configuration (days, hours, hour cost) in the file `/config/config.js`

## Test
Tests have been written with Jasmine. The test folder is `/spec`, there are one test file for each source file organized with the same structure.

##Approach
In order to build the solution, a **javascript singleton** design pattern due to the simplicity of the project. Each function is independent and have global access. For the access to other files the ESModules type was configured in package.json



