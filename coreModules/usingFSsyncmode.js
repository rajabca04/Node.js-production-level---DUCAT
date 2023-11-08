const fs =  require("fs");

// fs.mkdirSync --> creates a new synchronous directory

// try {
//     fs.mkdirSync("test")
//     console.log("Folder created")
// } catch (error) {
//     console.log("folder is alrady exists")
// }


// try {
//     fs.rmdirSync("test")
//     console.log("Folder removed/deleted")
// } catch (error) {
//     console.log("folder is not exists")
// }


// try {
//     fs.writeFileSync("test/sample.txt", "this is sample file")
//     fs.writeFileSync("test/sample.txt", "this is sample file")
//     fs.writeFileSync("test/sample.txt", "this is sample file 1")
//     fs.writeFileSync("test/sample.txt", "this is sample file")
//     fs.writeFileSync("test/sample.txt", "this is sample file")
//     fs.writeFileSync("test/sample.txt", "this is sample\n file")
//     fs.writeFileSync("test/sample.txt", "this is sample file")
//     console.log("Folder create aand file write")
// } catch (error) {
//     console.log("folder is not exists")
// }



// try {
//     fs.appendFileSync("test/sample.txt", "this is sample file")
//     fs.appendFileSync("test/sample.txt", "this is sample file")
//     fs.appendFileSync("test/sample.txt", "this is sample file 1")
//     fs.appendFileSync("test/sample.txt", "this is sample file")
//     fs.appendFileSync("test/sample.txt", "this is sample file")
//     fs.appendFileSync("test/sample.txt", "this is sample\n file")
//     fs.appendFileSync("test/sample.txt", "this is sample file")
//     console.log("Folder create aand file write")
// } catch (error) {
//     console.log("folder is not exists")
// }

// try {
//     let data = fs.readFileSync("test/sample.txt","utf-8")
//     console.log(data)
//     console.log("Folder create aand file write")
// } catch (error) {
//     console.log("folder is not exists")
// }


// try {
//     fs.renameSync("test/sample.txt","test/sample1.txt")
//     console.log("file name is changed...")
// } catch (error) {
//     console.log("folder is not exists")
// }


// try {
//     fs.unlinkSync("test/sample1.txt")
//     console.log("file is unlinked...|| Deleted.")
// } catch (error) {
//     console.log("folder is not exists")
// }