import React from 'react'; 
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun',
        author: 'Jan Nowak ',
        text: '1111Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit facere pariatur architecto, blanditiis consequatur eum ipsa! Nulla ducimus doloremque velit saepe dolor placeat quaerat. Eos obcaecati voluptas explicabo similique sed!'
    },
    {
        id: 2,
        title: 'Czym jest paradoks fermiego',
        author: 'Roman Kwiatkowski ',
        text: '22222Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, minima consequuntur atque aspernatur quasi delectus assumenda, odit a dicta ex cumque nam magni. Ipsum accusamus repellendus asperiores suscipit debitis. Voluptas?'
    },
    {
        id: 3,
        title: 'Ciemna materia i ciemna energia?',
        author: 'Ania Kwiatkowska',
        text: '4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est soluta sint minima, enim natus a praesentium ab eligendi omnis veniam excepturi fuga? Laborum nisi eius, magni officia iusto consequuntur.'
    },

];

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;