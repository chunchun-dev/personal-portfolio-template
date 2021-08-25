// Customise this file to change data on the page

import { createContext } from "react"

type Link = string

interface Project {
    name: string,
    desc: string,
    sourceCode: Link
}

export interface UserDataShape {
    name: string,
    about: string,
    projects: Project[]
}

// Fill out your information here
export const UserConfig:UserDataShape = {
    name: 'Default',
    about: '',
    projects: [
        {
            name: 'project',
            desc: 'lorem',
            sourceCode: ''
        }
    ]
}

const UserContext:any = createContext(undefined)

export default UserContext