import mongoose from "mongoose";

// Define the schema for medical records
const medicalRecordsSchema = new mongoose.Schema({}, { timestamps: true });

// Create and export the MedicalRecord model
export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordsSchema);
