import { useState } from "react";
import { Film } from "lucide-react";
import { Send } from "lucide-react";
import { RotateCcw } from "lucide-react";
import movies from "../data/MoviesList.jsx";

export function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favoriteMovie: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    favoriteMovie: "",
  });

  const validateEmail = (email) => {
    if (!email) {
      return "โปรดใส่อีเมลของคุณ";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "รูปแบบอีเมลไม่ถูกต้อง";
    }
    return "";
  };

  const handleChange = (e) => {
    //name เป็น HTML standard attribute ที่สำคัญสำหรับ form elements
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: emailError,
      }));
    } else if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      favoriteMovie: "",
    };

    if (!formData.name) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }

    newErrors.email = validateEmail(formData.email);

    if (!formData.favoriteMovie) {
      newErrors.favoriteMovie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.favoriteMovie;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      favoriteMovie: "",
      comments: "",
    });
    setErrors({
      name: "",
      email: "",
      favoriteMovie: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md w-full max-w-[600px] overflow-hidden my-20">
        <div className="bg-linear-to-r from-violet-600 to-purple-500 p-6 flex items-center gap-3">
          <Film className="w-8 h-8 text-white" />
          <h1 className="text-white text-2xl font-bold m-0">Movie Survey</h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8 sm:p-6">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-gray-800 font-medium text-[0.95rem]"
            >
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="กรุณากรอกชื่อของคุณ"
              className={`w-full px-3 py-3 border rounded-lg text-base font-inherit transition-colors focus:outline-none placeholder:text-gray-400 box-border ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-violet-600"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-gray-800 font-medium text-[0.95rem]"
            >
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`w-full px-3 py-3 border rounded-lg text-base font-inherit transition-colors focus:outline-none placeholder:text-gray-400 box-border ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-violet-600"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-gray-800 font-medium text-[0.95rem]">
              เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
            </label>
            <div
              className={`flex flex-col gap-3 ${
                errors.favoriteMovie
                  ? "border-2 border-red-500 rounded-lg p-2"
                  : ""
              }`}
            >
              {movies.map((movie, index) => (
                <label
                  key={index}
                  className="flex items-start gap-3 cursor-pointer px-3 py-3 rounded-lg transition-colors hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="favoriteMovie"
                    value={`${movie.title} (${movie.year})`}
                    checked={
                      formData.favoriteMovie ===
                      `${movie.title} (${movie.year})`
                    }
                    onChange={handleChange}
                    className="mt-1 cursor-pointer w-[18px] h-[18px] shrink-0"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 mb-1">
                      {movie.title} ({movie.year})
                    </div>
                    <div className="text-gray-500 text-sm">
                      Director: {movie.director}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.favoriteMovie && (
              <p className="text-red-500 text-sm mt-1">
                {errors.favoriteMovie}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="comments"
              className="block mb-2 text-gray-800 font-medium text-[0.95rem]"
            >
              ความคิดเห็นเกี่ยวกับหนัง
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
              rows="4"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-base font-inherit resize-y min-h-[100px] transition-colors focus:outline-none focus:border-violet-600 placeholder:text-gray-400 box-border"
            />
          </div>

          <div className="flex gap-50 justify-start mt-10 sm:flex-row">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-all border-none font-inherit bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 sm:w-full sm:justify-center"
            >
              <RotateCcw className="w-4 h-4" />
              รีเช็ต
            </button>
            <button
              type="submit"
              className="w-2/3 flex items-center gap-2 py-3 rounded-lg text-base font-medium cursor-pointer transition-all border-none font-inherit bg-linear-to-r from-violet-600 to-purple-500 text-white hover:from-violet-700 hover:to-purple-600 sm:w-full sm:justify-center"
            >
              <Send className="w-4 h-4" />
              ส่งแบบสำรวจ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
