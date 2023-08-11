"use client";

import { JsonBuilder } from "@/helper/json-builder";
import React, { useRef, useState } from "react";

// should be store for this componnet and a globel store for the whole page
// My next step will be create the store to save object that contain all question or not nesseray? becouse we already have each quesant the survay that 
// and with each quesion we should send request to save this qeustin of save it in the goble store and then saave at the end once 

const Builder = () => {
  const [questions, setQuestions] = useState<any[]>([]); // should be type of the question props
  const [answers, setAnswers] = useState<any[]>([]); // should be type of the answer props
  const questionRef = useRef(null);

  useEffect(() => {
    // Fetch the survey data from the JSON file
    fetch('./survey.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
        setAnswers(data.answers);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const buildJson = () => {
    // @ts-ignore
    const json = new JsonBuilder(questionRef?.current);
    // @ts-ignore
    console.log(json)
    return json;
  };

  return (
    <section>
      <div>
        <ul>
          <li onClick={()=>setInputMetaData({...inputMetaData,backgroundColor : "Red"})}>Red</li>
          <li onClick={()=>setInputMetaData({...inputMetaData,backgroundColor : "Green"})}>Green</li>
          <li onClick={()=>setInputMetaData({...inputMetaData,backgroundColor : "Black"})}>Black</li>
        </ul>
      </div>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <input
              ref={questionRef}
              type="text"
              value={question}
              onChange={event => {
                const newQuestions = [...questions];
                newQuestions[index] = event.target.value;
                setQuestions(newQuestions);
              }}
            />
            <button onClick={() => {
              const newQuestions = [...questions];
              newQuestions.splice(index, 1);
              setQuestions(newQuestions);
            }}>Remove Question</button>
          </div>
        ))}
        <button onClick={() => setQuestions([...questions, ''])}>Add Question</button>

        {/* @ts-ignore */}
        <button onClick={buildJson}>Generate JSON</button>
      </div>
    </section>
  );
};

export default Builder;