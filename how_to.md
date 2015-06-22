How to Build a Marginally Usable Todo-list
==========================================

This article extends what's been taught in the Code4HK JavaScript Ignite! course and supplements knowledges necessary for building a Todo-list that is barely usable.

I'm a total beginner myself. Please feel free to question or comment on anything.

Step 1: Clarify the Requirements
--------------------------------

Here are what we want:

1. a web todo-list that runs in the browser,

2. the user may add tasks represented by text, and

3. the user may mark tasks done by removing them.

Here are what we don't need at the moment:

1. the app doesn't need to save the tasks for the long term, even if a refresh will wipe out everything, and

2. it doesn't need to be pretty.

Step 2: Plan the Outline
------------------------

We'll need three files:

1. **index.html**, which contains the structure of the page;

2. **style.css**, which make the page look nicer;

3. **main.js**, which allows the user to add and remove tasks.

Step 3: Build index.html
------------------------

Let's begin with the HTML. We'll have three parts:
1. A header, which shows the title;
2. A main section, which shows the task-list;
3. A footer, which contains a input-field and a button.

```
<html lang="en">
</html>
```