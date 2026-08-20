---
permalink: /blog/:year/:month/:day/:title
layout: post
title:  "Musings of My Journey: Building My Portfolio with AI"
date:   2026-08-19 01:52:33 +0800
categories: reflections
image: ...
status: draft
---
For the longest time, I have been searching for an ideal way to build my portfolio. When I was a fresh graduate back in 2018, I built my very first portfolio using Wix. It was easy and fuss-free, and at the time, that was exactly what I needed. 

I stayed with Wix for years until February 2025, when I was retrenched.

Having been employed for a long while, I haven't updated my portfolio for awhile. When I looked at it after my retrenchment, I felt that my Wix portfolio no longer felt like me as a designer. My work and professional identity had evolved, but my portfolio had not kept up. It no longer reflected where I was in my career. 

I could have redesigned my portfolio on Wix. But the subscription costs had gradually increased over the years, and it became unsustainable and unreasonable for me to maintan the premium plan. I made the painful decision to cancel the plan and look for other solutions.

### Months Before the Leap of Faith — Searching for the Right Tool
As I was searching for a new job, I needed to put together a portfolio quickly. Notion became my next tool of exploration. I used Notion to manage other aspects of my life so I thought it would be perfect if I could also keep my portfolio on the same platform. 

Besides, it was also a popular tool among UX designers at that time due to the modular and blocky way that it was designed. It was easy to populate the content and come up with something decent enough for a job search. 

However, the level of customisation  on Notion was limited unless I rely on third-party tools. I wanted more control over the interations on my portfolio, rather than work within the constraints of a template. I could probably have made Notion work with enough third-party tools and workarounds, but that wasn't really the direction I wanted to go, considering the potential costs and maintenance that would come with it.

Around this time, Figma was the preferred prototyping tool within the UX and product design industry. Framer then gained popularity rapidly because its interface was similar to Figma, a user experience familiar to majority of the industry.

### Trying to find my place and the Imposter Syndrome
At this point, I was still a creative designer trying to break into the UX industry. Framer seemed like the direction to go be a part of the party. I hoped that it would finally be the tool I was looking for.

But after spending some time with it, I realised it wasn't quite the right fit for me.
I wanted more flexibility and customisation than it could give me.

Honestly, I struggled to understand why so many designers loved Framer when its features seem limited without relying on paid plugins or plan. 

Maybe I was missing something. I started reading  forums and discussions, looking for other designers or developers who felt the same way. However, most of what I found was discussions about Framer's pricing.

Even though I felt out of place, I decided to move on to Webflow. I enjoyed using Webflow much more. It gave me the flexibility I was looking for and allowed me to build something that felt more like my own.

But there was one problem: It was too expensive for me.

That is when I made the decision to build my portfolio myself. I started coding, with what little HTML and CSS knowledge I had. The website you see today is the result.

### Blogspot: The unexpected learning resoure

My earliest exposure to HTML and CSS came from the Blogspot days around 2010. Back then, I was mostly interested in customizing my previous blog and experimenting with snippets of codes I found online. I understood some basic HTML and CSS without formal training in coding.

Fast forward to 2025, and that tiny bit of knowledge became the starting point for rebuilding my portfolio. I never knew that random experience I had would become useful again. I began by building a few pages, styling them with HTML and CSS.

In the beginning, I copied the codes of default sections on every single page. Then, I wondered if there is a way where I could have repeated sections as a separate file, and then import it on every page so that it gets updated automatically across the site when I update the master file.

Then, I also needed some information, such as project content, to be dynamic in consideration of longer term management.I did not know how to selve this problem so I consulted ChatGPT. One of the earlier conversation exposed me to PHP. 

### Learning to Discern What Was Not Working and Turning Back
Initially, PHP seemed like the direct antidote to my problem, so I experimented with it. However, I quickly realised that hosting and deploying a PHP-based website was going to introduce another layer of complexity that I wasn't prepared for.

So I went back to what I knew - HTML, CSS and JavaScript.

This became a recurring theme throughout the entire process. Try something. Get stuck. Find another way. Try again.

### Learning to Deploy
After weighing the options, I decided that GitHub would be the best option for hosting my website. So I will need to work with HTML, CSS, and Javascript since GitHub could not host PHP.
That introduced me to another unfamiliar territory: deployment.
My husband works as a Project Manager within the technology industry. I frequently hear him using the word 'deployment' whenever he needs to work late, but I could never imagine how the process was like. Who knew that I will be deploying my own digital product one day.

The first problem was that my Javascripts were not running and I needed a way to check the work before I deploy the changes. Initially, my files were all HTML files and I could view it with a browser offline and through Local Host 8000. However, I needed a way to simulate the site like a real one. I then discovered Jekyll,a static site generator, which could allow me to preview the website with Local Host 4000. 

Then, more bugs started appearing. Sometimes I would upload my website and discover that something was completely broken. A page wouldn't load correctly. A style wouldn't appear. A link wouldn't work. Something that looked perfectly fine locally would suddenly behave differently online. There was a lot of trial and error to fix them.


### ChatGPT Became My Coding Companion

I started using ChatGPT to troubleshoot problems. At first, my questions were embarrassingly simple. Why isn't this working? What does this error mean? Where should I put this code?

Why does it work locally but not after I deploy it?

Sometimes ChatGPT would give me a solution and I would simply copy and paste it. But I know that wasn't enough. If I blindly copied everything AI gave me, I might get a working website without actually understanding what I was building. So I started asking deeper questions.

