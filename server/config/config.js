var env = process.env.NODE_ENV || 'development';


if (env === 'development') {
    process.env.port =3000;
    process.env.PROD_MONGODB = 'mongodb://localhost:27017/Todoapp', {useMongoClient: true}
} else if (env === 'test') {
    process.env.port =3000;
    process.env.PROD_MONGODB ='mongodb://localhost:27017/TodoappTest', {useMongoClient: true}
} 