export interface Question {
    id?: string;
    suravey_id?: string;
    page_id: string 
    tag: string;
    // questionType:String | Enum |
    // webType:String | Enum |
    meta_key_attr: string[];
    meta_value_attr: string[];
}