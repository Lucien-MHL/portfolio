const skills = [
  {
    title: '前端框架與語言',
    list: [
      'React / Next.js',
      'React Native',
      'TypeScript',
      'TailwindCSS',
      'Styled-components'
    ]
  },
  {
    title: '狀態管理與測試',
    list: [
      'Redux Toolkit + Thunk',
      'Redux Saga',
      'MobX',
      'Zustand',
      'Jest + React Testing Library'
    ]
  },
  {
    title: '資料視覺化與開發工具',
    list: [
      'D3.js',
      'React-Leaflet',
      'shadcn/ui',
      'Git',
      'Webpack / Vite',
      'Monorepo (Nx)'
    ]
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
