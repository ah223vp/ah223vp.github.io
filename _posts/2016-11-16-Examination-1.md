---
layout: post
title:  "Examination-1"
date:   2016-11-16
categories: assignment
---

### Examination-1 

This is a post with the answers to some questions that is part of this assignment.

#### *What do you think of pre-compiling you CSS* 
- **Compare to regular CSS:**  
I definetly prefer the pre processors compared to regular CSS.  
The best thing is the reducing of repeating yourself when writing. Regular CSS I really don´t like at all
because of the repeating and no support for variables, loops, inheritance etc.
- **Which techniques did you use?**  
I tried to experiment and use some different techniques to atleast try them out. Variables, some calculating, nestlings and 
inheritance were the ones I mainly tried out.  
The most confusing thing in the beginning were what the difference between scss and sass were, I ended up
using scss because I think the code looks better with curlybrackets then without.
- **Pros and cons:**  
Biggest pro for preprocessing has to be that it supports variables and inheritance, this makes the CSS alot easier
to change and maintain. It can be really frustrating sometimes when you change a color and forget the color code.
The variables will take care of this perfectly. Another big advantage is that you can nest the code
which makes it so much easier to read and write.

#### *What do you think of static site generators?*  
I think they are amazing. Atleast for projects like this one. 
The functionality with includes and layouts is the best feature by far. This saves alot of time and makes it alot easier to manage
the HTML elements. Altough it is very good and if you copypaste something from the internet you can be up and running within minutes
it is not and easy system I think. It took me quite some time before I felt comfortable with the different folders and the
"include" functions.  
It was easy to get lost in the beginning and not see where the elements were fetched from.  
We were using Jekyll for this project and it used something called Liquid to help include files and such.
I don´t know if all SSG´s are using Liquid but it feels like if it does not have something like it then it won´t be 
nearly as good. The fact you can loop through folders, pages and use the include statement makes the
entire application for me.  
- **What type of projects are they suitable for?:**  
Blogs are from what I understand the most used thing for it and I can see why.  
I think that almost any project where you want the the "frame" of the page to be pretty static and mainly change the content inside
is suitable for SSG usage. Maybe if you have a single page application of some sort you don´t get as much advantage of it
but you could still use it.

#### *What is robots.txt and how have you configured it for your site?*  
It is a textfile that you put in the root folder of your webpage containing instructions to webrobots
that looks at your page. Search engines for example can have robots that scan webpages for you´re google
search. What you can do then is having a robots.txt file that can tell that robot to not visit your site, don´t look in a specific folder etc.  
robots.txt if it exists will always be the first file to be looked upon by the robot on you webpage.  
These are not rules by and kind but more like instructions, and as with any instructions they are more guidelines 
so you can´t count on the robots following these instructions. There are malicious robots that will scan you´re 
entire directory regardless.  
I configured my file so that all robots can visit the page but not look at the file /about.html.

#### *What is humans.txt and how have you configured it for your site?*  
It is a textfile were you can add the authors of the site. what software you used and maybe who inspired some of the content.  
The client might not want to have the author and contribitors name on the site itself. Therefore it is and easy thing
to do, creating a textfile and mentioning all the people that had been involved and helped with the page.  
I have worked alone on my page so my file is pretty short, I have my own name, a link to the theme that inspired me
and some information regarding the software I used.

#### *How did you implement comments to blog posts?*  
I did as suggested in the assignment and used Disqus to get comments. It had native support with
Jekyll and seems to be really popular.  
First I created a Disqus account to get the short_name and connect to from my blog.  
Then I copypasted the JS code snippet to get the actual comment application to the site.
Then I made a include file name _disqus and inserted it to the html document. Some SCSS polishing later and 
it was done.
I set comment to true in the post layout so per default there will be comments on my posts.  
Setting comment: false in the post itself will disable them.

#### *What is Open Graph and how do you make use of it?*
A protocol that will make the link of your page abit more user friendly.  
Instead of just a blue link when you share it on social media you can have some text, a picture and alot of other features
with your link.  
To make it work you have to add some extra Meta tags to your site containing og: attributes.  
There are 4 need to have tags and those are:  
- title  
- type  
- image  
- url  
They are pretty self explanotory. The title if the title of the graph. Type is the type if the media, some media have different 
propetis from other. Image is wich image you want the link to have. url, which page the link should refer to.  
I made a separate html file containing the meta tags in the includes folder and then included that one in the header file.



