

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'


const posts=[
  {
    
      id:1,
      author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/91396584?v=4',
      name:'Phanilson  F.dos Santos',
      role:'CTO @ Rocketeat',

      },
      content:[ 
        
        
        {type:'paragrafo',content:'fala galeraa 👋'},
      
      
     { type:'paragrafo',content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type:'link', content: '👉 jane.design/doctorcare'}
          ],

      publishedAt: new Date('2022-05-03 200:00:00')   

    
  },

    {
    
      id:2,
      author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/91396584?v=4",
      name:'Mayk Brito',
      role:'Educator @ Rocketeat',

      },
      content:[ 
        
        {type:'paragrafo',content:'fala galeraa 👋'},
      
      
     { type:'paragrafo',content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type:'link', content: '👉 jane.design/doctorcare'}
          ],

      publishedAt: new Date('2022-05-10 200:00:00') ,   

     }

    
];

 export function App() {
  

  return (
    <div>
      <Header />
   <div className={styles.wapper}>
   <Sidebar />

    <main>
      {posts.map(post=>{
       return (<Post 
    
        key={post.id}
       author={post.author}
       content={post.content}
       publishedAt={post.publishedAt}
       />) 
      }) }

    </main>

   </div>
   
   
   </div>
     
  )
}










