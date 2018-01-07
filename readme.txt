Route component
https://reacttraining.com/react-router/web/api/Route

URL-params syntax
----------
<Route path="/books/:topic" />      // /books/javascript и /books/react
<Route path="/books/:topic?" />     // /books, /books/javascript и /books/react
<Route path="/img/*.*" />           // /img/logo.jpg and /img/logo.png
<Route path="/**/*.jpg" />          // /img/logo.jpg and /img/front-end/react/logo.jpg