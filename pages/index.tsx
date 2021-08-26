import { useContext } from "react";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import UserContext from "../userConfig";

export default function Home() {

  const {projects} = useContext(UserContext)

  return (
    <div>
      <Hero
        subtitle='Subtitle 👋'
        title='Building great digital products'
        desc='
          Tempor pariatur elit cupidatat duis minim exercitation culpa ea. Anim ea Lorem enim sint fugiat nulla labore consectetur aliquip anim. Anim aliquip deserunt sit id nostrud sunt cillum officia. Nulla adipisicing anim labore in sit labore.
        '
        cta={{ title: 'CTA', link: '' }}
      />
      <Projects projects={projects}/>
      <About desc='Occaecat sunt magna ipsum cillum. Id eiusmod minim id dolore. Mollit sint sit amet amet labore do enim velit do minim dolore fugiat. Esse nisi excepteur sit dolore sint qui laborum incididunt est culpa consequat irure tempor dolor. Laborum quis nisi velit amet aute adipisicing commodo dolor elit aliquip. Elit ea labore id reprehenderit qui. Consectetur eu nisi esse labore tempor deserunt esse tempor pariatur proident est. Esse enim magna excepteur esse incididunt commodo deserunt tempor officia ipsum.'/>
    </div>
  )
}
