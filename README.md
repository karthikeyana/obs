# obs(Online Book Store)

Prerequisites
=============

* node 8.11.2 or above
* npm 5.6.0 or above
* mongoDB 3.6.4 or above

Installation
============

From the root folders of the project execute:

```bash
npm install
```

Run
===

```bash
npm run dev
```
# api details 

common apis:
===========
1) sign-up
```
url: http://localhost:8080/user/sign-up
method: post
params: first_name, last_name, email_id, password, role 
```
1) sign-in
```
url:http://localhost:8080/user/sign-up
method: post
params: email_id, password
```
user apis:
==========
1) list book
```
url:http://localhost:8080/book/list-book
method: get
params: sid, user_id
```
1) search book
```
url:http://localhost:8080/book/list-book
method: post
params: sid, user_id, author, isbn, book_title, genre
```
editor apis:
============
1) add book
```
url:http://localhost:8080/book/add-book
method: post
params: sid, user_id, author, isbn, book_title, genre, file(image)
```
1) edit book
```
url:http://localhost:8080/book/edit-book
method: post
params: sid, user_id, author, isbn, book_title, genre(image)
```
