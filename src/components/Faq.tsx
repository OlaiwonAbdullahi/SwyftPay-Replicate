import { useState } from "react";

// FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item border-b">
      <div
        className="faq-question cursor-pointer py-4 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="faq-answer py-2">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Accordion component
const FAQAccordion = () => {
  const faqData = [
    {
      question: "What is Swyft?",
      answer:
        "Swyft is a fintech company that offers fast and secure currency exchange services, enabling users to easily convert foreign currencies to their local currency. The platform also allows users to generate virtual USD cards and offers global payment solutions. Swyftpay's goal is to make financial transactions more accessible and efficient, particularly for individuals and businesses that engage in cross-border transactions.",
    },
    {
      question: "How do I get a Swyft account?",
      answer:
        "To get a Swyft account, you can visit the Swyftpay website and click on the Sign Up or Get Started button. You will be asked to provide your personal information, such as your name, email address, and phone number. You will also need to create a password for your account. Once you have provided all the necessary information, you can submit your registration and your Swyft account will be created. After that, you can log in to your account, complete the KYC process and start using the platform to convert currencies, make payments, and perform other financial transactions.",
    },
    {
      question: "How do I receive & send money on the Swyft app?",
      answer:
        "You will gain access to wallets that will enable you to easily transact in local Nigerian Naira and receive money in USD, GBP, EUR, and digital currencies.",
    },

    {
      question: "Is Swyft Secure?",
      answer:
        "Swyft has undergone various security tests and we've implemented the industry's best techniques to make sure your account and money are safe and secure.",
    },
  ];

  return (
    <div className="faq-accordion w-2/3 max-w-lg mx-auto p-4">
      <div className="">
        <h2 className="text-center text-gray-900 font-jost text-3xl md:text-5xl font-semibold leading-normal mb-5">
          Questions we get the most
        </h2>
      </div>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
