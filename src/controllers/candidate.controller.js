import {
  validateCandidate,
  validateUpdateCandidate,
} from "../schemas/candidate.schema.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError, ApiSuccess } from "../utils/api-response.js";
import {
  removeFileCloudinary,
  uploadFileCloudinary,
} from "../utils/cloudinary.js";

import Candidate from "../models/candidate.model.js";

const addCandidate = asyncHandler(async (req, res, next) => {
  // Validate candidate data
  const { error, value } = validateCandidate(req.body);

  if (error) {
    next(new ApiError(422, error.details[0].message.replaceAll('"', "")));
    return;
  }

  //   Upload resume
  let result;
  const resume = req.file;
  if (resume) {
    result = await uploadFileCloudinary(resume, "raw");
  }

  if (result) {
    value.resumeFile = result.secure_url;
    value.resumePublicId = result.public_id;
    value.resumeFileName = resume.filename;
    value.resumeFileType = resume.mimetype.split("/").pop();
  }

  // Create candidate
  const candidate = await Candidate.create(value);

  res
    .status(201)
    .json(new ApiSuccess(201, "Candidate added successfully", candidate));
});

const getCandidates = asyncHandler(async (req, res, next) => {
  const candidates = await Candidate.find().sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiSuccess(200, "Candidates fetched successfully", candidates));
});

const getCandidate = asyncHandler(async (req, res, next) => {
  const candidate = await Candidate.findById(req.params.id);

  if (!candidate) {
    next(new ApiError(404, "Candidate not found"));
    return;
  }

  res
    .status(200)
    .json(new ApiSuccess(200, "Candidate fetched successfully", candidate));
});

const updateCandidate = asyncHandler(async (req, res, next) => {
  // Validate candidate data
  const { error, value } = validateUpdateCandidate(req.body);

  if (error) {
    next(new ApiError(422, error.details[0].message.replaceAll('"', "")));
    return;
  }

  const candidate = await Candidate.findById(req.params.id);

  if (!candidate) {
    next(new ApiError(404, "Candidate not found"));
    return;
  }

  //   Upload resume
  let result;
  const resume = req.file;
  if (resume) {
    result = await uploadFileCloudinary(resume, "raw");
  }

  if (result) {
    value.resumeFile = result.secure_url;
    value.resumePublicId = result.public_id;
    value.resumeFileName = resume.filename;
    value.resumeFileType = resume.mimetype.split("/").pop();

    // Remove old resume
    if (candidate.resumePublicId) {
      await removeFileCloudinary(candidate.resumePublicId);
    }
  }

  // Update candidate
  const updatedCandidate = await Candidate.findByIdAndUpdate(
    req.params.id,
    value,
    { new: true }
  );

  res
    .status(200)
    .json(
      new ApiSuccess(200, "Candidate updated successfully", updatedCandidate)
    );
});

const deleteCandidate = asyncHandler(async (req, res, next) => {
  const candidate = await Candidate.findByIdAndDelete(req.params.id);

  if (!candidate) {
    next(new ApiError(404, "Candidate not found"));
    return;
  }

  if (candidate.resumePublicId) {
    await removeFileCloudinary(candidate.resumePublicId);
  }

  res
    .status(200)
    .json(new ApiSuccess(200, "Candidate deleted successfully", null));
});

export {
  addCandidate,
  getCandidates,
  getCandidate,
  deleteCandidate,
  updateCandidate,
};
