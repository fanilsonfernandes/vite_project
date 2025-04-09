
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content,onDeleteComment}){

    const [likeCount,setLikeCount]=useState(0)

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
        return state +1

    });

   

  }

    return (
        <div className={styles.comment}>

<Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/91396584?v=4"/>
        
  <div className={styles.commentBox}>

            <div className={styles.commentContent}>
                <header >
                    <div className={styles.authorAndTime}>
                        <strong>Phanilson F.dos Santos</strong>
                        <time title="16 dez as 06:42h" dateTime="2022-12-16  06:42:35">Cerca de 2h</time>
                    </div>


                         <button onClick={handleDeleteComment}  title="Deletar comentario">
                        <Trash size={24} />
                    </button>

                </header>
                <p>
                {content}
                </p>

            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir<span>{likeCount}</span>
                </button>
               
            </footer>
        </div>
        </div>
    )
}