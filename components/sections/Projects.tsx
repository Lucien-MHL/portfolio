import Image from 'next/image'
import { cn } from '@/utils/cn'
import { GithubIcon, JumpToBlankIcon } from '@/icons'

interface Showcase {
  title: string
  description: string
  skills: string[]
  links: { github: string; demo: string }
  image: {
    src: string
    alt: string
  }
}

const showcase: Showcase[] = [
  {
    title: '出入金系統',
    description:
      '獨立負責出入金系統的提款流程開發，實作訂單狀態機與紅包領取機制。\n\n技術亮點：\n• 訂單狀態管理（審核中 → 出款中 → 完成/失敗）\n• 紅包領取邏輯（倒數計時、Modal 動畫、條件渲染）\n• 支援 5 種支付渠道的錢包管理功能（微信/支付寶/銀行卡/虛擬錢包/數字人民幣）\n• 處理複雜的 API 回傳狀態，動態控制 UI 顯示\n• 參與快捷支付功能的前端開發與優化',
    skills: ['React', 'MobX', 'SCSS', 'State Machine'],
    links: {
      github: '',
      demo: ''
    },
    image: {
      src: '/images/payment-system.webp',
      alt: '出入金系統'
    }
  },
  {
    title: '台北機車定檢站查詢系統',
    description:
      '一個用於定位台北市機車定期檢驗站的綜合性網路應用程式。功能包含互動式地圖、標記群集，以及政府開放資料 API 的自動化資料處理。',
    skills: [
      'Next.js',
      'TypeScript',
      'React-Leaflet',
      'Zustand',
      'TailwindCSS'
    ],
    links: {
      github: 'https://github.com/Lucien-MHL/taipei-scooter-checker',
      demo: 'https://lucien-mhl.github.io/taipei-scooter-checker/'
    },
    image: {
      src: '/images/scooter-checker.webp',
      alt: '台北機車定檢站查詢系統截圖'
    }
  },
  {
    title: '台灣互動式地圖',
    description:
      '使用 D3.js 和 Next.js 建構的台灣互動式地圖。具備縣市縮放功能、詳細資訊顯示，以及流暢的動畫效果。實作了 D3.js 與 React 的整合，解決了 DOM 操作衝突的技術挑戰。',
    skills: ['Next.js', 'TypeScript', 'D3.js', 'Zustand', 'TailwindCSS'],
    links: {
      github: 'https://github.com/Lucien-MHL/taiwan-intro-map',
      demo: 'https://lucien-mhl.github.io/taiwan-intro-map/'
    },
    image: {
      src: '/images/taiwan-map.webp',
      alt: '台灣互動式地圖截圖'
    }
  },
  {
    title: '台北市圖書館座位查詢',
    description:
      '即時追蹤台北市立圖書館可用座位數的應用程式。功能包含 60 秒自動更新、明暗主題切換，以及響應式設計的分館分頁顯示。',
    skills: ['Next.js', 'TypeScript', 'Zustand', 'shadcn/ui', 'TailwindCSS'],
    links: {
      github: 'https://github.com/Lucien-MHL/library-seat-query',
      demo: 'https://taipeilibraryseatquery.zeabur.app/'
    },
    image: {
      src: '/images/library-tracker.webp',
      alt: '台北市圖書館座位查詢截圖'
    }
  },
  {
    title: 'React 相片畫廊',
    description:
      '基於 Pexels API 的相片畫廊應用程式，具備圖片搜尋、無限滾動載入、響應式設計等功能。使用 Bootstrap 進行 UI 設計，並透過 fetch API 處理非同步資料請求。',
    skills: ['React', 'JavaScript', 'Bootstrap', 'SCSS'],
    links: {
      github: 'https://github.com/Lucien-MHL/React-photos-Web',
      demo: 'https://lucien-mhl.github.io/React-photos-Web/'
    },
    image: {
      src: '/images/photos-gallery.webp',
      alt: 'React 相片畫廊截圖'
    }
  }
]

export default function Projects() {
  return (
    <div className="space-y-24">
      {showcase.map((project, index) => {
        const isEven = (index + 1) % 2 === 0
        const { title, description, skills, links, image } = project
        return (
          <div key={title} className="grid items-center gap-8 md:grid-cols-2">
            <div className={cn(isEven ? 'order-1 md:order-2' : 'order-1')}>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.src}`}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className={cn(isEven ? 'order-2 md:order-1' : 'order-2')}>
              <h3 className="text-lightest-slate mb-4 text-2xl font-bold">
                {title}
              </h3>
              <div className="bg-light-navy text-slate rounded p-6 leading-relaxed whitespace-pre-line">
                {description}
              </div>
              <div className="mt-4 mb-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-green font-mono text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {links.github && (
                  <Link href={links.github}>
                    <GithubIcon className="size-4" />
                    GitHub
                  </Link>
                )}
                {links.demo && (
                  <Link href={links.demo}>
                    <JumpToBlankIcon className="size-4" />
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

interface LinkProps {
  href: string
  children: React.ReactNode
}

const Link = ({ href, children }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    className="text-slate hover:text-green flex items-center gap-2 transition-colors"
  >
    {children}
  </a>
)
