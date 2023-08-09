export interface Question {
    id?: string;
    suravey_id?: string;
    page_id: string
    creator_id: string
    content: string;
    description?: string;
    question_type: QuestionEnum
    web_type: WebEnum
    answer_type: AnswerEnum
    answers: Answer[]
    // meta_key_attr: string[]; //xxxx
    // meta_value_attr: string[]; //xxxx
}

export interface Answer {
    id: string
    type: string
    next_survay_point_id: string
}

export enum QuestionEnum {
    CSAT,
    NPS,
    TEXT
}

export enum WebEnum {

}

export enum AnswerEnum {

}