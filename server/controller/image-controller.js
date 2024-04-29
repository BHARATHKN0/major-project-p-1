
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';


let gfs_fs, gfs_photos, gridfsBucket_fs, gridfsBucket_photos;
const conn = mongoose.connection;

conn.once('open', () => {
    gridfsBucket_fs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs_fs = grid(conn.db, mongoose.mongo);
    gfs_fs.collection('fs');

    gridfsBucket_photos = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'photos'
    });
    gfs_photos = grid(conn.db, mongoose.mongo);
    gfs_photos.collection('photos');
});


export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        let file_fs = await gfs_fs.files.findOne({ filename: request.params.filename });
        let file_photos = await gfs_photos.files.findOne({ filename: request.params.filename });

        if (!file_fs && !file_photos) {
            return response.status(404).json({ msg: "File not found" });
        }

        let readStream;

        if (file_fs) {
            readStream = gridfsBucket_fs.openDownloadStream(file_fs._id);
        } else {
            // If not found in fs, fetch from photos collection
            readStream = gridfsBucket_photos.openDownloadStream(file_photos._id);
        }

        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}