# Web Development Workshop: HackSMU VI

This repository holds the materials and code for the intro to web development workshop @ HackSMU VI (Fall 2024). In this workshop, we will cover how to create a simple full-stack blog web application using `Next.js 14` and `MongoDB`.

For the sake of time, there is an incomplete (initial) version of the code, which we will use in the demo and build up to a completed project. The completed version is also included in this repository for anyone who wants to come back and take a look. 

You can access the completed code by running `git checkout endofsession`.

- To see all of the available branches (versions of the code), run `git branch -a`.
- To navigate back to the main branch from endofsession, run `git checkout main`.

# Setup (Do prior to the Workshop)

## Prerequisites
You must have the following things installed on your laptop prior to the workshop for the interactive coding portion:
* **Node.js** (Installation: https://nodejs.org/en/download/current) 
    * (check if you have this by running `node -v` in your command prompt)
* **Git** (Installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* **A code editor or IDE** (VSCode, Sublime Text, etc.)
    * For this workshop, I will be using [VSCode.](https://code.visualstudio.com/download)

    * Suggested VSCode extensions (find Extensions tab, or `Ctrl + Shift + X`):
        * Next.js React Snippets by iJS
        * ESLint
        * Debugger for Chrome (See [link](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code))
        * Auto Rename Tag
        * Tailwind CSS IntelliSense
        * TODO Highlight

## Setup Application

### General
1. Open a command prompt (cmd.exe on Windows; Terminal on Mac/Linux)
2. Clone the repository: `git clone https://github.com/mplennon617/hacksmuvi-webdev.git`.
3. Open the cloned codebase on your IDE
    * in VSCode you can do this straight from the terminal: `code .` (Don't forget the period)

### Next.js Application

We need to get our Next.js application up and running.

1. Go back to your command prompt. Make sure you are in your root directory (`[...]/webdev-workshop`). Run combinations of the commands `pwd`, `ls`, and `cd [...]` to navigate there.
2. Install dependencies: `npm install` 
    * Note: You need Node.js to `npm install`.
3. Run the Application: `npm run dev`
4. Navigate to `localhost:3000`. If you see "Simple Social App" at the top of your screen, you are done!

### MongoDB

For this workshop, you will read and write to an existing MongoDB Database. This portion of the setup connects you to the database.

1. Open the cloned `hacksmuvi-webdev` application.
2. Inside the root directory `hacksmuvi-webdev` you will see a file named `.env.local.example.` rename it to `.env.local`. This is where we will place our DB connection string.
3. The MONGODB_URL connection string is in the `#workshops` channel in Discord. Go to Discord and copy the string and place it into `.env.local`.


    ```
    MONGODB_URI=mongodb+srv://<username-REPLACEME>:<password-REPLACEME>@webdesign-workshop.oynsgim.mongodb.net/?retryWrites=true&w=majority
    ```

4. If not running already, run your application from the terminal: `npm run dev`
5. Navigate to `localhost:3000/testdb`. If a post loads after a few seconds, you are done!

### Start Coding!
At this point, you are good to go for the workshop! See you there!

# Workshop Materials

* Powerpoint: 
* Code Repository: https://github.com/mplennon617/hacksmuvi-webdev.git

# Prompt Cookbook

| Name         | Technique                      |    Prompt Template     |
|------------------|----------------------------------|-------------|
|        Generate component variants          |                  One-shot                |        New Prompt: Using the existing structure of the ...TECH STACK... code provided below, generate three unique variants of the card component with different styles and layouts. Each variant should have a distinct purpose, such as showcasing a product, displaying a user profile, and highlighting an event. Ensure that the components remain responsive and adhere to best practices in ...YOUR TECH STACK....
Existing HTML Structure:
...CODE...
Instructions:
Create three distinct ...CODE... variants using the provided structure.
...ADDITIONAL INSTRUCTIONS FOR UI/UX DESIGN... 
Use different CSS styles for each variant to differentiate them visually.
Implement any necessary props in React to make the components reusable.
Test each variant to ensure they function correctly in a Next.js environment.
Document the changes and reasoning for the design choices in a comment section.     |
|        Explain code snippet          |                 Chain of thought reasoning                 |     Analyze the following code snippet from my application, breaking it down step by step to help me understand the underlying concepts and principles of ...CONCEPT. Please explain each part of the code, focusing on the following aspects:
CONCEPT1: Identify any ...INSTANCES OF CONCEPT1... used and explain their purpose.
CONCEPT2: If applicable, describe how ...CONCEPT2... is used and why its beneficial.
CONCEPT3: Highlight instances of ...CONCEPT3... and explain how...
CONCEPT4: If present, explain how ...CONCEPT4... is being used in the code.
CONCEPT5: Discuss ...CONCEPT5, including ...DETAILS..., to clarify how.....
...CODE SNIPPET
Instructions:
Provide a thorough explanation for each aspect mentioned above, encouraging a chain-of-thought approach.
Use examples where necessary to clarify concepts.
Summarize the key takeaways regarding ...CONCEPTS... at the end of your explanation.         |

*By the way...these prompts look a bit long! If it's taking a lot of time to write the prompt, why not generate them with AI like I did (some human modifications were made)? Try using the covered techniques to come up with a prompt that can generate a template for you!! *

# Additional Resources

| Resource         | Description                      | Link        |
|------------------|----------------------------------|-------------|
|      Tailwind.css playground           |             An online IDE where you can experiment with Tailwind.css styling!                     |    https://play.tailwindcss.com/         |
|        Deploy your website with Vercel          |                 A platform for you to easily deploy Next.js applications to the web.                 |      [Video](https://www.youtube.com/watch?v=2HBIzEx6IZA)       |
|        Prompt Engineering 2024         |                  Short video "course" on prompt engineering basics.                |      [Video](https://www.youtube.com/watch?v=5i2Hn8OG94o)       |
| Async/Await in Javascript | Background on asynchronous functions in Javascript. We use these all the time in API/web communication.| https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await

