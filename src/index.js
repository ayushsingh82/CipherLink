const secretKey = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NjBmZmNmNmE1MGVlN2Q0MzJlZDk2ZSIsImF1dGhUeXBlIjoiZGFzaGJvYXJkIiwiaWF0IjoxNzM0NDEwMjEzLCJleHAiOjE3NjU5Njc4MTN9.cUPUdRA4hKA8XTQM8hHulJm7lwCC6yaYb3JE9pSQVpU";

const RivalzClient = require('rivalz-client');

const fs = require('node:fs');

const rivalzClient = new RivalzClient(secretKey);

async function uploadFile() {
    const filePath = 'file_path';
    const buffer = fs.readFileSync(filePath)
    const fileName = filePath.split('/').pop();
    try {
        const filelog = await rivalzClient.uploadFile(buffer,fileName);
        console.log(filelog);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}
