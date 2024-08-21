// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://sanchitgangwar2004:sanchit@11@cluster0.474qe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


// const docSchema = mongoose.Schema({
//   title: String,
//   content: {
//     type: String,
//     default: ""
//   },
//   uploadedBy: String,
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   lastUpdate: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Document', docSchema);
// 
const mongoose = require('mongoose');

// URL-encoded connection string (ensure special characters are encoded)
mongoose.connect("mongodb+srv://sanchitgangwar2004:sanchit@11@cluster0.474qe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Connection error", error);
});

const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update the lastUpdate field before saving
docSchema.pre('save', function(next) {
  this.lastUpdate = Date.now();
  next();
});

module.exports = mongoose.model('Document', docSchema);
