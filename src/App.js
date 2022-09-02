import {initTranslation} from './hooks/useTranslation';
import Homepage from './pages/homepage/Homepage';

const messages = {
  'Loading.First': 'Виджет грузится',
  'Loading.Second': 'Виджет ещё грузится',
  'Loading.Third': 'Загрузка идёт дольше чем обычно. Пожалуйста, подождите',
  'Error.Timeout': 'Ошибка при загрузке. Пожалуйста -- обновите окно',
  'Success.LoadingFinished': 'Виджет загружен!' 
}

initTranslation(messages)

function App() {  

  return (
    <Homepage />
  );
}

export default App;
