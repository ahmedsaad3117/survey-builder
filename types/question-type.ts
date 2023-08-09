export interface Question {
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
    // meta_key_attr: string[]; //xxxx
    // meta_value_attr: string[]; //xxxx
}

interface Answer {
    id: string
    type: string
    next_survay_point_id: string
}

enum QuestionEnum {
    CSAT,
    NPS,
    TEXT
}

enum WebEnum {

}

enum AnswerEnum {

}