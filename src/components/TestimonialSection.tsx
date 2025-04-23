import React from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Очень быстро приехал и решил проблему с проводкой. Рекомендую!",
      author: "Анна, Колпино"
    },
    {
      text: "Установил умные выключатели, теперь управляю светом со смартфона. Супер!",
      author: "Михаил, Колпино"
    }
  ];

  return (
    <div className="bg-white p-6 shadow-sm border border-gray-200">
      <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-black pb-2">
        Отзывы клиентов
      </h2>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border-l-4 border-gray-300 pl-4 py-2">
            <Quote className="h-5 w-5 text-gray-500 mb-2" />
            <p className="font-serif italic mb-2">{testimonial.text}</p>
            <p className="text-right text-sm font-semibold">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
