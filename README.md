## To Run This project

run npm install

install a ipfs client on your machine 

If you get a cors error in your browser, add the following in your ipfs config file:

"API": {
    "HTTPHeaders": {
      "Access-Control-Allow-Credentials": [
        "true"
      ],
      "Access-Control-Allow-Origin": [
        "*"
      ]
    }
  },