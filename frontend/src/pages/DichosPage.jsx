import { useEffect, useState } from 'react';
import DichoCard from '../components/DichoCard';
import axios from 'axios';

const DichosPage = () => {
  const [dichos, setDichos] = useState([]);
  const [loadingStage, setLoadingStage] = useState(1);

  const loadingMessages = {
    1: 'Loading dichos...',
    2: 'Still loading, please wait...',
    3: 'Almost ready...',
    4: 'Incoming...',
  };

  useEffect(() => {
    const stage2Timer = setTimeout(() => setLoadingStage(2), 10000);
    const stage3Timer = setTimeout(() => setLoadingStage(3), 30000);
    const stage4Timer = setTimeout(() => setLoadingStage(4), 50000);

    const getDichos = async () => {
      try {
        const res = await axios.get('https://dichonario.onrender.com/dichos');
        setDichos(res.data.dichos);
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {        
        setLoadingStage(0);
        clearTimeout(stage2Timer);
        clearTimeout(stage3Timer);
        clearTimeout(stage4Timer);
      }
    };

    getDichos();
  }, []);

  return (
    <section className="flex justify-center bg-blue-50 px-4 py-6">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Los Dichos</h2>

        {loadingStage > 0 && dichos.length === 0 && (
          <div className="flex flex-col items-center mb-6">
            <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-bold text-center">
              {loadingMessages[loadingStage]}
            </h3>
            <p>Please give up to a minute for Dichos to load, Dichonario runs on free servers :)</p>
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
