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
On the initial loading of data, users and todos were presented in the frontend and were fresh as the data had been retrieved from the database. The configuration of the mockapi is then changed, for example, to send different numbers of users and todos. Upon reloading the browser one would expect (or hope) that a new set of data is seen, but this is not the case as the original or stale data is held in a server cache; no amount of resetting and purging in the browser has an effect.  

To solve this problem, the developer can use revalidatePath or revalidateTag.  

In each case, the cache is invalidated and new data requested when the path in question is next visited.  

Below are the server-side actions that have been coded and which call either revalidatePath or revalidateTag.  


![image](https://github.com/johnhm22/nextjs-revalidation/assets/71333679/95bcad19-0553-45a1-9c1d-6b2f5569e8cb)



### Reference  
The code is based on an exercise produced by [Hamad Bahram](https://www.youtube.com/watch?v=-mPm2IRkacM) who I rate highly.  




