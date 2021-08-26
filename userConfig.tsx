// Customise this file to change data on the page

import { createContext } from "react"
import userConfig from './CONFIGURATION'

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

const UserContext:any = createContext(undefined)

export default UserContext