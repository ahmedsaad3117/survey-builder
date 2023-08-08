export function jsonBuilder(element: HTMLElement) {
    console.log(element, "--------> element")
    if (element) {
        console.log("tag fired")
        return {
            id: Math.floor(Math.random() * 10),
            suravey_id: Math.floor(Math.random() * 10),
            type: element.tagName,
            meta_key_attr: element.getAttributeNames(),
            meta_value_attr: element.getAttributeNames().map((attrKey) => element.getAttribute(attrKey))

        }
    } else { }
}

