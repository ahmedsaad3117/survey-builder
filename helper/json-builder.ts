import { Question } from "@/types/question-type";

export class JsonBuilder implements Question {
    id?: string;
    suravey_id?: string;
    page_id: string
    creator_id: string
    tag: string;
    content: string;
    description: string;
    questionType: QuestionEnum
    web_type: WebEnum
    answer_type: AnswerEnum
    answers: Answer[]

    constructor(element: HTMLElement) {
        this.id = Math.floor(Math.random() * 10).toString()
        this.suravey_id = Math.floor(Math.random() * 10).toString()
        this.page_id = Math.floor(Math.random() * 10).toString()
        this.page_id = Math.floor(Math.random() * 10).toString()
        // this.type = element.tagName
        // this.meta_key_attr = element.getAttributeNames()
        // this.meta_value_attr = element.getAttributeNames().map((attrKey) => element.getAttribute(attrKey)) as string[]
    }
}

// page ---> 
// 