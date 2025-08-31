import React,{useState} from "react";
import {ru,en} from "../data/labels"

const useLabel = () => {
    const [language,setLanguage] = useState(ru)

    return language
}

export {useLabel}