import { apiClient } from "./apiClient";

// دریافت همه مقالات یا مقالات بر اساس زبان
export const getArticlesByLanguage = async (language: string = "fa") => {
  try {
    const url = `/categories/language?lang=${language}`;
    const response = await apiClient.get(url);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات:", error.response?.data || error.message);
    throw error;
  }
};

// دریافت مقالات بر اساس ترجمه دسته‌بندی
export const getArticlesByCategoryTranslationId = async (categoryTranslationId: number | string) => {
  try {
    const response = await apiClient.get(`/articles/category_translation/${categoryTranslationId}`);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات دسته‌بندی:", error.response?.data || error.message);
    throw error;
  }
};