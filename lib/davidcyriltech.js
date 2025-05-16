const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function uploadToImgur(path) {
    const form = new FormData();
    const fileStream = fs.createReadStream(path);
    form.append("image", fileStream);

    try {
        // Use your Client ID for authorization
        const response = await axios.post("https://api.imgur.com/3/upload", form, {
            headers: {
                ...form.getHeaders(),
                "Authorization": "Client-ID 98d1cd7506d87bf" // Replace with your Client ID
            }
        });

        // Check if the upload was successful
        if (response.data.success) {
            return {
                status: "success",
                fileUrl: response.data.data.link // The URL of the uploaded file
            };
        } else {
            return {
                status: "error",
                message: response.data.data.error // Error message if upload fails
            };
        }
    } catch (error) {
        return {
            status: "error",
            message: error.message // Handle unexpected errors
        };
    }
}

module.exports = { uploadToImgur };