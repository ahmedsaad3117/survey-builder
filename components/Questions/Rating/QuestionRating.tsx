"use client";

import React, { useState } from 'react'
import "./QuestionRating.css"
import { addToQuestion } from '@/redux/features/survey-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/redux/store';

const QuestionRating = () => {
  const [title, setTitile] = useState("this a title")
  const [description, setdescription] = useState("this a description")
  const [range, setrRange] = useState(5)
  const [rateing_type, setRateing_type] = useState("rateing_type")

  const dispatch = useDispatch()
  const allSuervey = useAppSelector((state) => state.surveyReducer)



  function generateCountArray(count: number) {
    return Array.from({ length: count }, (_, index) => index);
  }

  const addToSuervey = () => {
    console.log(buildJson(), "ssss")
    dispatch(addToQuestion(buildJson()))
    console.log(allSuervey, "allSuervey")
  }


  function buildJson() {
    return {
      id: "3",
      suravey_id: "4",
      type: "QuestionRating",
      title: title,
      description: description,
      range: range,
      rateing_type: rateing_type,
    }
  }

  // const objDom  = {
  //   div: 'div'   as keyof JSX.IntrinsicElements | undefined, // default is "div".
  //   button: 'button'  as keyof JSX.IntrinsicElements | undefined, // default is "div".
  // } 
  // -- now create json from this question
  // -- create readx to store all questin in the points 
  // -- create json for all

  // on any changes in this component props fire buildJson function

  return (
    <section className='rateing-bar'>
      {/* TODO */}
      {/* Create a component that get input as: title , description, min Rate, max Rate */}
      <h1 >{title}</h1>
      <h5>{description}</h5>


      {/* TODO */}
      {/* Should be other component and with custom shape and suctom range */}

      <div className="rating_bar">
        {generateCountArray(range).map((num, inedx) => {
          return <div className={`rate-type-${rateing_type}`} key={inedx}>{num}</div>
        })}
      </div>
      <button onClick={() => addToSuervey()}>Genereate</button>
    </section>
  )
}

export default QuestionRating