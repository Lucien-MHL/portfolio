const skills = [
  {
    title: '前端技術',
    list: [
      'React',
      'NextJs',
      'TypeScript',
      'JavaScript',
      'HTML & CSS',
      'TailwindCSS',
      'Styled-components'
    ]
  },
  {
    title: '狀態管理',
    list: ['Redux-toolkit', 'Redux-saga', 'Redux-thunk', 'Zustand', 'MobX']
  },
  {
    title: '工具與其他',
    list: ['Git', 'Vite', 'Axios', 'NodeJs', 'React Router', 'Webpack']
  }
]

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      {skills.map(({ title, list }) => (
        <div key={title} className="bg-light-navy/30 rounded p-6">
          <h3 className="mb-4 font-mono text-white">{title}</h3>
          <ul className="text-slate space-y-2">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
