## Testing revalidation in NextJS using revalidatePath and revalidateTag  
A small project was set up to test and demonstrate the revalidation feature of NextJS v14.  

### Introduction  
When drawing data down from the server and displaying it in the browser after a while it can, unsurprisingly, become out of date. If updates to the data are made in the database, what is displayed in the frontend no longer represents the current state. The problem faced by the developer is how to update the data when even a hard refresh of the browser will have no effect because the data is held in a server-side cache.  

NextJS v14 provides the developer with a means to purge the cache and refresh it with the latest data. This process is known as revalidation. Two approaches are available; a "time-based revalidation" whereby revalidation will occur automatically after a defined time period has elapsed, or "on-demand revalidation" which is triggered manually. The latter is further differentiated into revalidation by path where a url path is defined and which will be subject to data revalidation and also revalidation by tag where revalidation takes place based on a defined cache tag.  

More details can be found at [NextJS revalidation details](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data).  

#### API Endpoint  
[Mockapi](https://mockapi.io) was used to provide an api endpoint from where dummy data could be retrieved.  
In this case an api was set up to get user data and another for todo data. This was then presented in the frontend.

#### Revalidation  
Three buttons were defined; one to revalidate the path ('/') and one each to revalidate users and todos.  
On the initial loading of data, users and todos were presented in the frontend and were fresh as the data had been retrieved from the database. The configuration of the mockapi is then changed, for example, to send different numbers of users and todos.  This is achieved in the mockapi dashboard by updating the number of users or todos as shown below.  


![image](https://github.com/user-attachments/assets/b514b670-0bff-4e86-adbc-36b2746dc6b7)


Upon reloading the browser perhaps one would expect that a new set of data is seen with the new number of users or todos, but this is not the case as the original, stale data is held in a server cache; no amount of resetting and purging in the browser has an effect.  

To solve this problem, the developer can use revalidatePath or revalidateTag.  

In each case, the cache is invalidated and new data requested when the path in question is next visited.  

Below are the server-side actions that have been coded and which call either revalidatePath or revalidateTag.  


![image](https://github.com/johnhm22/nextjs-revalidation/assets/71333679/95bcad19-0553-45a1-9c1d-6b2f5569e8cb)



### Class-Variance-Authority (cva) and twMerge  
This coding exercise has been used as an opportunity to become familiar with these two libraries.  

[CVA](https://cva.style/docs) takes the hassle out of customising UI components such as a button. In simple terms, a menu of different styles can be defined in a single place and when each button, for example, is required as part of a component various attributes can be defined for the button which correspond to the menu of styles. Thus styling can become highly customised, but still standardised and yet, at the same time, easy to code.  

Despite the flexibility of cva, there may still be instances when the developer wants to change the className as a one-off and this may conflict with the className defined in the style menu of cva. What is desired is that the one-off className overrides the className of cva. However, under normal circumstances the way css orders styles (css cascade) the desired result may not be the actual result; twMerge is a simple library that ensures what the developer wants is what the developer gets!

Here is a great explanation: [twMerge](https://github.com/dcastil/tailwind-merge/blob/v2.2.2/docs/what-is-it-for.md)  

#### Tip  
If using VS Code with the Tailwindcss IntelliSense extension, you can add the following to the settings.json file. This will mean the intellisense will work when populating the tailwind variants in cva styles menu.  

Copy it [here](https://www.tailwind-variants.org/docs/getting-started)

![image](https://github.com/johnhm22/nextjs-revalidation/assets/71333679/9e8cf4a3-3542-4b23-b02b-a306850d9d68)



### Running the code  
* Clone the repository to your local machine
* Set up api endpoints for users and todos using mockapi.io (the todos endpoint returned an array of objects with keys of name and status; the users endpoint provided keys of name and city)
* Define the mockapi endpoint in a .env.local file
* In the terminal, Run npm install to install all the libraries
* Again in the terminal, run npm run dev to start the server
* Open the browser at http://localhost:3000
* View the data in the browser then change the configuration of the endpoints in mockapi
* Refresh the browser and note there is not change
* Select the "Revalidate Users" button and see the user data update as the server side cache is purged
* Do the same for "Revalidate Todos"
* Reconfigue both endpoints again and select the button "Revalidate the entire path" and see both user and todo data refresh together
* Play around with the cva styles menu and adding in 'one-off' classNames directly into the button tag to see the effect



### Reference  
The code is based on an exercise produced by [Hamad Bahram](https://www.youtube.com/watch?v=-mPm2IRkacM) who I rate highly.  




