import { useEffect, useState } from "react";
import CardBook from "../CardBook"
import api from "../../api/api";



export default function ListBooks() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('books')
            .then(response => {
                setBooks(response.data.books);
            })
            .catch(error => {
                console.error('Houve um erro ao buscar os livros:', error);
            });
    }, []);
    console.log(books);

    return (
        <div className="bg-white">
            <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Livros</h2>

                <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {books.map((book) => (
                          <CardBook 
                          key={book.ID} 
                          description={book.Description} 
                          imageSrc={book.ImageUrl} 
                          name={book.Name} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
