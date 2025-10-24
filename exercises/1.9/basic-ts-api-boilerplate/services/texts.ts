import { NewText, Text } from "../types";
import path from "node:path";
import {serialize, parse } from "../utils/json";
import { v4 as uuidv4 } from "uuid";


const jsonDbPath  = path.join(__dirname, "/../data/texts.json");
const defaultText : Text[] = [
    {
        id : uuidv4(),
        content : "Harry poter",
        level : "hard"
    }
];

function readOneText(id : string) : Text | undefined {
    const texts = parse(jsonDbPath, defaultText);
    return texts.find((text) => text.id === id)
}
function readAllText(level : string) : Text[]{
    const texts = parse(jsonDbPath, defaultText);
    if (!level)
        return texts;
    const filteredTexts = texts.filter((text) => text.level === level);
    return filteredTexts;
}
function deleteText(id : string) : Text | undefined {
    const texts = parse(jsonDbPath, defaultText);
    const index = texts.findIndex((text) => text.id === id);
    if (index === -1)
        return undefined;
    const deletedText = texts.splice(index, 1);
    serialize(jsonDbPath, texts);
    return deletedText[0];
}
function createText(newText : NewText) : Text {
    const texts = parse(jsonDbPath, defaultText);
    const tmp: Text = {
        id : uuidv4(),
        content : newText.content,
        level : newText.level
    };
    texts.push(tmp);
    serialize(jsonDbPath, texts);
    return tmp;
}
function updateText(id : String, newText : Partial<NewText>) : Text | undefined {
    const texts = parse(jsonDbPath, defaultText);
    const text = texts.find((text) => text.id === id);
    if (!text)
        return undefined;
    if (newText.content){
        text.content = newText.content;
    }
    if (newText.level){
        text.level = newText.level;
    }
    serialize(jsonDbPath, texts);
    return text;

}
export {updateText, readAllText, readOneText, deleteText, createText};