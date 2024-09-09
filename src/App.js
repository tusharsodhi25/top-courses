
import './App.css';
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title); // Use correct naming for setCategory

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='bg-[#2a2a4b]'>
        <Filter
          category={category}
          setCategory={setCategory} 
          filterData={filterData}
        />
        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center
                         items-center flex-wrap min-h-[80vh] '>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
