import { useMutation } from '@tanstack/vue-query';
import { DB } from '~/lib/appwrite';
import { DB_ID, COLLECTION_MAN } from '~/app.constants';

export const useSetIsAddedToFalse = () => {
	// Mutation function to update all documents in the collection
	const updateIsAddedToFalse = async () => {
		try {
			// Fetch all documents in the collection
			const response = await DB.listDocuments(DB_ID, COLLECTION_MAN);

			// Update each document's isAdded field to false
			const updatePromises = response.documents.map((doc) =>
				DB.updateDocument(DB_ID, COLLECTION_MAN, doc.$id, { isAdded: false })
			);

			// Wait for all updates to complete
			await Promise.all(updatePromises);

			// Return success message or count of updated documents
			return `Updated ${updatePromises.length} documents`;
		} catch (error) {
			console.error('Error updating documents:', error);
			throw error; // Throw error so Vue Query handles it
		}
	};

	// Vue Query Mutation
	return useMutation(updateIsAddedToFalse);
};
