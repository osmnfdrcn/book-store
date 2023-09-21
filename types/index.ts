import { Book, Author, Publisher, Genre, Language } from "@prisma/client";

export type IBook = Omit<Book, "createdAt"> & {
  createdAt: string;
  author: IAuthor;
  language: ILanguage;
  genre: IGenre;
  publisher: IPublisher;
  [key: string]: any;
};

export type IAuthor = Omit<Author, "createdAt"> & {
  createdAt: string;
  books: IBook[];
};

export type ILanguage = Omit<Language, "createdAt"> & {
  createdAt: string;
  books: IBook[];
};

export type IPublisher = Omit<Publisher, "createdAt"> & {
  createdAt: string;
  books: IBook[];
};

export type IGenre = Omit<Genre, "createdAt"> & {
  createdAt: string;
  books: IBook[];
};

export type CommonType = Omit<Author, "slug">;

export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export interface ICart {
  items: CartItem[];
}
