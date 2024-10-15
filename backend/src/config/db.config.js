const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async()=>{
    try {
        await mongoose.connect(PUBLIC_DATA.mongo_uri)
        console.log(`Connected to MongoDB`);
    } catch (error) {
            mongoose.disconnect();
            process.exit(1)
    }
}