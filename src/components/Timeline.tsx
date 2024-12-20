import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  link?: string;
}

const timelineData: TimelineItem[] = [
  {
    date: '2023/12',
    title: 'WeHelp 訓練營結業作品',
    description: '使用 Python Flask 開發的電商網站',
    link: 'https://github.com/yourusername/project1'
  },
  {
    date: '2023/11',
    title: '第三階段作品',
    description: 'RESTful API 設計與實作',
    link: 'https://github.com/yourusername/project2'
  },
  // 您可以根據需要添加更多項目
];

export function Timeline() {
  return (
    <div className="relative container mx-auto px-6 py-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
      
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative flex items-center justify-between mb-8",
            index % 2 === 0 ? "flex-row-reverse" : ""
          )}
        >
          <div className="w-5/12"></div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10">
            <div className="w-3 h-3 rounded-full bg-white m-0.5"></div>
          </div>
          
          <div className={cn(
            "w-5/12 p-4 rounded-lg shadow-lg bg-white",
            "transform transition-all duration-300 hover:scale-105"
          )}>
            <div className="text-sm text-gray-500">{item.date}</div>
            <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
              >
                查看專案 →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
