import Joi from "joi";

const candidateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^(\+92|0)?(3\d{2}|\d{3})(?:-?\d{3}-?\d{4})?$/)
    .min(11)
    .required(),
  city: Joi.string().required(),
  institute: Joi.string().required(),
  educationLevel: Joi.string().required(),
  graduationYear: Joi.string().required(),
  currentPosition: Joi.string().required(),
  currentCompany: Joi.string().required(),
  experienceYears: Joi.string().required(),
  noticePeriod: Joi.string().required(),
  reasonToSwitch: Joi.string().allow(""),
  currentSalary: Joi.string().required(),
  expectedSalary: Joi.string().required(),
  appliedPosition: Joi.string().required(),
  loomLink: Joi.string().allow(""),
});

const updateCandidateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string()
    .regex(/^(\+92|0)?(3\d{2}|\d{3})(?:-?\d{3}-?\d{4})?$/)
    .min(11)
    .optional(),
  city: Joi.string().optional(),
  institute: Joi.string().optional(),
  educationLevel: Joi.string().optional(),
  graduationYear: Joi.string().optional(),
  currentPosition: Joi.string().optional(),
  currentCompany: Joi.string().optional(),
  experienceYears: Joi.string().optional(),
  noticePeriod: Joi.string().optional(),
  reasonToSwitch: Joi.string().allow("").optional(),
  currentSalary: Joi.string().optional(),
  expectedSalary: Joi.string().optional(),
  appliedPosition: Joi.string().optional(),
  loomLink: Joi.string().allow("").optional(),
});

const validateCandidate = (candidate) => candidateSchema.validate(candidate);

const validateUpdateCandidate = (candidate) =>
  updateCandidateSchema.validate(candidate);

export { validateCandidate, validateUpdateCandidate };
