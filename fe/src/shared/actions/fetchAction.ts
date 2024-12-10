
export async function PostMethod(url: string, headers: any, data: any) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers, 
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result; 
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการทำคำขอ POST:", error);
      throw error;
    }
  }
  
  // ฟังก์ชันสำหรับทำคำขอ GET
  export async function GetMethod(url: string, headers: any) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers, 
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result; // คืนค่าผลลัพธ์ที่ได้รับจาก API
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการทำคำขอ GET:", error);
      throw error;
    }
  }
  
  // ฟังก์ชันสำหรับทำคำขอ DELETE
  export async function DeleteMethod(url: string, headers: any) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...headers, // เพิ่ม headers หากจำเป็น
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result; // คืนค่าผลลัพธ์ที่ได้รับจาก API
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการทำคำขอ DELETE:", error);
      throw error;
    }
  }
  