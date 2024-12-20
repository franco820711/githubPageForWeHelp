"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { marked } from 'marked';

interface ApplicationCardProps {
  title: string;
  content: string;
}

export const ApplicationCard = ({ title, content }: ApplicationCardProps) => {
  const PREVIEW_LENGTH = 80; // 預覽字數限制
  const shouldShowMore = content.length > PREVIEW_LENGTH;
  const previewContent = shouldShowMore
    ? `${content.slice(0, PREVIEW_LENGTH)}...`
    : content;

  // 將 markdown 轉換為 HTML
  const htmlContent = marked(content);

  return (
    <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100 py-3">
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-3">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {previewContent}
        </p>
        {shouldShowMore && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="mt-2 text-blue-600 hover:text-blue-500 p-0">
                閱讀更多...
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4 prose prose-gray max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: htmlContent }} 
                  className="text-gray-700"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};
