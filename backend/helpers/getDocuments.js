import { Note } from "../models/note.model.js";

export async function getDocuments(ids) {
    try {
        const documents = await Note.find({ _id: { $in: ids } });
        return documents;
    } catch (error) {
        console.error(error);
    }
}
