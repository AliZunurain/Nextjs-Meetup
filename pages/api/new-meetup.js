// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// api /api/new-meetup
// POST /api/new-meetup
// user: ali and pass: karachi123

import { MongoClient } from "mongoDB";

async function handler(req, res) {  
  if (req.method === 'POST') {
    const data = req.body;

    const {title, image, addesss, description} = data;

    const client = await MongoClient.connect('mongodb+srv://ali:karachi123@meetup-cluster.vs7qp.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetupsTable');

    const result = await meetupsCollection.insertOne({data});

    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup Inserted into the Database'});


  }
}


export default handler;
