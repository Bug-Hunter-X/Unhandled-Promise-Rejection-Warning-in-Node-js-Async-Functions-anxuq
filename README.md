# Unhandled Promise Rejection Warning in Node.js Async Functions

This repository demonstrates an unhandled promise rejection warning in Node.js and how to fix it.  Unhandled promise rejections can lead to crashes in your application, especially in production environments.

## Bug Description

The `bug.js` file contains an asynchronous function that throws an error. Because this error isn't handled appropriately, it triggers an 'unhandled promise rejection' warning in the Node.js console.

## Solution

The `bugSolution.js` file provides the solution by using a `try...catch` block to handle the error or using `.catch()` to handle errors within promises.

## How to run

1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `node bug.js` to observe the warning.
4. Run `node bugSolution.js` to see how the error is properly handled.