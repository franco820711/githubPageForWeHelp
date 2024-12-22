import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarousel";
import { ApplicationLayout } from "@/components/ApplicationLayout";

export default function ApplicationLandingPage() {
  // const sections = [
  //   {
  //     title: "個人簡介和申請動機",
  //     content: getContent("intro"),
  //   },
  //   {
  //     title: "軟體工程技術學習經歷",
  //     content: getContent("tech"),
  //   },
  //   {
  //     title: "學習時間安排",
  //     content: getContent("schedule"),
  //   },
  //   {
  //     title: "選擇投資領域的考量",
  //     content: getContent("investment"),
  //   },
  //   {
  //     title: "處理負面情緒的經歷",
  //     content: getContent("emotion"),
  //   },
  //   {
  //     title: "申請網頁開發心得",
  //     content: getContent("web"),
  //   },
  //   {
  //     title: "工作與社會的連結",
  //     content: getContent("social"),
  //   },
  //   {
  //     title: "其他想說的話",
  //     content: getContent("other"),
  //   },
  // ];

  return (
    <ApplicationLayout>
      <iframe
        src="https://chatbot-wei.netlify.app/"
        className="w-full h-[80vh] "
        title="Chatbot Wei"
      />

      <section className="bg-gray-50 relative w-screen left-[50%] right-[50%] -mx-[50vw]">
        <div className="container mx-auto pt-8 px-4 md:px-6 lg:px-8">
          <AppleCardsCarouselDemo />
        </div>
      </section>
    </ApplicationLayout>
  );
}
