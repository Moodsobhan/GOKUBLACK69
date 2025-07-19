const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "hmemev",
    aliases: ["18meme"],
    version: "1.0",
    author: "BADHON",
    countDown: 10, // 10 second cooldown
    role: 0,
    shortDescription: {
      en: "entertaining 18+ and funny names for boys and girls"
    },
    longDescription: {
      en: "entertaining 18+ and funny names for boys and girls just for entertainment nothing else"
    },
    category: "18+ meme",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event, message }) {
    try {
      // Video URL
      const videoUrl = "https://files.catbox.moe/12n9w3.mp4";
      
      // Send the video with message and reaction
      const msg = await message.reply({
        body: "here is ur 18+ meme🥵🐣",
        attachment: await global.utils.getStreamFromURL(videoUrl)
      });
      
      // Add reaction when successfully sent
      api.setMessageReaction("🐥", event.messageID, (err) => {
        if (err) console.error("Failed to set reaction:", err);
      }, true);
      
    } catch (error) {
      console.error("Error in hmemev command:", error);
      message.reply("An error occurred while processing your request.");
    }
  }
};
