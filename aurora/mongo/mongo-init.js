db = db.getSiblingDB('aurora');
db.createCollection('aurora_collection');
db.createUser(
  {
      user: "nextjs",
      pwd: "aurora",
      roles: [
          {
              role: "readWrite",
              db: "aurora"
          }
      ]
  }
);

// Does not work properly yet
rs.initiate();
