import { IQuestion, ISurvey } from "@/types/question-type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ISurvey = {
    survey_id: 1,
    name: "Survey",
    owner: "ahmed saad",
    questions: []
}

export const survey = createSlice({
    name: "survey",
    initialState: initialState,
    reducers: {
        addToQuestion(state, action: PayloadAction<IQuestion>) {
            return {
                ...state,
                questions: [...state.questions, action.payload]
            }
        }
        // addQuestion(state,{payload}:PayloadAction<IAddQuestion>):void{
        //     state.questions= [...state.questions,...[payload]]
        //     },
    }
})

export const { addToQuestion } = survey.actions

export default survey.reducer

