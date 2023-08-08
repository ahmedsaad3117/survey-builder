import { Question } from "@/types/question-type";

export class JsonBuilder implements Question {
    id?: string;
    suravey_id?: string;
    type: string;
    meta_key_attr: string[];
    meta_value_attr: string[];

    constructor(element: HTMLElement) {
        this.id = Math.floor(Math.random() * 10).toString()
        this.suravey_id = Math.floor(Math.random() * 10).toString()
        this.type = element.tagName
        this.meta_key_attr = element.getAttributeNames()
        this.meta_value_attr = element.getAttributeNames().map((attrKey) => element.getAttribute(attrKey)) as string[]
    }
}

// page ---> 
// 