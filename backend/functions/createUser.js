exports = async function createUser({ user }) {
  const serviceName = 'mongodb-atlas';
  const databaseName = 'LeagueChamp';
  const collectionName = 'User';

  const collection = context.services
    .get(serviceName)
    .db(databaseName)
    .collection(collectionName);

  const newUser = {
    _id: new BSON.ObjectId(user.id),
    userId: user.id,
    myList: [],
  };

  try {
    return await collection.insertOne(newUser);
  } catch (err) {
    console.error('Error while executing `createUser()`:', err.message);
  }
};
