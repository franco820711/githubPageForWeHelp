import { ApplicationCard } from "@/components/ApplicationCard";
import { ApplicationHeader } from "@/components/ApplicationHeader";
import { ApplicationLayout } from "@/components/ApplicationLayout";
import { getContent } from "@/utils/getContent";
import { Timeline } from "@/components/Timeline";

export default function ApplicationLandingPage() {
  const sections = [
    {
      title: "個人簡介和申請動機",
      content: getContent('intro'),
    },
    {
      title: "軟體工程技術學習經歷",
      content: getContent('tech'),
    },
    {
      title: "學習時間安排",
      content: getContent('schedule'),
    },
    {
      title: "選擇投資領域的考量",
      content: getContent('investment'),
    },
    {
      title: "處理負面情緒的經歷",
      content: getContent('emotion'),
    },
    {
      title: "申請網頁開發心得",
      content: getContent('web'),
    },
    {
      title: "工作與社會的連結",
      content: getContent('social'),
    },
    {
      title: "其他想說的話",
      content: getContent('other'),
    }
  ];

  return (
    <ApplicationLayout>
      <ApplicationHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {sections.map((section, index) => (
          <ApplicationCard
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">作品時間軸</h2>
          <Timeline />
        </div>
      </section>
    </ApplicationLayout>
  );
}
