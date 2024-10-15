import { useEffect, useState } from 'react';
import axios from 'axios';
import DichoCard from '../components/DichoCard';

const DichosPage = () => {
  const [dichos, setDichos] = useState([]);

  useEffect(() => {
    const getDichos = async () => {
      try {
        const res = await axios.get('https://dichonario.onrender.com/dichos');
        setDichos(res.data.dichos);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    getDichos();
  }, []);

  return (
    <section className="flex justify-center bg-blue-50 px-4 py-6">

      <div className="px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Los Dichos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dichos.map((dicho) => (
            <DichoCard key={dicho._id} dicho={dicho} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default DichosPage;
