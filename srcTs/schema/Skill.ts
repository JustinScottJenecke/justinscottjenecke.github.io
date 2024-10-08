import Tool from "./Tool.ts";

type Skill = {
    id : number
    name : string
    bgImgTag : string // could be BLOB
    tools : Tool
};

export default Skill