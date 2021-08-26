import { useContext } from "react";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import UserContext from "../userConfig";

export default function Home() {

  const {projects, about} = useContext(UserContext)

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
      <About desc={about}/>
    </div>
  )
}
