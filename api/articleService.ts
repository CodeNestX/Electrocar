import { apiClient } from "./apiClient";
import { Article } from "@/types/article";

export const getArticles = async (): Promise<Article[]> => {
  try {
    const response = await apiClient.get("/articles");
    return response.data;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات:", error.response?.data || error.message);
    throw error;
  }
};

// ۲. دریافت یک مقاله بر اساس اسلاگ یا شناسه
export const getArticleBySlug = async (slug: string): Promise<Article> => {
  try {
    const response = await apiClient.get(`/articles/${slug}`);
    return response.data;
  } catch (error: any) {
    console.error("خطا در دریافت مقاله:", error.response?.data || error.message);
    throw error;
  }
};

// ۳. همگام‌سازی و ذخیره بلوک‌های مقاله (مخصوص پنل ادمین که قبلاً تو بک‌اند نوشتیم)
export const syncArticleBlocksApi = async (articleId: string | number, blocksData: any, filesData?: Record<string, File>) => {
  try {
    const formData = new FormData();
    formData.append("blocks", JSON.stringify(blocksData));

    // اگر فایلی (عکس یا ویدیو) همراه بلوک‌ها آپلود شده باشد به فرم‌دیتا اضافه می‌شود
    if (filesData) {
      Object.keys(filesData).forEach((key) => {
        formData.append(key, filesData[key]);
      });
    }

    const response = await apiClient.post(`/articles/${articleId}/blocks`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // برای ارسال فایل و داده‌ها به صورت همزمان
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("خطا در همگام‌سازی بلوک‌ها:", error.response?.data || error.message);
    throw error;
  }
};