# Question Punk Exercise

Hello!
The project is made to help you demonstrate your web development skills.

## Overview

In this exercise you will be using React, NextJS, and TailwindCSS to make three pages of a blog app.

You're going to get the hang of TailwindCSS and have some fun with NextJS features like server-side rendering, cool app layouts, and dynamic URL tweaks. Your job is to whip up some pages and components that match the Figma designs, simulate an API to feed data to those pages, and follow the directions on how to use the right NextJS features for the job.

The goal of this exercise is to evaulate your ability to prepare well organized components:

- demonstrate styling components with TailwindCSS
- showing the ability how would you design the the components, storage and the relations between them

## Instructions

To kick things off, go ahead and create a fork of this repository. We've set you up with a ready-to-roll project that includes React 18, Typescript, NextJS 13, TailwindCSS, and SWR, all pre-installed and configured by default.

If you'd like to incorporate any additional packages, feel free to do so, but please clarify your reasons for choosing them.

### Mock blog API

You can used any mock API that you wanted. For example here is one of them:

https://jsonplaceholder.typicode.com/

and mock the following routes:

- Getting a list of the posts
- Getting details of an post from its ID

Note: the endpooint `/posts/#ID#` doesn't contain a photo url, but you can use it from the route `/photos/#ID#` by use the same id.

We are expecting you to do error handling for requests/functions. Be prepared to get asked about the reasons why you decided to handle this way.

### Make three pages using NextJS App Router format

The designs for the pages can be found in [Figma file](https://www.figma.com/file/lUbwgHr7OTh4IEf1Y4szwf/NextJS-Ecommerce?node-id=0%3A1&t=bHXi1DmZpSYk17Wd-1) shared with you.
Implement a root layout and individual layout files where needed.

Implement the designs, creating components where it makes sense and following best practice organization.

- `/dashboard/list`
  Based on the List page design, develop a page that employs a top navigation bar layout, displaying a list of the user's post items in the main content area. Utilize SWR to fetch data on the client side from the mock API. While the data is loading, display a loading icon in place of the list.
  
  The list items don't require any additional functionality, except that clicking on an item should navigate you to the /item/[id] page corresponding to its ID. The appearance and UI of the top navigation can be basic and need not be an exact match with the design, especially if it consumes a lot of time.

- `/dashboard/card`
  Following the Card page design, create a page that uses a side navigation bar layout with the main content showing a grid of cards of the user's post items.
  Use swr to load the data client side from the mock API (similar to `/dashboard/list`). Before the data is loaded, show a loading icon in place of the grid.
  The card items do not need to have any functionality other than when clicking the View button it will take you to the /item/[id] page of its id.
  The appearace/UI of the top navigation is not important and does not need to match the design if it is time consuming.

- `/item/[id]`
  Following the Detail page design, create a page with the Catch-all Segment to show details of a certain item. This page can use either layout configuration (Route groups may be helpful) and does not need to contain all text content from the design. This page should be Server-Side Rendered with NextJS - load the items details from the API and pass it to the page.

## Submission
Send us a link to your forked repo and we'll run it locally.

### Thank you

💡 Inspired by Simplify team: [origin](https://github.com/SimplifyJobs/frontend-assessment)
