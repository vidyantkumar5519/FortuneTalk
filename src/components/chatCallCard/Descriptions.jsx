import React from 'react';

const Descriptions = () => {
  const faqs = [
    {
      question: "How can I connect with an astrologer on chat?",
      answer: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience."
    },
    {
      question: "Why do all the astrologers have such good ratings?",
      answer: "All the astrologers who make it to the Astrotalk platform are categorised across 3 stages. Stage 1 includes astrologers that are highly rated by our customers because of their excellent work. The Stage 2 astrologers are the ones whose ratings fall below fixed criteria. And when that happens, we intentionally remove their profile from the platform so that our customers only get to consult from the top-rated astrologers (Stage 1 astrologers). These Stage 2 astrologers are then trained by our expert astrologers, and if they do well during the training, they are brought back on the platform, and if not, they are moved to Stage 3 i.e. they are unrecruited."
    },
    {
      question: "Can I chat with the same astrologers I had connected with earlier?",
      answer: "Yes, you can chat with the same astrologers multiple times on our platform. If you wish to chat to the same astrologer, simply find the 'Order History' section on the app or the website. Here you will find the list of all the purchases you have made on AstroTalk including your previous chats."
    },
    {
      question: "Will my phone number be kept confidential?",
      answer: "You really don't need to use your phone number to chat with astrologer. Also, Astrotalk respects your privacy and as a firm is obliged to keep your information well guarded so no one could ever misuse it whatsoever. You can count on us."
    },
    {
      question: "How can I choose the best astrologer to get astrology consultation?",
      answer: "To get astrology consultation through the best astrologer, simply watch out for the rating the other customers may have given to the astrologers. Though we scrutinize all the astrologers ourself and bring onboard only the best ones for you, but as they say, the customer is always right."
    },
    {
      question: "Why some astrologers on the app are so expensive?",
      answer: "Astrotalk promises the best services to its customers and thus recruits well-experienced astrologers after thorough scrutiny. Most of the astrologers we have onboard entertain an experience of over 10+ years. This is to ensure the predictions or any other information they share with you is based on their broad knowledge, so you always receive accurate information. Also, AstroTalk saves your precious time by helping you consult expert astrologers from the comfort of your home, thus saving your time and money. We maintain strict standards and offer optimum quality. So in a nutshell, our service is qualitative and not expensive."
    },
    {
      question: "Why should I choose Astrotalk for astrology consultation?",
      answer: "Astrotalk has always worked to offer the best service to its customers, and the result of the same is exceptional ratings and reviews that Astrotalk has garnered on Google, PlayStore, Facebook and other such platforms. It is the successful predictions that have inspired people to leave a good word for us and we continue to live upon that thrust of them."
    },
    {
      question: "Does chatting with an astrologer cost more than talking to an astrologer?",
      answer: "It simply depends on your and the astrologer's typing speed. However, if you are not a great talker over a call, then chatting with an astrologer is the best option for you."
    },
    {
      question: "How genuine is Astrotalk?",
      answer: "Genuity can be ensured in two ways. Firstly, from the Astrotalk side, and secondly, from the astrologers' side. And we have got both the areas covered. Astrotalk's prime motive is to give the user the most genuine astrology experience. And to do the same, Astrotalk ensures only the best astrologers make it to the platform. How do we do so? Firstly, before recruiting any new astrologer on Astrotalk, s/he has to go through an interview round conducted by the most experienced astrologers on Astrotalk. This way, we test his/her knowledge of astrology before they are able to interact with the users. Secondly, a team of astrologers is always present to train the astrologers from time to time and help them in learning new skills. And thirdly, users are motivated to rate the astrologers after every session, so that they can be judged accordingly. If the astrologer's rating falls below 4-star, he or she is taken down. This is one of the ways we adopt to ensure Astrotalk is the most genuine platform for you to talk to astrologers. It is these steps due to which we are able to secure a good rating across all major rating platforms such as Google, Play Store, etc."
    }
  ];

  return (
    <div className="w-full px-2 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Chat With Astrologer - FAQs</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-base font-medium mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
