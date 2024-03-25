
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