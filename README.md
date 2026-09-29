# Odin Info Site

A multi-page website served with a hand-rolled Node.js HTTP server — built as The Odin Project's first backend exercise to learn how routing, file-serving, and error handling work without any framework.

---

##  Preview

| Home | About |
|------|-------|
| ![Home page](https://i.ibb.co/0RZBWdnr/Screenshot-2026-09-29-112752.png) | ![About page](https://i.ibb.co/gbf9QqjV/Screenshot-2026-09-29-112626.png) |

| Contact | 404 |
|---------|-----|
| ![Contact page](https://i.ibb.co/y11g3zb/Screenshot-2026-09-29-112643.png) | ![404 page](https://i.ibb.co/8D3JX7Bw/Screenshot-2026-09-29-113222.png) |

---

##  Features

- **Four pages** — Home, About, Contact, and a custom 404
- **One shared stylesheet** — `styles.css` is served by the same Node.js server and applied across every page
- **Responsive layout** — flexbox-based design that adapts from phones to desktops
- **Contact page** — tap-to-call phone link, address, opening hours, and a message form
- **Accessible by default** — visible keyboard focus styles, `prefers-reduced-motion` support, and semantic HTML throughout
- **Inline SVG favicon** — embedded directly in each `<head>` so there is no extra network request to load it
- **Zero dependencies** — uses only Node.js built-in modules (`http`, `fs/promises`, `path`)

---

##  Project Structure

```
odin/
├── info.js          # Entry point — creates the HTTP server and handles all routing
├── index.html       # Home page
├── about.html       # About page
├── contact-me.html  # Contact page with form, phone link, address, and hours
├── 404.html         # Custom "page not found" page returned on any unknown route
├── styles.css       # Single shared stylesheet for all four pages
└── package.json     # Project metadata; defines the `npm start` script
```

---

##  Getting Started

Follow these steps exactly — no prior setup beyond Node.js is needed.

1. **Check that Node.js is installed.**  
   Open a terminal and run:
   ```bash
   node --version
   ```
   You should see a version number (e.g. `v20.x.x`). If you don't, download Node.js from [nodejs.org](https://nodejs.org) and install it first.

2. **Clone the repository.**
   ```bash
   git clone https://github.com/Basliel-Sisay/Info-Site.git
   ```

3. **Move into the project folder.**
   ```bash
   cd Info-Site
   ```

4. **Start the server.**
   ```bash
   npm start
   ```
   You should see the terminal hang (no output) — that means the server is listening.

5. **Open the site in your browser.**  
   Visit: [http://localhost:8080](http://localhost:8080)

6. **Explore the other pages.**

   | Page    | URL                                    |
   |---------|----------------------------------------|
   | Home    | http://localhost:8080/                 |
   | About   | http://localhost:8080/about.html       |
   | Contact | http://localhost:8080/contact-me.html  |
   | 404     | http://localhost:8080/anything-else    |

7. **Stop the server** when you're done by pressing `Ctrl + C` in the terminal.

---

##  How It Works

`info.js` creates a plain `http.Server`. On every request it checks `req.url` against four routes:

| Route              | Response                         |
|--------------------|----------------------------------|
| `/`                | Reads and serves `index.html`    |
| `/about.html`      | Reads and serves `about.html`    |
| `/contact-me.html` | Reads and serves `contact-me.html` |
| `/styles.css`      | Reads and serves `styles.css`    |
| anything else      | Reads and serves `404.html` with HTTP status `404` |

All file reads are async (`fs/promises`) and any unexpected error returns a plain-text `500` response.

---

##  Built With

- [Node.js](https://nodejs.org) — runtime (no frameworks, no npm packages)
- [The Odin Project](https://www.theodinproject.com) — curriculum this project is part of

---