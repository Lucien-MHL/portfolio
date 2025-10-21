export default function About() {
  return (
    <div className="text-slate text-lg leading-relaxed">
      <p className="mb-4">
        大家好！我是
        <span className="text-green font-semibold">林明輝（Lucien）</span>，
        一位來自台灣的前端工程師，擁有
        <span className="text-green font-semibold">約 3 年</span>
        的前端開發經驗。
      </p>

      <p className="mb-4">
        我曾
        <span className="text-green font-semibold">從零建置監控系統專案</span>，
        負責技術選型與架構規劃（Webpack、Babel、Redux Toolkit、Redux Saga）。
        當時團隊資源有限，我主動使用{' '}
        <span className="text-green font-semibold">
          Mirage.js 建立 Mock API
        </span>
        ， 並撰寫 RESTful API 文件，確保前端開發不受後端進度影響。
        這段經歷讓我培養出獨立解決問題與技術決策的能力。
      </p>

      <p className="mb-4">
        在電商平台的工作經歷中，我快速掌握{' '}
        <span className="text-green font-semibold">
          React Native、TypeScript、Jest + React Testing Library
        </span>
        ， 並在完整的開發流程中協作（Jira、PR、Code Review、CI/CD、Feature
        Flag、A/B Test）。 我解決過多個跨平台技術難題，例如 iOS/Android
        滾動事件行為差異、ScrollView 事件穿透問題等。
        這段經歷讓我體驗到規範化團隊協作的價值。
      </p>

      <p className="mb-4">
        在博弈產業的經歷中，我主動
        <span className="text-green font-semibold">
          提出並推動多項技術與流程改善
        </span>
        ： 導入 TypeScript、建立 PR 制度與 Git Flow、將 MobX 遷移至 Redux
        Toolkit + Thunk、 導入 Monorepo 專案管理、設定 GitLab + Telegram webhook
        整合等。
        我也負責開發正式上線專案的關鍵功能，包括出入金系統（多渠道支付）、遊戲
        iframe 整合等。
      </p>

      <p className="mb-4">
        除了工作專案，我也持續透過個人專案精進技術能力，包括：
        <span className="text-green font-semibold">
          台北機車定檢站查詢系統（Next.js + React-Leaflet）、
          台灣互動式地圖（D3.js + Next.js）、台北市圖書館座位查詢系統（Next.js +
          shadcn/ui）
        </span>
        等。 這些專案展現了我在地圖視覺化、資料處理與使用者體驗設計上的能力。
      </p>

      <p className="mb-4">
        我擅長的技術包括{' '}
        <span className="text-green font-semibold">
          React、Next.js、TypeScript、Redux Toolkit、TailwindCSS
        </span>
        ， 也有 React Native、D3.js、Leaflet 等資料視覺化應用開發經驗。
        我不只是執行者，更重視主動發現問題、提出改善方案並實際推動落地。
      </p>

      <p>
        目前我正在尋找
        <span className="text-green font-semibold">
          有技術背景主管帶領、重視技術品質、 擁有完善開發流程
        </span>
        的團隊，希望能在有學習機會的環境中持續成長，
        同時貢獻我的問題解決能力與架構優化經驗。
      </p>
    </div>
  )
}
