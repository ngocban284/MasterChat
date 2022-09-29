# Master Chat

This is a real-time chat web app that allows users to chat with any foreigner without knowing a foreign language.

## Master Chat Demo

<img width="1440" alt="Ảnh chụp Màn hình 2022-09-26 lúc 01 26 54" src="https://user-images.githubusercontent.com/92626813/192797129-b948a611-02df-4b05-b33d-8b67a739c7af.png">
<img width="1440" alt="Ảnh chụp Màn hình 2022-09-26 lúc 01 25 57" src="https://user-images.githubusercontent.com/92626813/192796552-6d4d42d8-fc2e-49da-b39f-f6d7af71f890.png">
<img width="1440" alt="Ảnh chụp Màn hình 2022-09-28 lúc 13 04 37" src="https://user-images.githubusercontent.com/92626813/192796636-328f4786-eafe-4e43-8de7-8bdb088f547e.png">
<img width="1440" alt="Ảnh chụp Màn hình 2022-09-28 lúc 13 05 34" src="https://user-images.githubusercontent.com/92626813/192796663-3c4ff3da-a631-45ff-aaf2-3c65458e7b43.png">
<img width="1440" alt="Ảnh chụp Màn hình 2022-09-28 lúc 13 05 45" src="https://user-images.githubusercontent.com/92626813/192796690-3e77d7bf-7814-46a1-8e42-3a2c6d03e80d.png">

# Build With

## Back-End

- [![Typescript][typescriptlang.org]][typescript-url]
- [![Graphql-Yoga][graphql-yoga.com]][graphql-yoga-url]
- [![Apollo][apollo.com]][apollo-url]
- [![Graphql][graphql.com]][graphql-url]
- [![Mysql][mysql.com]][mysql-url]
- [![Prisma][prisma.io]][prisma-url]
- [![WebSocket][websocket.com]][websocket-url]
- [![Eslint][eslint.org]][eslint-url]
- [![Git][gitscm.com]][git-url]
- [![Github][github.com]][github-url]

## Front-End

- [![Typescript][typescriptlang.org]][typescript-url]
- [![React][react.com]][react-url]
- [![WebSocket][websocket.com]][websocket-url]
- [![Apollo][apollo.com]][apollo-url]
- [![Eslint][eslint.org]][eslint-url]
- [![Git][gitscm.com]][git-url]
- [![Github][github.com]][github-url]

### Installation

1. Clone the repo

```sh
    git clone https://github.com/ngocban284/MasterChat.git
```

2. Install depedencies packages

```sh
    cd server
```

```sh
    yarn i
```

```sh
    cd client
```

```sh
    yarn i
```

3. Enter your Environment variables

Front-End Example

```sh
    HTTP_URI = http://localhost:4000/graphql
    WS_URI = ws://localhost:4000/graphql
```

Back-End Example

```sh
  PORT=4000
  DATABASE_URL= your mysql url

  [NAVER API]
  CLIENT_ID= your client id
  CLIENT_SECRET= your client secret
  PAPAGO_TRANSLTE_URL= https://openapi.naver.com/v1/papago/n2mt
  PAPAGO_DECT_URL= https://openapi.naver.com/v1/papago/detectLangs

  [JWT]
  JWT_SECRET_KEY= ricado

```

4. Run

```sh
    cd client
```

```sh
    npm run dev
```

```sh
    cd server
```

```sh
    npm run dev
```

## The Project

This is a web app where users can choose the right language for them to join chat rooms with other foreigners.

Users feature :

- Change the light or dark mode.
- Change random avatar that you like.
- Enter a nickname to join the chat room.
- Change your language.
- Create a chat room.
- Enter the code to join the chat room.
- Voice text recognition.
- Check the number of people in the chat room and the language they speak.
- Exit chat room

Future feature:

- Displays a list of chat rooms.
- Create a public chat room.
- Join random public chat room.

...

### Project Architecture

<img width="1120" alt="Ảnh chụp Màn hình 2022-09-28 lúc 23 15 32" src="https://user-images.githubusercontent.com/92626813/192832134-cd04207e-b376-4a94-bcf1-890491bb4841.png">

## Pub/Sub Messaging system

<img width="842" alt="Ảnh chụp Màn hình 2022-09-29 lúc 20 30 36" src="https://user-images.githubusercontent.com/92626813/193051295-a8426bb2-3765-4eca-a55d-460f2e798f18.png">
<img width="864" alt="Ảnh chụp Màn hình 2022-09-29 lúc 20 30 47" src="https://user-images.githubusercontent.com/92626813/193051311-43bdf54f-d546-4f72-b901-2a1eb5be5a31.png">
<img width="842" alt="Ảnh chụp Màn hình 2022-09-29 lúc 20 30 56" src="https://user-images.githubusercontent.com/92626813/193051317-a61ffac1-6b10-4597-98e2-1b7dbc24bd09.png">

[typescriptlang.org]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[graphql-yoga.com]: https://img.shields.io/badge/Graphql-Yoga-%23E0234E.svg?style=for-the-badge&logo=Graphql-Yoga&logoColor=white
[graphql-yoga-url]: https://www.the-guild.dev/graphql/yoga-server
[apollo.com]: https://img.shields.io/badge/Apollo-Graphql-%23E0234E.svg?style=for-the-badge&logo=ApolloGraphql&logoColor=white
[apollo-url]: https://www.apollographql.com/
[react.com]: https://img.shields.io/badge/React-%23E0234E.svg?style=for-the-badge&logo=React&logoColor=white&color=blue
[react-url]: https://reactjs.org/
[websocket.com]: https://img.shields.io/badge/Websocket-%23E0234E.svg?style=for-the-badge&logo=Websocket&logoColor=white&color=blueviolet
[websocket-url]: https://websocket.com
[graphql.com]: https://img.shields.io/badge/GraphQL-%23E0234E.svg?style=for-the-badge&logo=GraphQL&logoColor=white&color=ff69b4
[graphql-url]: https://graphql.org/
[mysql.com]: https://img.shields.io/badge/MySQL-%234ea94b.svg?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://www.mysql.com/
[prisma.io]: https://img.shields.io/badge/Prisma.io-black?style=for-the-badge&logo=prisma&badgeColor=010101
[prisma-url]: https://www.prisma.io/
[eslint.org]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[eslint-url]: https://eslint.org/
[gitscm.com]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-url]: https://git-scm.com/
[github.com]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/
