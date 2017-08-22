# Mondrian

There are two components to this assignment:

## 1. Mondrian Painting

Build [this](https://jenniferdewalt.com/mondrian.html). It requires HTML, CSS, and JavaScript.

![](https://cl.ly/j7wM/Screen%20Shot%202017-02-13%20at%206.36.28%20AM.png)

You are provided with HTML and CSS, so you will need to begin with the JavaScript portion.

<!-- done to this point -->





















## 2. Saving Paintings

This component builds upon the first, adding server-side functionality to **save** a painting. 

It requires AJAX, some web application framework (e.g. Sinatra, Flask, Rails, or even just PHP), and a persistent data store (e.g. a CSV file or a SQL database).

When the user clicks on the SAVE button (already included in the HTML you're provided with), an AJAX request should be sent to the web server. The state of the painting should be sent along with that request (in the form of request vars--like in the query string, for example). Thus, when the server receives the request, it can save the painting information to the CSV.




















### Bonus (Optional)

Add a feature that lists all saved paintings (perhaps just by timestamp, or some other easy identifier) on the Mondrian webpage. Then, when any saved painting is clicked, it is loaded onto the actual Mondrian canvas.