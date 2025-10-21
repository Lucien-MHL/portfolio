import { cn } from '@/utils/cn'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function Content() {
  const sections = [
    { id: 'about', title: '關於我', children: <About /> },
    { id: 'skills', title: '技能', children: <Skills /> },
    { id: 'projects', title: '作品集', children: <Projects /> },
    {
      id: 'contact',
      title: '聯絡我',
      children: <Contact />,
      titleConfig: { center: true }
    }
  ]

  return (
    <>
      <Hero />
      {sections.map(({ id, title, children, titleConfig }, index) => {
        const order = index + 1
        return (
          <section
            id={id}
            className={cn('px-6 py-24', order % 2 === 1 && 'bg-light-navy/30')}
          >
            <div className="mx-auto max-w-4xl">
              <h2
                className={cn(
                  'text-lightest-slate mb-8 space-x-4 text-3xl font-bold',
                  titleConfig?.center && 'text-center'
                )}
              >
                <span className="text-green font-mono">
                  {order.toString().padStart(2, '0')}.
                </span>
                <span>{title}</span>
              </h2>
              {children}
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Content
