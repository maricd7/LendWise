export default async function Home() {
  const fetchData = async () => {
    const response = await fetch("/api/MockData");
    const data = await response.json();
    console.log(data, "Data");
  };
  fetchData();
  return <div>Data</div>;
}
