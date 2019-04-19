# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Browser reqeusts data from the domain techtonic.com to be displayed using the information from the DNS server on how to get there.

## From start to finish, how does data reach you to be rendered in the browser?

The browser first checks the internet service provider’s DNS server to match up https://www.techtonic.com/ url to its I.P. address counterpart. Then the connection will go to the server or one of the servers hosting the techtonic.com domain. Then the file index.html (or something similar) file is retrieved, this data is broken up into smaller parts and reassembled on the client computer once all of the parts are accounted for. There may also be external libraries that the index.html depend on that the client computer doesn’t have previously saved so there may be additional data that is retrieved from different locations if these external libraries are not available from the hosting server.

## What code is rendered in the browser?

HTML code for content and structure, CSS for style and Javascript for function

## What is the server-side code’s main function?

Aside from hosting html pages, images, and other media, server-side code can also include verification, tracking, database query or e-commerce transaction. It is the function behind the front end code. (Front end code is also held in the server-side code) 

## What is the client-side code’s main function?

Aside from temporarily saving a copy of the front end code, client-side code would also contain external libraries required to render the full html page, runtimes, and possibly additional browser add-ons to access, change or display the html page in ways outside of the original front end code allows. Front side code can also contain software programs like messenger apps.

## What is runtime?

Runtime can mean the time a program needs to run before completing its task, or it can refer to any library, framework or platform that the code runs on like .NET

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

HTML: 1 index
CSS assets: bootstrap.min.css
JS assets: 5 from Techtonic, 3 from the browser, 1 from snap.licdn.com, 4 from promclickapp.biz
Images: 29
Etc: 8 font files 


## How many instances of the server-side code are available at any given time?

The only files that look like it might contain code meant for server-side was 2 javascript files. 1 app-23a0c48499e7fff75c0c.js that seems to contain manage what the pages should do if cetain situation occur like things not loading. Technically this is in the front code but does point to something the server-side is doing. The 2nd file was commons-59103433267debbd5c5.js that seems to be managing authentication, tracking, and possibly filtering or updating data depending on the user.
Everything else seems to just be realated to displaying the HTML page

## How many instances of the databases connected to the server application are created?

6
www.techtonic.com
Images.ctfassets.net
Promclickapp.biz
Stackpath.bootstrapcdn.com
uBlock Origin

