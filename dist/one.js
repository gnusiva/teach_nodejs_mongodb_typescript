"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    console.log('inga vanthchi');
    res.send('Hello World!');
});
app.get('/name', function (req, res) {
    console.log('name.....');
    res.send({ name: 'siva', city: 'california' });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ2xDLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFBO0FBQ3JCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVqQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBNkMsSUFBTSxDQUFDLENBQUE7QUFDbEUsQ0FBQyxDQUFDLENBQUEifQ==