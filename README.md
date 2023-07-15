
## Entities

### Exercise
- title: string
- category: ExerciseCategory
- repositoryUrl: string

### Exercise Category
- category: string
- description: string
- exercisesList: Exercise[]

Exercise 1..n ExerciseCategory

### Profile
- name: string
- bio: string
- contato: Contato
- technologies: Technologies
- Skills: Skills

### Contato
- nome: string (whatsapp)
- contato: string (11 969012762)

### Technologies
- name: string
- logo url: string

### Skills
- name: string
- level: int


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
