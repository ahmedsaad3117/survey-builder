"use client";

import { JsonBuilder } from "@/helper/json-builder";
import React, { useRef, useState } from "react";

// should be store for this componnet and a globel store for the whole page
// My next step will be create the store to save object that contain all question or not nesseray? becouse we already have each quesant the survay that 
// and with each quesion we should send request to save this qeustin of save it in the goble store and then saave at the end once 

const Builder = () => {
  const [inputMetaData, setInputMetaData] = useState<any>({}); // should be type of the input props
  const questionRef = useRef(null);

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
      <div ref={questionRef}>
          do you like it ?
      </div>
      <div >
        <input  
          type="text"
          placeholder={inputMetaData.placeHolder}
          style={{backgroundColor: inputMetaData.backgroundColor} }
          alt={inputMetaData.alt}
        />

        {/* @ts-ignore */}
        <button onClick={buildJson}>Generate JSON</button>
      </div>
    </section>
  );
};

export default Builder;
