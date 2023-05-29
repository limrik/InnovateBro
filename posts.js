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
    Role_accountant: {
      type: Boolean,
      required: false,
    },
    Role_analyst: {
      type: Boolean,
      required: false,
    },
    Role_designer: {
      type: Boolean,
      required: false,
    },
    Role_finance: {
      type: Boolean,
      required: false,
    },
    Role_marketing: {
      type: Boolean,
      required: false,
    },
    Role_product: {
      type: Boolean,
      required: false,
    },
    Role_research: {
      type: Boolean,
      required: false,
    },
    Role_sales: {
      type: Boolean,
      required: false,
    },
    Role_software: {
      type: Boolean,
      required: false,
    },
  },
  {
    collection: "posts",
  }
);

mongoose.model("posts", postSchema);
