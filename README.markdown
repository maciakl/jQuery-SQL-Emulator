jQuery SQL Emulator
===

JSQ is a simple SQL parser and pretend-database written in JavaScript with jQuery. It can be used to teach students simple SELECT SQL statements without access to a real database. The database here is basically a JSON object.

Details
-------

Here is the general idea: I want to be able to show how SQL works without the need of setting up a database. JSQ is purely client side app that will run just about anywhere. You set up a mock database as a JSON file (let's call it `db.json`) formated like this:

    { 
			"kitchen" : [	
							{"id": 1, "name": "chair"}, 
							{"id": 2, "name": "table"}, 
							{"id": 3, "name": "sink"}, 
							{"id": 4, "name": "stool"}
						]
    }

Put it somewhere on your server. Then you can just do:

    var sql = 'select id, name from kitchen';
    var db = 'db.json';

    JSQ.query(sql, db, function(result){
            document.write(result);
    });

See `example.html` for a more detailed example of how to use it with a live form. 

You can read about implementation details and inspiration for this project in [this old blog post][ti].

**Things that work:**

* Simple select statements: `select firstname, lastname from students where gpa > 3.0`

**Things that do not work:**

* The `select *` idiom is not implemented
* No aggregation functions like `sum` or `count`
* No `order by` clause
* No joins of any kind (single table operations only)
* Some syntax is problematic (eg `gpa > 2.0` works but `gpa>2.0` does not)

Dependencies:
---

JSQ depends on the following components:

  - [jQuery Framework][jq]
  - [jQuery.string Plugin][ds] by David E. Still

You can easily install these dependencies using [Bower][bo] by going to the project directory:

    bower install

This will create a `components` folder in that directory with all the dependencies. If you do this, then `example.html` should just work. If you don't want to use Bower then simply download latest jQuery and Dot String plugin and modify the links in the example file.

[ti]: http://www.terminally-incoherent.com/blog/2009/05/12/sql-emulation-tool-in-javascript/
[ds]: http://stilldesigning.com/dotstring/
[bo]: http://twitter.github.com/bower/
[jq]: http://jquery.org
