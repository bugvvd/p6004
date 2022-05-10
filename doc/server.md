# dev doc

## dev env


## git

`.gitignore`
```shell
# ignore mongodb files
/server/data
/server/log
```

Package permissions

## IOS Config

## Pending



(deprecated)
# Project 6004 Back End (P6004BE)

## MongoDB
[Linux平台安装MongoDB](https://www.runoob.com/mongodb/mongodb-linux-install.html)
`mongod --dbpath [[dpath]] --logpath [[logFilePath]]  --bind_ip=0.0.0.0 --fork`(重要)
local
`mongod --dbpath ./data --logpath ./log/mongo.log  --bind_ip=0.0.0.0 --fork`(重要)

[MongoDB - 连接](https://www.runoob.com/mongodb/mongodb-connections.html)
`mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]`
通过 MongoDB Compass 查看

## APIs

response format:

```json
{
    "code": 0,
    "message": "success or failure message",
    "description": "more detailed description for a response, an extentsion for message",
    "detail" : {
        "fieldName": "value for requested resources"
    },
    "token": "request token renewed"
}
```

