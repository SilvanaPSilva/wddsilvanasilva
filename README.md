- install libraries required
npm install
- run the server
node app.js


Project Info

Student: Silvana Pereira da Silva
Student Id: S00273672
Module: Web Design & Development (Y2Sem1)
Worksheet: 1 (Worth 5%) — Due end of Week 5
Stack: HTML, CSS, Bootstrap 5, Express + Handlebars (HBS)

## Checklist — Task 1 (Apply Bootstrap)

- ☑︎ Bootstrap **navbar** implemented on **all routes**
- ☑︎ Use **`container`** on every page/route
- ☑︎ Apply grid with **`row`/`col-*`** where there is columnar content
- ☑︎ Buttons use **`btn`** / **`btn-primary`** (or customized)
  Booking Page
- ☑︎ Forms use **`form-label`**, **`form-control`**, etc.
  Booking Page
- ☑︎ Images are responsive (**`img-fluid`**)
  Gallery Page
- ☑︎ Spacing via utilities (**`mb-*`**, **`py-*`**, **`g-*`**) instead of custom CSS
  Menu Page
- ☑︎ Selective overrides in **`custom.css`** only (avoid `!important`)

## Checklist — Task 2 (Contact Form using GET)

- ☑︎ Form includes **Name**, **Email**, **Message**
- ☑︎ All fields are **`required`**
- ☑︎ Form has **`method="get"`** and **`action="/thank-you"`** (or your chosen route)
- ☑︎ Create **`app.get('/thank-you', …)`** route
- ☑︎ Read submitted values from **`req.query`**
- ☑︎ Render **Thank You** view showing the submitted details
- ☑︎ Include **“Return to Home”** link/button on the Thank You page

## (Optional) Nice-to-haves

- ☑︎ Active nav link highlights the current route
  Gallery
- ☑︎ Basic accessibility: labels tied to inputs, `alt` text on images, keyboard-friendly nav

## Document the entire checklist in a Word document. For each item, include matching screenshots and/or the relevant lines of code.