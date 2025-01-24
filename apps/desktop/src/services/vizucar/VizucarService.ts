export const searchCar = async (keyword: string, options: RequestInit = {}) => {
  const response = await fetch(
    `http://localhost:8080/api/cars/search?keyword=${keyword}`,
    {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    }
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};
