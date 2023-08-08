"use client";

import { jsonBuilder } from "@/helper/json-builder";
import React, { useRef, useState } from "react";

// should be store for this componnet and a globel store for the whole page

const Builder = () => {
  const [inputMetaData, setInputMetaData] = useState<any>({}); // should be type of the input props
  const questionRef = useRef(null);

  const buildJson = () => {
    // @ts-ignore
    const json = jsonBuilder(questionRef?.current);
    // @ts-ignore
    console.log(json);
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
        <input
          ref={questionRef}
          type="text"
          placeholder={inputMetaData.placeHolder}
          style={{backgroundColor: inputMetaData.backgroundColor} }
          alt={inputMetaData.alt}
        />
        {/* 
            question: {
                id: 79,
                suravey_id: 32,
                type: "INPUT"
                meta_key: ["type"],
                meta_value: ["text"]
            } 
        
        */}
        {/* @ts-ignore */}
        <button onClick={buildJson}>Generate JSON</button>
      </div>
    </section>
  );
};

export default Builder;
