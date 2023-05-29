const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    BriefDescription: {
      type: String,
      required: true,
    },
    Commitment: {
      type: String,
      required: true,
    },
    Duration: {
      type: String,
      required: true,
    },
    Motivation: {
      type: String,
      required: true,
    },
    ProblemStatement: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Vision: {
      type: String,
      required: true,
    },
  },
  {
    collection: "posts",
  }
);

mongoose.model("posts", postSchema);
