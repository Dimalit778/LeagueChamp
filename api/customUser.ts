import { BSON } from 'realm';

const writeCustomUserData = async (user: any, name: string) => {
  const customUserDataCollection = user
    .mongoClient('mongodb-atlas')
    .db('LeagueChamp')
    .collection('User');

  const filter = {
    userId: user.id,
  };
  const updateDoc = {
    $set: {
      userId: user.id,
      name: name,
      image: '',
      leagues: [],
    },
  };
  const options = { upsert: true };
  await customUserDataCollection.updateOne(filter, updateDoc, options);
  // Refresh custom user data once it's been updated on the server
  await user.refreshCustomData();
};
const addLeagueCustomUser = async (user: any, newLeague: any) => {
  const userCollection = user
    .mongoClient('mongodb-atlas')
    .db('LeagueChamp')
    .collection('User');
  const res = await userCollection.findOne({
    userId: user._id,
  });

  const filter = {
    userId: user._id,
  };
  const updateDoc = {
    $set: {
      leagues: [
        ...res.leagues,
        {
          _id: newLeague._id,
          name: newLeague.leagueName,
          code: newLeague.code,
        },
      ],
    },
  };
  const options = { upsert: false };
  await userCollection.updateOne(filter, updateDoc, options);
  await user.refreshCustomData();
};
// ...
export { writeCustomUserData, addLeagueCustomUser };
