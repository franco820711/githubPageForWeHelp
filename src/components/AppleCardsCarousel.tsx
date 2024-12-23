"use client";
import {
  BlurImage,
  Card,
  Carousel,
} from "@/components/ui/apple-cards-carousel";
import { getPublicPath } from "@/lib/utils";

interface ContentItem {
  title: string;
  content: string;
  image?: {
    src: string;
    alt: string;
  };
}

interface ContentProps {
  items: ContentItem[];
}

const DummyContent = ({ items }: ContentProps) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={"content-" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto space-y-4">
              <p className="font-bold text-neutral-700 dark:text-neutral-200">
                {item.title}
              </p>
              <p>{item.content}</p>
            </div>
            {item.image && (
              <BlurImage
                src={getPublicPath(item.image.src)}
                alt={item.image.alt}
                height={500}
                width={500}
                className="mt-4 md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-lg"
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20 pb-5">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Gallery
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Flutter",
    title: "熊獲利\n二手電子商品交易平台",
    src: getPublicPath("/test17.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "平台特色",
            content:
              "專業的二手電子商品交易平台，提供完整的買賣保障機制。特別設計驗貨流程，確保買家收到優質商品：賣家需先將商品寄送至平台進行專業檢測，確認商品狀況符合描述後，才會轉寄給買家，讓交易更有保障。",
            image: {
              src: "/c1.png",
              alt: "熊獲利平台介面展示",
            },
          },
          {
            title: "技術亮點",
            content:
              "採用Flutter跨平台開發技術，結合Firebase全方位雲端服務，打造高效能的電商應用。核心功能包括：社群快速登入、智慧購物車系統、綠界金流整合、即時通知與聊天功能、完整的商品管理後台、訂單追蹤系統，以及會員服務中心。運用Material Design設計原則，創造流暢的使用者體驗。",
          },
        ]}
      />
    ),

    videoUrl: "https://www.youtube.com/shorts/3Tt6dTPNu6c",
  },
  {
    category: "Flutter",
    title: "DoggyCatty\n寵物認養媒合平台",
    src: getPublicPath("/test16.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "服務宗旨",
            content:
              "整合全台灣的寵物認養資訊，串接政府開放資料平台API，提供直觀的搜尋與篩選功能。使用者可以輕鬆找到心儀的寵物，並透過收藏功能追蹤關注。我們致力於為每個流浪動物尋找溫暖的家。",
            image: {
              src: "/c2.png",
              alt: "DoggyCatty平台介面",
            },
          },
          {
            title: "技術特色",
            content:
              "針對大量公開資料進行智慧過濾與優化，實作分頁載入機制，並導入圖片快取技術，大幅提升使用者體驗。完善的錯誤處理機制確保系統穩定運行，讓使用者享有流暢的瀏覽體驗。",
          },
        ]}
      />
    ),

    videoUrl: "https://www.youtube.com/shorts/qOL1-YEVpMY",
  },
  {
    category: "Flutter",
    title: "Adjoined\n智慧讀書夥伴",
    src: getPublicPath("/test25.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "創新理念",
            content:
              "打造虛擬讀書室體驗，幫助使用者建立良好的學習習慣。支援任務管理、專注計時、休息提醒等功能，並提供語音聊天室，讓您能與志同道合的夥伴一起追求知識成長。",
            image: {
              src: "/c4.png",
              alt: "Adjoined應用展示",
            },
          },
        ]}
      />
    ),
  },
  {
    category: "Flutter",
    title: "Doggo\n寵物保姆媒合平台",
    src: getPublicPath("/test23.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "服務特色",
            content:
              "創新的寵物保姆媒合服務，連結愛狗人士與專業保姆。整合即時定位追蹤，讓飼主隨時掌握愛犬動向。保姆可即時記錄狗狗的活動狀態，包括散步路線、如廁、休息與餵食等資訊，提供完整的寵物照護紀錄。",
            image: {
              src: "/c5.png",
              alt: "Doggo平台功能展示",
            },
          },
          {
            title: "技術方案",
            content:
              "採用Flutter框架實現跨平台開發，後端使用Firebase提供全方位雲端服務。整合Google Maps API實現即時位置追蹤，記錄完整散步路徑。透過Firebase Cloud Messaging實現即時通知，確保資訊即時傳遞。完善的資料同步機制，確保所有使用者都能即時獲得最新狀態更新。",
          },
        ]}
      />
    ),

    videoUrl: "https://www.youtube.com/watch?v=HZhiGLd9XAI",
  },
  {
    category: "React",
    title: "Phrasely\nAI智慧寫作助手",
    src: getPublicPath("/test24.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "產品特色",
            content:
              "運用先進的AI技術，協助使用者優化文案表達。智能分析文本結構，提供專業的措辭建議，自動調整語氣與風格，讓您的文字更具說服力。特別適合電子郵件、商業提案、社群貼文等專業寫作需求。",
            image: {
              src: "/c6.png",
              alt: "Phrasely功能展示",
            },
          },
          {
            title: "技術架構",
            content:
              "基於React框架開發，深度整合OpenAI API實現進階文本生成與優化功能。採用Firebase提供雲端服務，結合Redux進行狀態管理，打造流暢的即時編輯體驗。",
          },
        ]}
      />
    ),
    url: "https://www.phrasely.app/",
  },
  {
    category: "NextJS",
    title: "TubaGym\n智慧健身房管理系統",
    src: getPublicPath("/test18.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "系統概觀",
            content:
              "為現代健身房打造的一站式管理解決方案。整合人臉辨識門禁系統、會員管理平台、課程預約系統、線上商城，以及財務分析儀表板。透過數位化轉型，提升營運效率，創造卓越的會員服務體驗。",
            image: {
              src: "/gym1.png",
              alt: "TubaGym系統展示",
            },
          },
          {
            title: "技術規格",
            content:
              "採用NextJS框架搭配TailwindCSS打造現代化前端介面，後端使用NestJS結合MongoDB與Redis建構高效能服務。整合多項進階功能：Traefik反向代理確保安全性、Portainer提供容器管理、Umami追蹤使用者行為、Grafana視覺化數據分析，打造完整的企業級應用方案。",
            image: {
              src: "/gym2.png",
              alt: "系統架構圖",
            },
          },
        ]}
      />
    ),

    videoUrl: "https://www.youtube.com/watch?v=rPV3aRjOOLo",
  },
  {
    category: "NextJS",
    title: "MemoGPT\nAI智慧語音筆記",
    src: getPublicPath("/memo3.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "產品特色",
            content:
              "創新的AI語音筆記應用，讓記錄生活更加輕鬆。只要開啟錄音，AI 就能自動分析語音內容，提取關鍵字並生成結構化筆記。支援時間軸瀏覽，讓您輕鬆回顧每一天的重要時刻。完整的歷史記錄管理，配合智慧封存功能，幫助您有效整理和保存珍貴的回憶。",
            image: {
              src: "/c7.png",
              alt: "MemoGPT 應用介面展示",
            },
          },
          {
            title: "技術亮點",
            content:
              "採用 NextJS 打造現代化前端介面，使用 Web Speech API 實現即時語音轉文字功能，並運用 GPT API 進行文本摘要與關鍵字提取。",
          },
        ]}
      />
    ),
  },
];
