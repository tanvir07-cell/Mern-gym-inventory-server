import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogs">
      <div className="blog-1">
        <h2>Difference between Javascript and Nodejs</h2>
        <p>
          JavaScript is a programming language used to write scripts on a
          website. NodeJS on the other hand is a JavaScript runtime environment.
          JavaScript can only be run in the browser. We can use it to run
          JavaScript outside of the browser with Node JS. JavaScript is used for
          client-side and frontend development.while NodeJS is mostly used for
          server-side and server-side development. JavaScript is capable enough
          to add HTML and play with DOM. Nodejs, on the other hand, cannot add
          HTML tags. JavaScript can run on any browser engine, such as JS Core
          in Safari and SpiderMonkey in Firefox. V8 is the JavaScript engine
          inside node.js that parses and runs JavaScript. JavaScript can run on
          any browser engine, such as JS Core in Safari and SpiderMonkey in
          Firefox. V8 is the JavaScript engine inside node.js that parses and
          runs JavaScript.
        </p>
      </div>

      <div className="blog-2">
        <h2>Difference Between Sql and No sql databases</h2>
        <p>
          SQL databases are related, and NoSQL databases are unrelated. SQL
          Database uses structured query language and has a default schema.The
          NoSQL database contains dynamic schemas for unorganized data. SQL
          databases based on are vertically scalable, while NoSQL databases
          based on are horizontally scalable. SQL databases are table-based,
          while NoSQL databases store documents, key values, graphs, or wide
          columns.SQL databases are good for multi-row transactions, while NoSQL
          is good for unstructured data like documents or JSON.
        </p>
      </div>

      <div className="blog-2">
        <h2>What is the purpose of Jwt and how does it work?</h2>
        <p>
          JWT (JSON Web Token) is an open value that is used to share security
          information between two parties - a client and a server. Each JWT
          contains an encoded JSON object, which contains a set of claims. JWTs
          are signed using a cryptographic algorithm to ensure that claims
          cannot be changed after the token is issued. Unlike all other web
          tokens, JWT contains a set of claims. Used to transmit information
          between two parties to a claim. This claim depends on the use of the
          hand. For example, a claimant may claim who gave the token, how long
          it may be valid, or what permission has been granted to the client.
        </p>
      </div>
    </div>
  );
};

export default Blog;
