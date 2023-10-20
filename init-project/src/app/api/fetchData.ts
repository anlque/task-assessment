import { SearchParams } from "../(posts)/dashboard/types/params";

type fetchPostsArgs = [url: string, params: SearchParams, expand: string];

export const fetchPosts = async <T>([
  url,
  params,
  expand,
]: fetchPostsArgs): Promise<T> => {
  try {
    const { limit, page, sort, order, search } = params;
    const apiUrl = new URL(url);

    apiUrl.searchParams.set("_limit", limit);
    apiUrl.searchParams.set("_page", `${page}`);
    apiUrl.searchParams.set("_sort", sort);
    apiUrl.searchParams.set("_order", order);
    apiUrl.searchParams.set("q", search);
    apiUrl.searchParams.set("_expand", expand);

    if (params.userId) {
      apiUrl.searchParams.set("userId", params.userId);
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch GET error:", error);
    throw error;
  }
};

export const fetchPagination = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch GET error:", error);
    throw error;
  }
};

export const getPost = async <T>(id: string): Promise<T> => {
  try {
    const response = await fetch(
      `http://localhost:3000/posts/${id}?_expand=user`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const plainFetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
