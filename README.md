# Angular SaaS Dashboard

A modern **B2B SaaS dashboard** built with **Angular** and **RxJS**, focused on clean architecture, scalability, and real-world enterprise patterns.

This project was created to demonstrate best practices for Angular applications commonly used by EU and UK-based companies.

---

## 🚀 Features

* Modular and scalable architecture
* Standalone components (Angular 16+)
* Lazy-loaded routes
* Mock authentication flow
* Dashboard layout (sidebar + toolbar)
* Example CRUD feature (Customers)
* Loading and error states
* Clean and maintainable codebase

---

## 🧱 Architecture

The project follows a **feature-based architecture**, commonly adopted in large Angular codebases.

```text
src/app
 ├── core/
 │    ├── services/
 │    ├── guards/
 │    └── interceptors/
 ├── features/
 │    ├── auth/
 │    ├── dashboard/
 │    └── customers/
 ├── shared/
 │    ├── components/
 │    └── pipes/
 └── app.routes.ts
```

* **core**: singleton services, guards, interceptors
* **features**: business domains and pages
* **shared**: reusable UI components and utilities

---

## 🛠️ Tech Stack

* Angular 16+
* TypeScript
* RxJS
* SCSS
* Angular Router
* Mock API (in-memory or local mock service)

---

## ▶️ Getting Started

### Prerequisites

* Node.js 18+
* Angular CLI

### Install dependencies

```bash
npm install
```

### Run the application

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200
```

---

## 📸 Screenshots

> Screenshots will be added as the project evolves.

---

## 🎯 Project Goals

This project aims to showcase:

* Real-world Angular patterns
* Clean and readable code
* Scalable frontend architecture
* Readiness for remote and international teams

---

## 📄 License

This project is for demonstration and portfolio purposes.

---

## 👤 Author

**Gabriel Rogério**
Frontend Engineer (Angular)
5+ years of experience

* LinkedIn: [https://www](https://www)
