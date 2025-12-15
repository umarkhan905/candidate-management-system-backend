import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    // Basic Info
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    // Education
    institute: {
      type: String,
      required: true,
    },
    educationLevel: {
      type: String,
      enum: ["Bachelor", "Master", "PhD", "Other"],
      default: "Bachelor",
    },
    graduationYear: {
      type: Number,
      required: true,
    },

    // Professional
    currentPosition: {
      type: String,
      required: true,
    },
    currentCompany: {
      type: String,
      required: true,
    },
    experienceYears: {
      type: Number,
      required: true,
    },
    noticePeriod: {
      type: String,
      required: true,
    },
    reasonToSwitch: {
      type: String,
    },

    // Compensation
    currentSalary: {
      type: Number,
      required: true,
    },
    expectedSalary: {
      type: Number,
      required: true,
    },
    expectedSalaryPartTime: {
      type: Number,
    },

    // Job Application
    appliedPosition: {
      type: String,
      required: true,
    },

    // Files
    resumeFile: {
      type: String,
    },
    resumeFileName: {
      type: String,
    },
    resumeFileType: {
      type: String,
      enum: ["pdf", "docx"],
    },
    resumePublicId: {
      type: String,
    },
    loomLink: {
      type: String,
    },

    // Evaluation
    hrRemarks: {
      type: String,
    },
    interviewerRemarks: {
      type: String,
    },
    status: {
      type: String,
      enum: ["New", "Screening", "Interviewed", "Pass", "Fail", "On Hold"],
      default: "New",
    },
  },
  { timestamps: true }
);

const Candidate = mongoose.model("Candidate", candidateSchema);
export default Candidate;
