import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import regImg from '../assets/images/regImg.png';
import axios from 'axios';

const API_URL = 'http://threehorses.pythonanywhere.com/api/signup/';

function RegForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
    faculty: '',
    graduation_year: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'graduation_year' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Простая валидация
    if (!form.full_name.trim()) {
      alert('Введите Ф.И.О');
      return;
    }
    if (!form.email.trim()) {
      alert('Введите почту');
      return;
    }
    if (form.password.length < 6) {
      alert('Пароль должен быть не менее 6 символов');
      return;
    }
    if (
      form.graduation_year &&
      (form.graduation_year < 1900 || form.graduation_year > new Date().getFullYear())
    ) {
      alert('Введите корректный год выпуска');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(API_URL, form);

      // Сохраняем токены (если есть)
      if (res.data.access) localStorage.setItem('access_token', res.data.access);
      if (res.data.refresh) localStorage.setItem('refresh_token', res.data.refresh);

      alert(res.data.message || 'Регистрация успешна!');
      navigate('/regComplete'); // Перенаправляем после успешной регистрации
    } catch (err) {
      if (err.response && err.response.data) {
        console.error('Ошибка:', err.response.data);
        const errorData = err.response.data;
        const messages = Object.entries(errorData)
          .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`)
          .join('\n');
        alert(`Ошибка при регистрации:\n${messages}`);
      } else {
        alert('Произошла неизвестная ошибка.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-[160px] pb-[100px]">
        <form
          onSubmit={handleSubmit}
          className="max-w-[428px] rounded-[10px] p-[20px] sm:p-[40px] text-center min-h-[474px] m-auto"
          style={{
            backgroundImage: `url(${regImg})`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <div className="w-full p-[10px] bg-black rounded-[10px] text-white mb-[30px] text-center text-lg font-semibold">
              Регистрация
            </div>

            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center"
              type="text"
              name="full_name"
              placeholder="Ф.И.О"
              value={form.full_name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center"
              type="email"
              name="email"
              placeholder="Почта"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center"
              type="password"
              name="password"
              placeholder="Пароль"
              value={form.password}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[20px] placeholder:text-center"
              type="text"
              name="faculty"
              placeholder="Факультет"
              value={form.faculty}
              onChange={handleChange}
            />
            <input
              className="w-full bg-white p-[10px] rounded-[10px] mb-[30px] placeholder:text-center"
              type="number"
              name="graduation_year"
              placeholder="Год выпуска"
              value={form.graduation_year || ''}
              onChange={handleChange}
              min="1900"
              max={new Date().getFullYear()}
            />

            <div className="flex justify-between gap-[10px]">
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer bg-white w-[130px] p-[10px] rounded-[10px] hover:bg-black hover:text-white transition ease-in-out duration-600 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Отправка...' : 'Дальше'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
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

export default RegForm;
