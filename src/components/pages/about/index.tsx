/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContactCard from "./contactCard";

const AboutUs = () => {
  return (
    <section className="w-[80%] max-w-[1440px] mx-center justify-center text-center mt-16 flex flex-wrap items-center gap-10">
      <ImageSection />
      <ContentSection />
    </section>
  );
};

const ImageSection = () => {
  return (
    <div className="flex justify-center mt-4">
      <img className="w-full" src="./assets/about_us.png" alt="Ícone" />
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="text-start">
      <Description />
      <QuoteBox />
    </div>
  );
};

const Description = () => {
  return (
    <p className="mt-8 text-lg text-gray-800 max-w-2xl mx-auto">
      Os criadores deste sistema de adoção são jovens apaixonados por tecnologia e, principalmente, por animais. Eles enxergaram na tecnologia uma maneira de contribuir para um mundo mais acolhedor para aqueles que precisam de um lar.
    </p>
  );
};

const QuoteBox = () => {
  return (
    <div className="bg-red-100 p-6 rounded-lg mt-8 max-w-2xl mx-auto relative">
      <span className="text-primary100 text-5xl font-bold absolute top-[10]">
        “
      </span>
      <p className="text-xl font-semibold text-gray-800 inline px-3">
        <span className="px-4">
          Mais do que uma plataforma, este sistema é um elo de amor e esperança,
          construído por quem acredita que todo animal merece uma chance de ser
          amado.
        </span>
      </p>
      <span className="text-primary100 text-5xl font-bold absolute bottom-[30%] left-[42%]">
        ”
      </span>
      <h3 className="text-xl font-bold mt-4 text-gray-900">Fundadores</h3>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="w-[80%] max-w-[1440px] mt-32 text-center">
      <div className="flex items-center flex-wrap py-10">
        <ContactCard />
        <div className="h-10"></div>
        <div>
          <h2 className="text-5xl font-bold text-red-600">
            Estamos aqui para ajudar você
          </h2>
          <p className="mt-8 text-lg text-gray-800 max-w-2xl mx-auto">
            Envie-nos uma mensagem se tiver alguma dúvida, estamos aqui para
            ajudar!
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <form className="mt-8 max-w-lg mx-auto space-y-4">
      <input type="text" placeholder="Digite seu nome" className="w-full h-12 px-4 border border-red-600 rounded-full" />
      <input type="email" placeholder="Digite seu e-mail" className="w-full h-12 px-4 border border-red-600 rounded-full" />
      <textarea placeholder="Digite sua mensagem" className="w-full h-32 px-4 py-2 border border-red-600 rounded-lg"></textarea>
      <button className="w-full bg-red-600 text-white py-3 rounded-full font-bold">Enviar Mensagem</button>
    </form>
  );
};

export const About = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <AboutUs />
      <ContactSection />
    </div>
  );
};

export default About;
