# 🔢 Simple JavaScript Counter with Refresh

A beginner-friendly counter project using **HTML**, **CSS**, and **Vanilla JavaScript**. This counter includes an **Increment** button to increase the count and a **Refresh** button that reloads the entire page.



## 🔗 Live Demo

[👉 View Live](https://CharithaYerra.github.io/js-mini-projects/counter/)  

---

## ✨ Features

- ➕ **Increment** the counter value
- 🔄 **Refresh** button to reload the page and reset the counter
- 🧠 Uses basic DOM manipulation
- 🎨 Simple and clean layout — easy to customize

---

## 🛠️ Technologies Used

- HTML5
- CSS3 
- JavaScript 

---

## 🧪 How It Works

```js
let count = 0;

function increment() {
  count++;
  document.getElementById("count").innerText = count;
}

function refreshPage() {
  location.reload();
}
increment() updates the text content of the count element.

refreshPage() reloads the browser window, resetting the counter.



📁 Folder Structure

counter/
├── index.html
├── style.css        
├── script.js
├── Screenshot.png
└── README.md

🙋‍♀️ Author
Y.Divya Charitha
