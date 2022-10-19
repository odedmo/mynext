// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb'

// /api/new-meetup
//  POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    const { title, image, address } = data

    const client = await MongoClient.connect('mongodb+srv://oded:Y1lFMZyqdHstQ61s@cluster0.nxzdg.mongodb.net/mytest?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)

    client.close()

    res.status(201).json({
      message: 'Meetup inserted'
    })
  }
}


export default handler
