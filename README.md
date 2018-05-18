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
sign-up: ![sign-up](https://user-images.githubusercontent.com/10651426/40213859-4c30090c-5a75-11e8-8fe9-8d0f7ac0a469.png)

2) sign-in
```
url:http://localhost:8080/user/sign-up
method: post
params: email_id, password
```
sign-in: ![sign-in](https://user-images.githubusercontent.com/10651426/40214059-57faf174-5a76-11e8-96f0-fad5ac667f56.png)

user apis:
==========
1) list book
```
url:http://localhost:8080/book/list-book
method: post
params: sid, user_id
```
list-book: ![list-book](https://user-images.githubusercontent.com/10651426/40214128-b6782d0c-5a76-11e8-8425-9eacbc2efc63.png)

2) search book
```
url:http://localhost:8080/book/list-book
method: post
params: sid, user_id, author, isbn, book_title, genre
```
search-book: ![search-book](https://user-images.githubusercontent.com/10651426/40214148-d1c39fa6-5a76-11e8-812a-47dc0cd3594b.png)

editor apis:
============
1) add book
```
url:http://localhost:8080/book/add-book
method: post
params: sid, user_id, author, isbn, book_title, genre, file(image)
```
add-book: ![add-book](https://user-images.githubusercontent.com/10651426/40214097-81e8b64c-5a76-11e8-951a-56430b2970c3.png)

2) edit book
```
url:http://localhost:8080/book/edit-book
method: post
params: sid, user_id, author, isbn, book_title, genre, file(image)
```
edit-book: ![edit-book](https://user-images.githubusercontent.com/10651426/40214108-961db784-5a76-11e8-8724-beb08fe11d92.png)

# UI View:

login: ![login](https://user-images.githubusercontent.com/10651426/40214267-69310acc-5a77-11e8-8db8-35b0ef7a65d9.png)

register: ![register](https://user-images.githubusercontent.com/10651426/40214329-b4d4adee-5a77-11e8-9f55-c90ab17ff876.png)
