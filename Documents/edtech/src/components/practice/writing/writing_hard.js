import Head from 'next/head'
import React from "react";
import { useState, useEffect } from 'react';


const WritingHard = () => {

	const questions = [
		{
			questionText: 'Some say that learning about the past has no value for those of us living in the present. Do you agree or disagree? Why? Give specific reasons for your answer.',
			answer: "As the famous old tale saying “Only buy using history as a mirror, can reflect the prosperity and replacement of a country”, this is a very macro perspective in country’s level. As for personal view, learning from history can help summarize the lessons learned, avoid traps and make faster progress. Take mys experience as an example, I was a working rookie one year ago, often making mistakes in my job. But I am good at summarizing experience and forming my own working pattern, so now I am a middle manager in the company and lead a four people team. Why I promote to a higher place in a so short time? It is not only because of I am a good thinker, but also I am very open-minded to learn from my seniors at work which help me stand on the shoulders of the giants. If we want to get a success before we get too old,there is a shortcut:learning from your predecessors,no matter the successful experience and failure lessons, thinking deeply and forming your own particular tackling things methods."
		},
    		{
			questionText: 'Many people feel compelled to check their cellphones very frequently throughout the day. Describe some of the possible consequences of this behavior.',
			answer: "It is common to view the habit of constantly checking one's mobile phone as a negative or even obsessive-compulsive behavior. There are several reasons for this. One reason is the proliferation of short video apps, such as TikTok and Instagram, which are designed to be highly engaging and addictive. Many people become dependent on these apps and spend a significant amount of time scrolling through them. Another reason is the reliance on social media for communication and connection. People may spend hours chatting on WhatsApp or other platforms, even when in the presence of friends, in an effort to stay connected and informed. However, this constant need for information and connection can be detrimental, as it can interfere with work and study, leading to a decline in productivity and focus. In the long term, mobile phone obsessive-compulsive disorder can have serious consequences, such as destroying healthy study habits and leading to a sense of aimlessness."
		},
		{
			questionText: 'Discuss the impact of social media on political discourse. How has social media changed political discourse? What are some positive and negative effects of social media on political discourse?',
			answer: "Social media has had a significant impact on political discourse, changing the way we receive and engage with political information. It has made political information more accessible and has provided new platforms for political expression and engagement. However, social media has also led to concerns around misinformation, polarization, and echo chambers. It is important to promote responsible use of social media in political discourse and to ensure that individuals have access to accurate and diverse sources of political information."
		},
		{
			questionText: '',
			answer: ""
		},
    		{
			questionText: '',
			answer: ""
		},
		{
			questionText: '',
			answer: ""
		},
		{
			questionText: '',
			answer: ""
		},
    		{
			questionText: '',
			answer: ""
		},
	];

  const [inputValue, setInputValue] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
    setText(e.target.value);
  };

	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    const nextAnswer = currentAnswer + 1;
    setCurrentAnswer(nextAnswer);
    setButtonText(current => !current);
	};

  const changeIt = () => {
    setShowMessage(false);
    setInputValue("");
    setWordCount(0);
    setButtonText("Submit");
  }

  useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

  const [buttonText, setButtonText] = useState("Submit");

  const handleClick = () => {
    setButtonText("Retry");
  }

  function submit(){
    setShowMessage(!showMessage);
  }

  return(
    <div>
    <Head>
        <title>Detly</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main>
      <div className=''>
      <div className='flex items-end pt-10 pb-10'>
      <div className='w-1/2 sm:w-3/4'>
      </div>
      <div className='flex'>
      </div>
      </div>
      <div className="flex justify-center">
      <div className='pb-2 flex justify-center w-3/4 sm:w-3/5'>
        <p className='text-2xl font-bold text-center'>Write about the topic below for five minutes</p>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className="pt-10 pb-10 flex w-3/4 sm:w-2/5">
        <p className="text-lg text-left">{questions[currentQuestion].questionText}</p>
        </div>
        </div>
        <div className='flex justify-center'>
      <div className='pb-2 flex justify-center w-3/4 sm:w-2/5'>
      <textarea value={inputValue} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-4 border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
      id="texta"
      onChange={handleUserInput}
      rows="6"
      placeholder="Type your answer here"
    ></textarea>
     </div>
     </div>
      <div className='flex justify-center w-2/5 sm:w-2/3'>
      <div className='pt-3'>
      <p className='text-lg font-bold'>Word count: {wordCount}</p>
      </div>
      </div>
      <div className='flex justify-center pt-10'>
        <hr className='w-4/5 sm:w-1/2 border-2'></hr>
        </div> 
        <div className='flex justify-center'>
        {showMessage && <div className='w-3/4 sm:w-3/5 pt-5 pb-5'>
          <p className='text-xl font-bold'>Sample answer</p>
          <p className='text-lg text-left'>{questions[currentQuestion].answer}</p>
        </div>}
      </div>
      <div className='flex pt-10 pb-20'>
      <div className='flex w-1/2 justify-center'>      
        <button onClick={()=>{ submit(); handleClick() }}  className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">{buttonText}</button>
      </div>
      <div className='flex w-1/2 content-center justify-center'>
      <button onClick={()=>{ handleAnswerOptionClick(); changeIt() }} className="button bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Next</button>
      </div>
      </div>
      </div>
      </main>
    </div>
  );
}

export default WritingHard;
