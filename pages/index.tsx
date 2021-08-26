import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Hero
        subtitle='Subtitle'
        title='Building great digital products'
        desc='
          Tempor pariatur elit cupidatat duis minim exercitation culpa ea. Anim ea Lorem enim sint fugiat nulla labore consectetur aliquip anim. Anim aliquip deserunt sit id nostrud sunt cillum officia. Nulla adipisicing anim labore in sit labore.
        '
        cta={{ title: 'CTA', link: '' }}
      />
      <Projects projects={[
        { title: 'Project 1', desc: 'a great project', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
      ]}/>
    </div>
  )
}
