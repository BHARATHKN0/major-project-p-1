
// import { request, response } from 'express';
import Comment from '../model/comment.js'

export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json({ msg: 'Comment saved successfully' })
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });

        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}


export const deleteComment = async (request, response) => {
    try {
        // const { id } = request.params;
        const comment = await Comment.findByIdAndDelete(request.params.id);
        if (!comment) {
            return response.status(404).json({ error: 'Comment not found' });
        }
        // await comment.deleteOne();

        response.status(200).json({ msg: 'comment deleted successfully', comment });
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}