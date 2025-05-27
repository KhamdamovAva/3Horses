import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import regImg from '../assets/images/regImg.png';
import axios from 'axios';

const API_URL = 'http://threehorses.pythonanywhere.com/api/signin/';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, {
        email: email.trim(),
        password: password.trim(),
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Ответ сервера при логине:', response.data);

      const token = response.data.access || response.data.token;
      if (!token) throw new Error('Токен не получен');

      localStorage.setItem('access_token', token);
      alert('Успешный вход!');
      navigate('/');
    } catch (err) {
      console.error('Ошибка входа:', err.response?.data || err.message);
      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.message ||
        'Ошибка входа';
      alert(`Ошибка входа: ${message}`);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto pt-[160px] pb-[100px]">
        <form
          onSubmit={handleSubmit}
          className="max-w-[428px] rounded-[10px] py-[60px] px-[20px] sm:p-[60px] text-center min-h-[474px] m-auto"
          style={{
            backgroundImage: `url(${regImg})`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <div className="w-full p-[10px] bg-black rounded-[10px] text-white mb-[30px] text-lg font-semibold">
              Вход
            </div>

            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[30px]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[40px]"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-between gap-[10px]">
              <button
                type="submit"
                className="cursor-pointer bg-white w-[130px] p-[10px] rounded-[10px] hover:bg-black hover:text-white transition ease-in-out duration-600"
              >
                Войти
              </button>

              <button
                type="button"
                onClick={() => navigate('/registration')}
                className="cursor-pointer bg-transparent text-white p-[10px] border-[2px] border-white w-[130px] rounded-[10px] hover:bg-white hover:text-black transition ease-in-out duration-600"
              >
                Отменить
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
