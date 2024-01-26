import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import CourseCards from './components/CourseCards';
import Partners from './components/Partners';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <MainPage>
      <Header />
      <Information />
      <CourseCards />
      <Partners />
      <Questions />
      <Footer />
    </MainPage>
  );
}

export default App;



const MainPage = styled.div`
  width:100%;

`
