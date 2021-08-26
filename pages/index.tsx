import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
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
      <Projects projects={[
        { title: 'Project 1', desc: 'a great project', link: '', img: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', link: '', img: 'https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', link: '', img: 'https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', link: '', img: 'https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', link: '', img: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60' },
        { title: 'Project 1', desc: 'a great project', link: '', img: 'https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60' },
      ]}/>
      <About desc='Occaecat sunt magna ipsum cillum. Id eiusmod minim id dolore. Mollit sint sit amet amet labore do enim velit do minim dolore fugiat. Esse nisi excepteur sit dolore sint qui laborum incididunt est culpa consequat irure tempor dolor. Laborum quis nisi velit amet aute adipisicing commodo dolor elit aliquip. Elit ea labore id reprehenderit qui. Consectetur eu nisi esse labore tempor deserunt esse tempor pariatur proident est. Esse enim magna excepteur esse incididunt commodo deserunt tempor officia ipsum.'/>
    </div>
  )
}
