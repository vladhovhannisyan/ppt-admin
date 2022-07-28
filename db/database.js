const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://root2:12345@devcluster.ebkvs.mongodb.net/ppt_admin?retryWrites=true&w=majority");
}


// Schema
const imageSchema = new mongoose.Schema({
  name: String,
});



// Model
const Image = mongoose.model('Image', imageSchema);

// const group = new ChannelGroup({
//   name: "asd",
//   channels: [{'name': "asdasd", "id": "asdasd"}],
// });

// group.save();



exports.Image = Image;