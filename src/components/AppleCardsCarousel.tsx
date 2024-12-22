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
    title: "熊獲利\n二手電子商品平台",
    src: getPublicPath("/test17.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "這是一個小型的平台，賣家可以販售二手電子商品，如手機、電腦、相機等，買家可以透過平台進行交易，如對交易有疑慮，平台也提供驗貨功能，賣家需先把商品寄到平台商，待驗貨沒問題才會寄出。",
            image: {
              src: "/c1.png",
              alt: "",
            },
          },
          {
            title: "技術架構",
            content:
              "本專案前端使用Flutter框架開發跨平台應用，後端採用Firebase全方位服務，包括Firebase Cloud Functions作為後端API服務、Cloud Firestore提供即時數據庫功能、Cloud Storage處理圖片儲存，以及Firebase Cloud Messaging(FCM)實現推播通知功能。使用者介面採用Material Design設計規範，提供直覺且美觀的操作體驗。系統整合多項進階功能，包括：第三方社群帳號登入、購物車系統、綠界金流支付整合、即時通知系統、即時聊天室、完整的商品管理後台、訂單管理系統以及會員資料管理等功能。",
          },
        ]}
      />
    ),
    url: "https://www.youtube.com/watch?v=C84LTY_CNJg",
    videoUrl: "https://www.youtube.com/shorts/3Tt6dTPNu6c",
  },
  {
    category: "Flutter",
    title: "DoggyCatty\n認養資訊平台",
    src: getPublicPath("/test16.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "這是一個查詢寵物認養資訊的平台，串接政府資料開放平台API，可輕鬆篩選各類寵物認養資訊、加入我的最愛隨時追蹤。",
            image: {
              src: "/c2.png",
              alt: "",
            },
          },
          {
            title: "技術架構",
            content:
              "因公開資料量大，本專案首先過濾掉無效資料，透過分頁的方式降低資料量、並且緩存圖片，提升使用者體驗，並做好API錯誤請求處理。",
          },
        ]}
      />
    ),
    url: "https://www.youtube.com/shorts/qOL1-YEVpMY",
    videoUrl: "https://www.youtube.com/shorts/qOL1-YEVpMY",
  },
  {
    category: "Flutter",
    title: "Adjoined\n迷你讀書會",
    src: getPublicPath("/test25.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "這是一個和夥伴一起讀書、工作的App，選擇今天的任務並建立房間，建立後將自動計時工作時間、休息時間，您可與夥伴語音也可隨時離開。",
            image: {
              src: "/c4.png",
              alt: "",
            },
          },
        ]}
      />
    ),
  },
  {
    category: "Flutter",
    title: "Doggo\n狗狗GO",
    src: getPublicPath("/test23.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "這是一個幫忙附近朋友遛狗的App，您可預約喜歡的保姆，隨時查看狗狗目前在哪裡散步中。保姆可在地圖中標注狗狗是否上廁所、玩耍、吃點心等狀態，飼主安心狗狗也開心。",
            image: {
              src: "/c5.png",
              alt: "",
            },
          },
          {
            title: "技術架構",
            content:
              "本專案前端使用Flutter框架開發跨平台應用，後端採用Firebase全方位服務，包括Firebase Cloud Functions作為後端API服務、Cloud Firestore提供即時數據庫功能、Cloud Storage處理圖片儲存，以及Firebase Cloud Messaging(FCM)實現推播通知功能。關於地圖設計，採用了Google Maps API進行地圖的顯示和互動功能，並且定時記錄保姆遛狗時的位置，以便在地圖上畫出行徑路線方便飼主追蹤。",
          },
        ]}
      />
    ),
    url: "https://www.youtube.com/watch?v=HZhiGLd9XAI",
    videoUrl: "https://www.youtube.com/watch?v=HZhiGLd9XAI",
  },
  {
    category: "React",
    title: "Phrasely\nAI寫作優化工具",
    src: getPublicPath("/test24.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "用 AI 重新措辭並調整語氣和風格，提升電子郵件與文案的內容和流暢度，並克服寫作障礙。",
            image: {
              src: "/c6.png",
              alt: "",
            },
          },
          {
            title: "技術架構",
            content:
              "本專案為 React 開發，串接 OpenAI API 進行文本生成和翻譯等功能，並使用 Firebase 和 Redux 儲存文本資料和狀態。",
          },
        ]}
      />
    ),
    url: "https://www.phrasely.app/",
  },
  {
    category: "NextJS",
    title: "健身房管理系統",
    src: getPublicPath("/test18.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "這是一個健身房管理系統，整合閘門人臉辨識、會員管理、訂單管理、預約課程、線上商店、財務報表等功能",
            image: {
              src: "/gym1.png",
              alt: "",
            },
          },
          {
            title: "技術架構",
            content:
              "前端使用NextJS及TailwindCSS開發，後端使用NestJS及MongoDB、Redis，並整合多個服務包括Traefik反向代理、Portainer服務管理、Umami用戶行為分析、Grafana儀表板。",
            image: {
              src: "/gym2.png",
              alt: "",
            },
          },
        ]}
      />
    ),
    url: "https://tubagym2024.com/",
    videoUrl: "https://www.youtube.com/watch?v=rPV3aRjOOLo",
  },
  {
    category: "NextJS",
    title: "結合智能門禁\n輕鬆管理會員進出",
    src: getPublicPath("/test20.png"),
    content: (
      <DummyContent
        items={[
          {
            title: "簡介",
            content:
              "這是一個健身房管理系統，整合閘門人臉辨識、會員管理、訂單管理、預約課程、線上商店、財務報表等功能",
            image: {
              src: "/gym1.png",
              alt: "",
            },
          },
          {
            title: "技術架構",
            content:
              "前端使用NextJS及TailwindCSS開發，後端使用NestJS及MongoDB、Redis，並整合多個服務包括Traefik反向代理、Portainer服務管理、Umami用戶行為分析、Grafana儀表板。",
            image: {
              src: "/gym2.png",
              alt: "",
            },
          },
          {
            title: "圖片展示",
            content: "",
            image: {
              src: "/gym3.png",
              alt: "",
            },
          },
        ]}
      />
    ),
    url: "https://tubagym2024.com/",
    videoUrl: "https://www.youtube.com/watch?v=rPV3aRjOOLo",
  },
];
