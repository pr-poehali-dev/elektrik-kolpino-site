import React from "react";
import NewspaperHeader from "@/components/NewspaperHeader";
import ServicesList from "@/components/ServicesList";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-newsprint">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <NewspaperHeader 
          title="ЭЛЕКТРИК КОЛПИНО" 
          date={new Date().toLocaleDateString('ru-RU')}
          phone="8-950-030-88-30" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Главная статья - на 8 колонок */}
          <div className="md:col-span-8 bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="font-headline text-3xl font-bold mb-4 border-b-2 border-black pb-2">
              Электромонтажные работы в Колпино
            </h2>
            
            <div className="prose max-w-none font-serif">
              <p className="text-xl font-semibold mb-4">
                Электромонтажные работы и услуги частного электрика в городе Колпино Колпинского района Санкт-Петербурга.
              </p>
              
              <div className="columns-1 md:columns-2 gap-8">
                <p className="mb-4">
                  Вызов электрика в городе Колпино нет ничего проще - позвоните по телефону 
                  <span className="font-bold"> 8-950-030-88-30 </span> 
                  и озвучьте вашу проблему связанную с электричеством у вас дома.
                </p>
                
                <p className="mb-4">
                  Очень круто вызвать электрика на дом в Колпино и забыть о проблемах с электричеством. 
                  Заменить розетку дома вообще не вопрос!
                </p>
                
                <p className="mb-4">
                  Прикольно что есть такой электрик, которому можно позвонить и в течение часа исправить любую неурядицу, 
                  связанную с неисправностями электропроводки, отказами розеток, выключателей, или источников света у вас в квартире.
                </p>
                
                <p className="mb-4">
                  Круто, что есть возможность вызвать электрика на дом и забыть о своих проблемах.
                </p>
              </div>
            </div>
            
            <ServicesList />
          </div>
          
          {/* Боковая панель - на 4 колонки */}
          <div className="md:col-span-4">
            <ContactSection />
            <TestimonialSection />
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 shadow-sm border border-gray-200">
          <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-black pb-2">
            Современные решения для вашего дома
          </h2>
          
          <div className="prose max-w-none font-serif">
            <p className="mb-4">
              В настоящее время, в 2025 году, есть все возможности установить дистанционные умные выключатели и розетки и подключить их к функции умный дом.
            </p>
            
            <p className="mb-4">
              Если вы вызовете электрика в Колпино по телефону <span className="font-bold">8-950-030-88-30</span>, вы можете установить:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Сенсорные выключатели</li>
              <li>Умные розетки</li>
              <li>Wi-Fi розетки и выключатели</li>
              <li>Умные светильники с дистанционным управлением</li>
            </ul>
            
            <p>
              Наши дополнительные сайты: <a href="http://www.elektrikkolpino.bos.ru" className="text-blue-700 hover:underline">www.elektrikkolpino.bos.ru</a> и <a href="http://www.elektrik-kolpino.narod.ru" className="text-blue-700 hover:underline">www.elektrik-kolpino.narod.ru</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
