
// 01.  login and take an access token & refresh token.

POST http://localhost:4000/login
Content-Type: application/json

{
  "username": "Jane"
}


========>

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 307
ETag: W/"133-947yqggGKRsMZxTrox4i3Rv+5Qc"
Date: Fri, 17 Jan 2020 10:25:14 GMT
Connection: close

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSIsImlhdCI6MTU3OTI1NjcxNCwiZXhwIjoxNTc5MjU2NzI5fQ.3GwN94ttj_j5uXgkbFKtdehdpdl9m1T0HzXeB35-Zj4",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSIsImlhdCI6MTU3OTI1NjcxNH0.p1Azni5OKASkXODHP6rREgEZYww4Tvhxv7pe2ySs7Js"
}






// 02.  request a new token when the token is expired.


POST http://localhost:4000/token
Content-Type: application/json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSIsImlhdCI6MTU3OTI1NjgwMH0._7EpORgKXdgbamdltAZmsnCJATL3sJ7e_-ULyQQGdhU"
}


=============>

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 165
ETag: W/"a5-IMhbkafTA0oyaw/WJ8kGmdvtLHc"
Date: Fri, 17 Jan 2020 10:26:50 GMT
Connection: close

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSIsImlhdCI6MTU3OTI1NjgxMCwiZXhwIjoxNTc5MjU2ODI1fQ.yk9AM6idU2JSHcgI_nMyOUaAyjqhgoX73ZijVDsW4aQ"
}



// GET method



GET http://localhost:3000/posts
Authorization: Bearer fecb98dd58d8531ba2506da36885d48ef2269d3baf2397742848be2707ab16d36eb5cdd92b0267b0460575e7cd24ec72df860196b0c3420b7974924191726ab3
 
===========>>

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 74
ETag: W/"4a-1R4wY2kF/sIFyvoxeh6FQWeGVfI"
Date: Fri, 17 Jan 2020 07:06:11 GMT
Connection: close

[
  {
    "username": "Kyle",
    "title": "Post 1"
  },
  {
    "username": "Jim",
    "title": "Post 2"
  }
]



// new access token requieed in first senario.

POST http://localhost:4000/token
Content-Type: application/json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltIiwiaWF0IjoxNTY4NzU5OTIyfQ.RT6wszuCeFLwC_6ksmNMIELxiC5s-uRivfRxyZof5ag"
}

===============>

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 304
ETag: W/"130-KULXVB/PL4foHHjWg3MyUspU0qE"
Date: Fri, 17 Jan 2020 09:31:03 GMT
Connection: close

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltIiwiaWF0IjoxNTc5MjUzNDYzLCJleHAiOjE1NzkyNTM0Nzh9.lGaai5esZiZWV262gmo-14YMrEakiHcf2UgjwhgZsBU",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltIiwiaWF0IjoxNTc5MjUzNDYzfQ.bFwsiTnsWDGCAHoCxP8btzVvrUsUN6iPBSifP6_8XB4"
}


//final response

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
Date: Fri, 17 Jan 2020 09:59:59 GMT
Connection: close

{
    "username": "Jim",
    "title": "Post 2"
  }





//when access token expires, 

HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Content-Type: text/plain; charset=utf-8
Content-Length: 12
ETag: W/"c-dAuDFQrdjS3hezqxDTNgW7AOlYk"
Date: Fri, 17 Jan 2020 10:22:59 GMT
Connection: close

Unauthorized


*/

//    STEPS    


// login and take an access token & refresh token.
// request a new token when the token is expired.
// get the request.
// Reauthentication.


//basic