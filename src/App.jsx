import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/SecondPage';
import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/catalog" element={<FirstPage />} />
          <Route path="/favorites" element={<SecondPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
