## NestJS JWT Cookie Auth Mock API

## Install NestJS CLI into the local machine

```bash
$ npm i -g @nestjs/cli
```

## In project root folder install all packages

```bash
$ npm install
```

## Run Application
```bash
$ npm run start:dev
```

## To Change Port Number

By default NestJS runs under 3000 port number.
To change it go to 'src/main.ts' <b>await app.listen(4000)<b>

## Register Your Client Application Port Number
Go to 'main.ts'
```
 app.enableCors({
    credentials:true,
    origin:"http://localhost:8080",
  });
```

## Change User Credentials
To change user 'email' and 'password' go to <b>src/users/user.service.ts<b>

## Change JWT Token Expiraion
To change the jwt token expiration go to 'src/auth/auth.module.ts'.
```
#600s --> 600 seconds
signOptions: {
        expiresIn: '600s',
      }
```

## Login Endpoint
```
#POST endpoint
http://localhost:3000/auth/login

#default credentials payload
{
  'email': 'naveen@techseeker.com',
  'password':'12345
}
```

## User Profile API (Secured Endpoint)
```
#GET endpoint
http://localhost:3000/user-profile
```

## Movies Endpoint (A Sample Secure Endpoint)
```
#GET endpoint
http://localhost:3000/liked-movies
```

## Refresh Token Endpoint
```
#GET endpoint
http://localhost:3000/refresh-token
```

## Logout Endpoint
```
#GET endpoint
http://localhost:3000/logout
```
## Stay in touch

- Author - Naveen Bommidi
- Website - [Blog](https://learmoreseekmore.com/)
- Youtube  - [Naveen Bommidi Tech Seeker](https://www.youtube.com/c/NaveenTechSeeker)

