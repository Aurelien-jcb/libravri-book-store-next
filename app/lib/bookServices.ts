// bookServices.ts

import { Book } from "./definitions";

// Fonction fictive pour récupérer la liste des livres depuis la base de données
export const getBooks = async () => {
  try {
    const response = await fetch('/api/books'); // Remplacez par votre URL API
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des livres :', error);
    throw error;
  }
};

// Fonction fictive pour ajouter un livre à la base de données
export const addBook = async (newBook: Book) => {
  try {
    const response = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du livre :', error);
    throw error;
  }
};

// Fonction fictive pour mettre à jour un livre dans la base de données
export const updateBook = async (bookId: string, updatedBook: Book) => {
  try {
    const response = await fetch(`/api/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du livre :', error);
    throw error;
  }
};

// Fonction fictive pour supprimer un livre de la base de données
export const deleteBook = async (bookId: string) => {
  try {
    const response = await fetch(`/api/books/${bookId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la suppression du livre :', error);
    throw error;
  }
};
