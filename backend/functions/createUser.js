exports = async function createPrivateContent({ user }) {
  const serviceName = 'mongodb-atlas';
  const databaseName = 'LeagueChamp';
  const collectionName = 'User';

  const collection = context.services
    .get(serviceName)
    .db(databaseName)
    .collection(collectionName);

  const newPrivateContentDoc = {
    _id: new BSON.ObjectId(user.id),
    userId: user.id,
    myList: [],
  };

  try {
    return await collection.insertOne(newUser);
  } catch (err) {
    console.error(
      'Error while executing `createPrivateContent()`:',
      err.message
    );
  }
};
