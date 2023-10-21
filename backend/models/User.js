const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  mobileNumber:{
    type:Number,
    required:true
  },
  password: {
    type: String,
    required: true,
  },
}
);

// const UserSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   { timestamps: true } //Mongoose also supports setting timestamps on subdocuments. Keep in mind that createdAt and updatedAt for subdocuments represent when the subdocument was created or updated, not the top level document. Overwriting a subdocument will also overwrite createdAt.// timeStamp:true will keep the recordp
// );

const User = mongoose.model("user", UserSchema);
// User.createIndexes();
module.exports = mongoose.model("user", UserSchema);