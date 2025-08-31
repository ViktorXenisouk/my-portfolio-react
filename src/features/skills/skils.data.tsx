import { ISkill } from "./types"
import { ReactComponent as ReactIcon } from "../../assets/icons/react-icon.svg"
import { ReactComponent as NodeIcon } from "../../assets/icons/node-js-icon.svg"
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/java-script-icon.svg"
import { ReactComponent as TypeScriptIcon } from "../../assets/icons/type-script-icon.svg"
import { ReactComponent as MongoIcon } from "../../assets/icons/mongo-db-icon.svg"
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram-icon.svg"

import {TAGS} from "./tags.data"

import {} from "@mui/icons-material"


const skill: ISkill = {
        title: 'React',
        shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
        experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
        image: <ReactIcon />,
        tags: ['react', 'front-end'],
        knowledgeTitle: 'Exelent',
        knowledge: 10
}

const SKILLS: ISkill[] = [
        {
                title: 'React',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <ReactIcon />,
                tags: ['react', 'front-end','web','java-script','type-script'],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
            {
                title: 'MUI',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <ReactIcon />,
                tags: ['react', 'front-end','web','java-script','type-script'],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
        {
                title: 'Node',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <NodeIcon />,
                tags: ['back-end', 'java-script','type-script'],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
        {
                 title: 'Express',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <NodeIcon />,
                tags: ['back-end', 'java-script','type-script'],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
          {
                 title: 'Telegram Bot Api',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <TelegramIcon />,
                tags: ['back-end','node', 'java-script','type-script'],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
              {
                 title: 'Mongo DB',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <MongoIcon />,
                tags: ['back-end','node', 'java-script','type-script'],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
             {
                 title: 'Java Script',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <JavaScriptIcon />,
                tags: [...TAGS],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },
               {
                 title: 'Type Script',
                shortDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                experienceDescription: 'crepoceprmoi reciojjiweoqc ercijo cijeo cec. ecve . efrvwrv . rewvrewvf wer.vre vervewerv .erwv. wr',
                image: <TypeScriptIcon />,
                tags: [...TAGS],
                knowledgeTitle: 'Exelent',
                knowledge: 10
        },

] //Array.from({length:10},()=>skill)

export { SKILLS }