# MEAN Stack Developer Test Project
<br/>  

>## Download

* Clone or download the repository into your computer.

* Uncompress the file and you will have **FrontEnd** and **BackEnd** folders.  
<br />  

>## Install

* Make sure you have **Node.Js**, **Express** and **Angular CLI** latest version installed in your computer.

* For installing node_modules package for this project, open **Termainal** for MacOS or **Command Prompt** for Windows OS.

  - Under **FrontEnd** folder, run
  
    ```npm install```

  - Under **BackEnd** folder, run
  
    ```npm install```
    
<br />  

>## Execution

* Open **Termainal** for MacOS or **Command Prompt** for Windows OS. Use two windows to execute backend and frontend servers.

  - In the first window, run the command below under **FrontEnd** folder
  
      ```ng s```
      
    When you see **webpack: Compiled successfully.**, it means the front-end server is running.
    

    
  - In another window, run the command below under **BackEnd** folder
  
     ```node server```
    
    When you see **Server running on localhost:3000**, it means the back-end server is running.    

<br />  

>## Run On Browser

Open you browser and enter ```http://localhost:4200/``` in URL. It would show the home page as below.


![image](https://user-images.githubusercontent.com/12676014/39284520-aeaff13c-48e1-11e8-82c0-c5c9db1d9fec.png)

When you click "List" button, it will show you the list page. 
![image](https://user-images.githubusercontent.com/12676014/39304577-19676a3c-4928-11e8-9f2e-c6888837e744.png)

"Add New item" button allow users to add more rugs into database.
![image](https://user-images.githubusercontent.com/12676014/39304608-2cc9cb9c-4928-11e8-9d2e-51e3eb3991e4.png)

Review any item details by selected. It also allow you to edit or delete.
![image](https://user-images.githubusercontent.com/12676014/39304531-f5ada07a-4927-11e8-9448-f9962776084d.png)

If user using unexpected URL under this application, it will show you 404 page.
![image](https://user-images.githubusercontent.com/12676014/39305898-aa48f08a-492c-11e8-9869-6f01c9bd15f0.png)


You also can check the back-end by URL, Using:http://localhost:3000/api/rugs
![image](https://user-images.githubusercontent.com/12676014/39307917-1bd85d44-4932-11e8-82bb-8c146434af0b.png)

