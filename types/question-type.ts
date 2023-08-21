export interface IQuestion {
    id?: string;
    suravey_id?: string;
    // page_id: string
    // creator_id: string
    title: string;
    description?: string;
    question_type?: QuestionEnum
    web_type?: WebEnum
    answer_type?: AnswerEnum
    answers?: IAnswer[]
    // meta_key_attr: string[]; //xxxx
    // meta_value_attr: string[]; //xxxx
}

export interface ISurvey {
    survey_id: number,
    name: string,
    owner?: string,
    questions: IQuestion[]
}

export interface IAnswer {
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