Instead of only asking:

> "Can you fix this?"

I started asking:

> "Why is this happening?"
> "Can you explain what this code does?"
> "Is there a simpler way to structure this?"
> "What are the trade-offs between these approaches?"

AI was not just a code generator, it was my learning partner. I wasn't suddenly transformed into a developer. I still had plenty of gaps in my knowledge.
But I had something I didn't have before: a way to ask questions whenever I got stuck.

### My First Solution Wasn't the Best Solution
As the portfolio grew, I needed a way to manage all my project content. My first approach was to use JSON with JavaScript. It worked.
But as I added more projects, I started finding the structure increasingly hard to manage in the long term. The project content was sitting separately from the projects themselves, and having more projects meant a longer JSON file and more words to search through.

Just because something works doesn't mean it's a good solution. So I started exploring Jekyll more seriously beyond making it a tool to give me a website preview.
While I discovered Jekyll at an earlier stage, I didn't fully understand how to use it. After some exploration, I realised how I could code my own reusable layouts, and even manage a blog through it! Eventually, I started learning about YAML and Markdown. Instead of putting everything into large JavaScript or JSON structures, I could manage content in a much cleaner way.

I could write my blog posts in Markdown. I could use YAML to manage structured content. I could create reusable layouts instead of repeating the same HTML across different pages. Suddenly, my code started becoming much simpler. And more importantly, I started understanding why it was simpler. 

### Realising my journey was bigger than I think
Before I knew it, I wasn't just building my website, I was designing a system. Initially, I was thinking about how I could populate the static pages. As I explored and built more, I started thinking about the underlying system. How should projects be structured? How can I make one change without having to update ten different pages?
How should content be separated from presentation? What should be reusable? How should the website behave when I add a new project?
These are questions that started feeling surprisingly familiar.

They reminded me of UX. I was thinking about structure, consistency, scalability and reducing unnecessary friction. In other words, I was discovering and applying some of the same principles I learnt in my General Assembly UIUX Immersive programme — except this time, I was designing the system behind my own portfolio.

### How I leveraged AI in this journey

Given that I understood how to manipulate the codes, this portfolio website was not 100% vibe coded. At the same time, I do not think I could have built the website the same way this fast without the help of AI. AI helped me bridge the gaps between what I knew and what I needed to learn.

Sometimes the AI-generated solution wasn't right. Sometimes I didn't understand the code it gave me. And that's perfectly fine.

The important thing was that I was actively involved in the process, learning while doing. I wasn't simply asking AI to create a finished website like a vibe coder. I was using it to shorten the distance between "I don't know how to do this" and "I think I understand how this works now."
That distinction matters to me.

### The Uncomfortable Part Wasn't Coding

The uncomfortable part of this journey wasn't actually learning HTML, CSS, JavaScript, YAML or Jekyll.

It was confronting how little I knew.

As a graphic designer, I'm used to being comfortable in my own domain. I know how to make a screen aesthetic and functional with layout, colours, and content. AI-assisted web development pushed me beyond my comfort zone.

I had to ask basic questions. I had to Google things. I had to read documentation. I had to experiment. I had to break things. And sometimes, I had to admit that I had no idea what I was doing.

There was something strangely humbling about that. But there was also something liberating about it. Because I slowly realized that not knowing something isn't the same as being incapable of learning it.

### My Portfolio Is More Than a Portfolio Now

At this juncture, my portfolio is still a work in progress. But I'm really proud of how it is now, and is not because I think the website is perfect.

I'm proud because I can look at what I have built and see the progress behind it.

I started with basic HTML and CSS knowledge from more than a decade ago.
I experimented with PHP and turned back when I realised it does not serve what I need. I learned how to deploy a website through GitHub. I struggled with Jekyll. I experimented with JSON and JavaScript. I learned YAML. I learned Markdown. I learned how to create reusable layouts. I simplified my code.

Along the way, I became much more comfortable with something I once considered outside my skill set.

The website is therefore more than a portfolio. It is a record of how I learned.

### Two sides of the coin

The no-code tools in the market exist to elevate some pain painpoints for businesses. While such tools provide templates that could speed up website development, there are limitations for what each platform could offer.

On the flip side, coding my self with Visual Studio Code provides me with full control of how I want the website to look. However, it is not a tool everyone would prefer to use because of the complexity in maintenance.

Between using default templates and prioritising having my portfolio speak about me, I chose the latter. I prefer having my portfolio speak about me the way I want it, and not conform to pre-dictated methods.

Besides, building my own website gave me something that no template could give me: ownership and afforability

I could decide how it looked. I could decide how it worked. I could decide how content was structured. And I could change it whenever I wanted.
More importantly, the process forced me to think about who I am as a designer.

### What I Learned Along the Way

The biggest lesson I took away from this experience is that a portfolio isn't just a showcase of your work. It's also a reflection of how you think. When I first started building portfolios, I was mostly concerned with making them look good.

Now, I care much more about whether they communicate something meaningful. What do I care about? How do I approach problems? What have I learned? What am I still learning? What kind of designer do I want to become?

Those questions are much harder to answer than choosing a website builder. And perhaps that's why building a UX portfolio is uncomfortable in the first place.

You're not just designing a website. You're designing a representation of yourself. And unlike a client project, there is no user brief telling you exactly what to do.
You have to figure it out yourself. I'm still figuring it out. But for the first time in years, I'm no longer searching for the perfect platform.
I'm building something that feels like mine.

And for now, that's enough.
