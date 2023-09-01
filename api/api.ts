// postの基本設定
const baseUrl = 'https://us-central1-modaneducation.cloudfunctions.net'
export const Get = async (params:any,path:string) => {
    try {
      const url = new URL(baseUrl+path, window.location.origin);
      if (params) {
        const searchParams = new URLSearchParams(params);
        url.search = searchParams.toString();
      }
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to get users');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      // エラーハンドリング
      console.error(error)
      throw error;
    }
  };
  
// postの基本設定
export const Post = async (params:any,path:string) => {
    try {
      const response = await fetch(baseUrl+path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      const data = await response.json();
      return data;
      } catch (error) {
        // エラーハンドリング
        console.error(error)
        throw error;
      }
    };  
