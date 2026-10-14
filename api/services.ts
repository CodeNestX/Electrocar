import { apiClient } from "./apiClient";

// دریافت همه مقالات یا مقالات بر اساس زبان
export const getCategoryByLanguage = async (language: string = "fa") => {
  try {
    const url = `/categories/language?lang=${language}`;
    const response = await apiClient.get(url);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت دسته بندی:", error.response?.data || error.message);
    throw error;
  }
};

// دریافت مقالات بر اساس ترجمه دسته‌بندی
export const getArticlesByCategoryTranslationId = async (categoryTranslationId: number | string) => {
  try {
    const response = await apiClient.get(`/articles/category_translation/${categoryTranslationId}`);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات :", error.response?.data || error.message);
    throw error;
  }
};

export const getArticlesBySlug = async (articlesSlug: number | string) => {
  try {
    const response = await apiClient.get(`/articles/slug/${articlesSlug}`);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات :", error.response?.data || error.message);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await apiClient.get(`/users/me`);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات :", error.response?.data || error.message);
    throw error;
  }
};

export const sendMessage = async (name: string, subject: string, message: string, email: string, mobile: "") => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("subject", subject);
    if (email !== "") {
      formData.append("email", email);
    }
    if (mobile !== "") {
      formData.append("email", mobile);
    }

    const response = await apiClient.post(`/contact` , formData);
    return response;
  } catch (error: any) {
    console.error("خطا در دریافت مقالات :", error.response?.data || error.message);
    throw error;
  }
};