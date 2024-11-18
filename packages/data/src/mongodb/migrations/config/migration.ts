const dbConnectionUri = process.env.DBUSER
  ? `mongodb${process.env.MONGOB_SRV ? '+srv' : ''}://${process.env.DBUSER}:${
      process.env.DBPASS
    }@${process.env.DBHOST}/${process.env.DBNAME}`
  : `mongodb${process.env.MONGOB_SRV ? '+srv' : ''}://${process.env.DBHOST}/${
      process.env.DBNAME
    }`;

export = {
  dbConnectionUri,
  migrationsDir: 'dist/mongodb/migrations',
  es6: true,
};
const mongoose = require('mongoose');
mongoose.connect(dbConnectionUri, { useNewUrlParser: true });
