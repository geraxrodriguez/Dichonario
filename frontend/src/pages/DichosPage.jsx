import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import DichoCard from '../components/DichoCard';

const DichosPage = () => {
  const [dichos, setDichos] = useState([]);
  const [loadingStage, setLoadingStage] = useState(1);
  const isLoading = useRef(true);

  const loadingMessages = {
    1: 'Loading dichos...',
    2: 'Sorry about this... still working on it',
    3: 'Realllly sorry... still working...',
    4: 'Almost...',
  };

  useEffect(() => {
    if (!isLoading.current) return;

    const stage2Timer = setTimeout(() => setLoadingStage(2), 10000);
    const stage3Timer = setTimeout(() => setLoadingStage(3), 30000);
    const stage4Timer = setTimeout(() => setLoadingStage(4), 50000);

    const getDichos = async () => {
      try {
        const res = await axios.get('https://dichonario.onrender.com/dichos');

        setTimeout(() => {
          setDichos(res.data.dichos);
          setLoadingStage(0);
          isLoading.current = false;
        }, 60000);
      } catch (error) {
        console.log('Error fetching data', error);
        setLoadingStage(0);
        isLoading.current = false;
      }
    };

    getDichos();

    return () => {
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
    };
  }, []);

  return (
    <section className="flex justify-center bg-blue-50 px-4 py-6">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Los Dichos</h2>

        {loadingStage > 0 && (
          <div className="flex flex-col items-center mb-6">
            <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-bold text-center">
              {loadingMessages[loadingStage]}
            </h3>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dichos.map((dicho) => (
            <DichoCard key={dicho._id} dicho={dicho} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DichosPage;
