const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://thakurrisu:1234@cluster0.zbdra.mongodb.net/employees_db?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Db connection successful');
  })
  .catch((err) => {
    console.log(err);
  });
