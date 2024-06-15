import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
        ConfirmPassword: '',
        FullName: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Limpa a mensagem anterior
        if (formData.Password !== formData.ConfirmPassword) {
            setMessage('As senhas não correspondem.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3333/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    FullName: formData.FullName,
                    Email: formData.Email,
                    Password: formData.Password,
                    Role: 'client' // Supondo que 'client' seja o valor padrão para o role
                })
            });

            if (response.status === 201) {
                setMessage('Cadastro realizado com sucesso!');
                // Limpa o formulário
                setFormData({
                    Email: '',
                    Password: '',
                    ConfirmPassword: '',
                    FullName: ''
                });
                // Aqui você pode redirecionar o usuário para outra página se desejar
            } else {
                setMessage(`Falha no cadastro: ${response.status}`);
            }
        } catch (error) {
            setMessage(`Erro ao realizar o cadastro: ${error}`);
        }
    };


    return (
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="w-auto h-12 mx-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                    Cadastre-se
                </h2>
                {message && <p>{message}</p>}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Nome Completo
                        </label>
                        <div className="mt-1">
                            <input
                                id="FullName"
                                name="FullName"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.FullName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Endereço de Email
                        </label>
                        <div className="mt-1">
                            <input
                                id="Email"
                                name="Email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.Email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <div className="mt-1">
                            <input
                                id="Password"
                                name="Password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.Password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirme a Senha
                        </label>
                        <div className="mt-1">
                            <input
                                id="ConfirmPassword"
                                name="ConfirmPassword"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.ConfirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cadastrar
                        </button>

                        <Link to={`/login`}>
                            <button
                                type="button"
                                className="flex justify-center w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-gray-700 rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >

                                Fazer login
                            </button>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    );
}
