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

const validateCandidate = (candidate) => candidateSchema.validate(candidate);

export { validateCandidate };
