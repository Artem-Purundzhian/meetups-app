import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_LINK);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne({data});
    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'});

  }
}

export async function loadMeetups() {
  const client = await MongoClient.connect(process.env.MONGODB_LINK);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  return meetups;
}


export async function getPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_LINK);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return meetups;
}

export async function getMeetup(meetupId){
  const client = await MongoClient.connect(process.env.MONGODB_LINK);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  return selectedMeetup;
}

export default handler;
