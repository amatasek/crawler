
# Crawler

A tool that searches US State government websites to help find unclaimed money

## Information

### Authors

* **Andrew Matasek** - *Sole Developer* - https://github.com/amatasek

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Description

### General Approach

While building this application I kept a few key principles in mind

- **Lightweight**: Only use an outside library if absolutely necessary
- **Simple**: Build the application around the problem at hand without worrying about fancy features
- **Readable**: Use good formatting and opt for code readability over brevity
- **Organization**: Organize the code in a way that is understandable and scalable for future developement. No single file main.js app

### Server

The server is a node.js app that is responsible for receiving input from the client and crawling one or more US State government websites before returning the results. To accomplish this it using the following npm packages:

- **Express**: The base application framework
- **Request** Serves the client
- **Socket.io**: Used to communicate with the client via websocket
- **Zombie.js**: A headless web browser used to simulate form input and scrape the results of the form submission

### Client

The client provides a useful interface to interact with the app. It is built completely from HTML, CSS, and vanilla JavaScript. I opted to forgo using tools like jQuery, Bootstrap, or Handlebars to challenge myself and to practice the basics. Only two outside resources are utilized by the client:

- **Socket.io**: Used to communicate with the server via websocket
- **FontAwesome**: Who doesn't like pretty icons?

## How to Use

### Prerequisites

In order to use this app, your computer must be equipped with the following:

 1. Node.js 8 or above
 2. A modern web browser

### Installation

 1. Clone or download the code in this repo: `git clone https://github.com/amatasek/crawler/`
 2. Open a command prompt and navigate to the root folder of the app `cd crawler`
 3. Use npm to install the required node packages `npm install`
 4. Start the app `node start`

### Using the app

Once the app is installed and running, navigate your browser to `localhost:3000` to view the interface. If port 3000 is already taken on your machine, the port number can be changed in the file `statics/settings.js`.