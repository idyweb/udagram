export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME, //"udagramvalourdev",
    "password": process.env.POSTGRES_PASSWORD,//"udagramvalourdev",
    "database": process.env.POSTGRES_DATABASE,//"udagramvalourdev",
    "host": process.env.POSTGRES_HOST,//"udagramvalourdev.cxd1pyibqaxp.us-east-1.rds.amazonaws.com",
    "dialect":  process.env.POSTGRES_DIALECT,
    "port": 5432,
    "aws_region":  process.env.AWS_REGION,
    "aws_profile":  process.env.AWS_PROFILE,
    "aws_media_bucket":  process.env.AWS_MEDIA_BUCKET
  },

  
  "jwt": {
    "secret": " "
  },

  
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
