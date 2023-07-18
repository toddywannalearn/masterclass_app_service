# Masterclass App - Backend

This application implements the backend for the Masterclass App.

Below you can see the tools and guides used to create this project.

## Tools 🔧
> The necessary tools to develop and run the application.

### Prisma
Prisma is an open source next-generation ORM.

> **Object-Relational Mapping (ORM)** is a programming technique used to facilitate the interaction between a relational database and an object-oriented programming language. The main goal of ORM is to provide a high-level abstraction that allows developers to work with a database using objects and classes, rather than writing raw SQL queries.
> 
[Website](https://www.prisma.io/docs/concepts/overview/what-is-prisma)

---

### Nestjs
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

[Website](https://docs.nestjs.com/)

---
### Firebase
Firebase is a comprehensive and powerful mobile and web application development platform provided by Google. It offers a range of cloud-based services and tools that make it easier for developers to build, improve, and scale applications without having to manage the underlying infrastructure. Firebase provides a real-time database, authentication, cloud functions, hosting, cloud storage, and much more, enabling developers to focus on building engaging user experiences.

[Website](https://firebase.google.com/?hl=pt&authuser=0)

---
### Docker
Docker is an open-source platform that enables developers to automate the deployment, scaling, and management of applications inside lightweight, portable containers. It provides an efficient way to package an application and its dependencies into a single unit, ensuring consistency across different environments, such as development, testing, and production.

[Website](https://docs.docker.com/)

---

## Business 📋

> The following entities represent the necessary business model to implement the app whose main purpose is to show the lessons resolved in the course and the developer info.

### Entities
---
#### Exercise
- title: **string**
- category: **ExerciseCategory**
- repositoryUrl: **string**

#### Exercise Category
- category: **string**
- description: **string**
- exercisesList: **Exercise[]**

*Relation:*

Exercise 1..n ExerciseCategory

#### Profile
- name: **string**
- bio: **string**
- contato: **Contato**
- technologies: **Technologies**
- Skills: **Skills**

#### Contato
- nome: **string**
- contato: **string**

#### Technologies
- name: **string**
- logo url: **string**

#### Skills
- name: **string**
- level: **int**

## Docs 📚

[Prisma Quickstart](https://www.prisma.io/docs/getting-started/quickstart)

[Prisma/Nestjs](https://docs.nestjs.com/recipes/prisma)

[Docker with Mysql](https://hub.docker.com/_/mysql)

[Firebase](https://firebase.google.com/?hl=pt) 

[Firebase Admin/NPM](https://www.npmjs.com/package/firebase-admin)

[Nest](https://docs.nestjs.com/)


## Installation

```bash
$ npm install
```

## Running the app

> After starting the docker container to use the mysql database you can run the following commands to start the application. You can also set **sqlite** as the datasource database at your **schema.prisma** so you won't need a connection to the database.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# sync the prisma database
$ npx prisma migrate dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Ignored Files

> The following files must not be tracked by git, so you need to ensure that they're included in your gitignore file.

- .env
- FirebaseAccount.json

