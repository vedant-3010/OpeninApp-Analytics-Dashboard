export async function fetchData() {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const data = await response.json();
      return data.entries;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  