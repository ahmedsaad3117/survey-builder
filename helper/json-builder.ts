import { Answer, AnswerEnum, Question, QuestionEnum, WebEnum } from "@/types/question-type";

export class JsonBuilder implements Question {
    id?: string;
    suravey_id?: string;
    page_id: string
    creator_id: string
    content: string;
    description?: string;
    question_type!: QuestionEnum
    web_type: WebEnum
    answer_type: AnswerEnum
    answers: Answer[]

    constructor(question: string, answers: string[], question_type: QuestionEnum, web_type: WebEnum, answer_type: AnswerEnum) {
        this.id = Math.floor(Math.random() * 10).toString()
        this.suravey_id = Math.floor(Math.random() * 10).toString()
        this.page_id = Math.floor(Math.random() * 10).toString()
        this.creator_id = Math.floor(Math.random() * 10).toString()
        this.content = question
        this.description = question
        this.question_type = question_type
        this.web_type = web_type
        this.answer_type = answer_type
        this.answers = answers.map(answer => ({ content: answer, id: Math.floor(Math.random() * 10).toString() }))
    }
        // this.meta_key_attr = element.getAttributeNames()
        // this.meta_value_attr = element.getAttributeNames().map((attrKey) => element.getAttribute(attrKey)) as string[]
    }
}

// page --->
// 