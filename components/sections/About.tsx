export default function About() {
  const Important = ({ children }: { children: React.ReactNode }) => (
    <span className="text-green font-bold">{children}</span>
  )

  return (
    <div className="text-slate text-lg leading-relaxed">
      <p className="mb-4">
        大家好！我是
        <Important>林明輝（Lucien）</Important>， 一位擁有
        <Important>約 3 年</Important>
        開發經驗的前端工程師。
      </p>

      <p className="mb-4">
        我曾
        <Important>從零建置監控系統專案</Important>，
        負責技術選型與架構規劃（Webpack、Babel、Redux Toolkit、Redux Saga）。
        當時團隊資源有限，因此主動使用 Mirage.js 建立{' '}
        <Important>Mock API</Important>， 以此為基準撰寫 RESTful API
        docs，確保前端開發不受後端進度影響。
      </p>

      <p className="mb-4">
        在電商平台的工作經歷中，我<Important>在高標準環境下快速適應</Important>
        React Native、TypeScript、Jest + React Testing
        Library，並在嚴謹的開發流程中協作（Jira、PR、Code Review、CI/CD、Feature
        Flag、A/B Test）。 解決過數個跨平台技術難題，如 iOS/Android
        滾動事件行為差異、ScrollView 事件穿透問題等。
      </p>

      <p className="mb-4">
        在近期的工作經歷中，我
        <Important>主動提出多項技術與流程改善方案</Important>
        ，並在主管的支持下推動落地： 導入 TypeScript、建立 PR 制度與 Git
        Flow、將 MobX 遷移至 Redux Toolkit + Thunk、 導入 Monorepo
        專案管理、設定 GitLab + Telegram webhook
        整合讓團隊即時掌握程式碼推送與合併狀況等。
        也負責開發正式上線專案的關鍵功能，包括出入金系統（多渠道支付）與遊戲
        iframe 整合等。
      </p>
    </div>
  )
}
