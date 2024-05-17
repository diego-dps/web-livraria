import React, { useEffect, useState } from 'react';
import api from '../../api/api';

// import { Container } from './styles';

const RegisterBooks: React.FC = () => {
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    api.get('publishers')
      .then(response => {
        setPublishers(response.data.publishers);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar as Editoras', error);
      });
  }, []);
  console.log(publishers);

  useEffect(() => {
    api.get('authors')
      .then(response => {
        setAuthors(response.data.authors);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os autores:', error);
      });
  }, []);
  console.log(authors);

 

  const [name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [NumberOfPages, setNumberOfPages] = useState(10);
  const [PublisherID, setPublisherID] = useState('4f3238c3-181a-42c0-829d-68a3c287a1af');
  const [ImageUrl, setImageUrl] = useState('');
  const [Category, setCategory] = useState('Ficçao');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    const book = {
      name,
      Description,
      NumberOfPages,
      PublisherID,
      ImageUrl,
      Category,
    };

    try {
      await api.post('books', book);
      alert('Livro cadastrado com sucesso!');
    } catch (error) {
      console.error('Houve um erro ao cadastrar o livro:', error);
    }
  };


  return (
    <div className="grid grid-cols-1 pt-10 gap-x-8 gap-y-8 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Informações do livro</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Cadastre as informaçòes do livro desejado</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="book-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nome do Livro
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="book-name"
                  id="book-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>

           

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-black">
                Descrição
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={Description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">Descreva a sinopse do livro</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="Autores" className="block w-full text-sm font-medium leading-6 text-gray-900">
                Autores
              </label>
              <select
                id="Autores"
                name="Autores"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
              >
                {authors.map((author) =>(
                  <option >
                    {author.Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-full">
              <label htmlFor="Editoras" className="block w-full text-sm font-medium leading-6 text-gray-900">
                Editoras
              </label>
              <select
                id="Editoras"
                name="Editoras"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
              >
                {publishers.map((publisher) =>(
                  <option >
                    {publisher.Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-full">
              <label htmlFor="img-url" className="block text-sm font-medium leading-6 text-gray-900">
                Link do Imagem
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="img-url"
                  id="img-url"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={ImageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                />
              </div>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancelar
          </button>
          <button
            type="submit"
            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterBooks;
