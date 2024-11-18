const dbConnectionUri = process.env.DBUSER
  ? `mongodb${process.env.MONGOB_SRV ? '+srv' : ''}://${process.env.DBUSER}:${
      process.env.DBPASS
    }@${process.env.DBHOST}/${process.env.DBNAME}`
  : `mongodb${process.env.MONGOB_SRV ? '+srv' : ''}://${process.env.DBHOST}/${
      process.env.DBNAME
    }`;

module.exports = {
  dbConnectionUri,
  migrationsDir: './src/mongodb/migrations',
  es6: true,
  'template-file': './src/mongodb/migrations/config/template.ts',
};
