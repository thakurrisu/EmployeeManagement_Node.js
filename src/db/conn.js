const mongoose = require('mongoose');
const Db =
  'mongodb+srv://rishu:O0txGgBjpL5wvPEa@cluster0.whohj.mongodb.net/mern?retryWrites=true&w=majority';
mongoose
  .connect(
    Db,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'employees_db',
    }
  )
  .then(() => {
    console.log('Db connection successful');
  })
  .catch((err) => {
    console.log(err);
  });
