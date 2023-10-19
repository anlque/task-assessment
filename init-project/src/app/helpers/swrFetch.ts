import { SearchParams } from "../(posts)/dashboard/list/model/ParamsContext";

type swrFetchArgs = [ url: string, params: SearchParams, expand: string]
   
export const fetchPosts = async <T>(
    [url, params, expand]: swrFetchArgs
    ): Promise<T> => {
        
    const {limit, page, sort, order, search} = params
    const apiUrl = new URL(url)
    
    apiUrl.searchParams.set('_limit', limit)
    apiUrl.searchParams.set('_page', page)
    apiUrl.searchParams.set('_sort', sort)
    apiUrl.searchParams.set('_order', order)
    apiUrl.searchParams.set('q', search)
    apiUrl.searchParams.set('_expand', expand)
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

export const fetchPagination = async <T>(url: string): Promise<T> => {
      
    const response = await fetch(url);
  
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
  
    return response.json();
  };