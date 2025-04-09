

import {format} from 'date-fns' 
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';





export function Post({id,author,content }){

    const [comments,setComments]= useState([
       "post muito bacana Phanilon!"
        
    ])
// const publishedAtDateFormatted =format(publishedAt," d 'de' LLLL 'as' HH:mm'h'")

const [newCommentText,setNewCommentText]=useState('') 

function handleCreateNewComment(){
    event.preventDefault()

  
    

    setComments([...comments,newCommentText]);
    setNewCommentText('');

}
   

     function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);

     }

 
     function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse cammpo e obrigatorio!');
     }

     function deleteComment(commentToDelete){
        const commentWithoutDeletedOne = comments.filter(comment=>{
            return comment !=commentToDelete;
        })
       setComments(commentWithoutDeletedOne);
     }

     const isNewCommentEmpty=newCommentText.length==0;
    return (
    
            <article className={styles.Post}>
                <header key={id}>
                    <div className={styles.author}>
                    <Avatar  src={author.avatarUrl}/>
                   <div className={styles.authorInfo}>
                   <strong>{author.name}</strong>
                     <span>{author.role}</span>
                    
                    </div>
                    </div>
                    <time title= '' dateTime="2022-12-16  06:42:35">
                        
                       
                    </time>
                    
                </header>
                <div className={styles.content}>
                    {content.map(line=>{
                        if(line.type =='paragrafo'){
                            return <p key={line.content}>{line.content}</p>
                        }else if(line.type=='link'){
                            return  <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                   

                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>
                        Deixe seu feedback
                    </strong>
                    
                    <textarea 
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um comentario"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required

                    />
                    <footer>
                    <button type="submit"
                     disabled={isNewCommentEmpty}>
                        Publicar
                        </button>
                    </footer>
                    <div className={styles.commentList}></div>
                   { comments.map(comment=>{
                    return (
                    <Comment
                         key={comment} 
                         content={comment}  
                         onDeleteComment={deleteComment}
                         />
                         )
                   })} 
                   
            

                </form>
            </article>

    
    )
}