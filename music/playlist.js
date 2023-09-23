const fs = require("fs");
const path = require("path");

const musicDirectory = ".\\musics";

fs.readdir(musicDirectory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const supportedFileTypes = [".mp3", ".wav", ".ogg"];
  const musicFiles = files.filter((file) =>
    supportedFileTypes.includes(path.extname(file).toLowerCase())


  );

  const musicData = {
    musicFiles: musicFiles,
  };

  const jsonString = JSON.stringify(musicData, null, 2);

  fs.writeFile("musicData.json", jsonString, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
      return;
    }
    console.log("JSON file created successfully.");
  });
});
