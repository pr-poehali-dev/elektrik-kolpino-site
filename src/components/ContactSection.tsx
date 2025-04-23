import React from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="bg-white p-6 shadow-sm border border-gray-200 mb-6">
      <h2 className="font-headline text-2xl font-bold mb-4 border-b-2 border-black pb-2">
        Вызвать электрика
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <div>
            <p className="font-semibold">Телефон:</p>
            <a 
              href="tel:89500308830" 
              className="text-blue-700 hover:underline font-bold"
            >
              8-950-030-88-30
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5 text-primary" />
          <div>
            <p className="font-semibold">WhatsApp:</p>
            <a 
              href="https://wa.me/79500308830" 
              className="text-blue-700 hover:underline"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Send className="h-5 w-5 text-primary" />
          <div>
            <p className="font-semibold">Telegram:</p>
            <a 
              href="https://t.me/elektrikkolpino" 
              className="text-blue-700 hover:underline"
            >
              @elektrikkolpino
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3">
          Позвонить сейчас
        </Button>
        <p className="text-sm text-center mt-2">
          Быстрый выезд в течение часа
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
