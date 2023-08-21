import Builder from "@/components/Builder";
import QuestionRating from "@/components/Questions/Rating/QuestionRating";


export default function builder() {

  return <div>
    {/* <Builder /> */}
    <QuestionRating />
  </div>;
}

// i press the rateing tap then i get this component with inital value for title and desc and range and ratting_type
// then i controll on it as im like
// then generate the json from it based on this props and the component name 


/*
{
  "answer_type":""
  "title": "",
  "description":"",
  "range":"",
  "rateing_type":""
}

*/