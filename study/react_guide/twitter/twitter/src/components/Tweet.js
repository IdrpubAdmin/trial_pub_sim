import { dbService, storageService } from "fbase";
import React, {useState} from "react";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tweet = ({ tweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newTweet, setNewTweet] = useState(tweetObj.text);
    const TweetTextRef =doc(dbService, "tweets", `${tweetObj.id}`);
    const onDeleteClick = async () => {
        const ok = window.confirm('Are you sure you want to delete this tweet?');
        if(ok) {
            await deleteDoc(TweetTextRef );
            if(tweetObj.attachmentUrl !== "" ){
                await deleteObject(ref(storageService, tweetObj.attachmentUrl));
            }
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(TweetTextRef, {text: newTweet});
        setEditing(false);
    };
    const onChange = (event) => {
        const {target: {value},} = event;
        setNewTweet(value);
    };
    return(
        <div className="nweet">
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit} className="container nweetEdit">
                            <input onChange={onChange} type="text"  placeholder="Edit your tweet" value={newTweet} required autoFocus className="formInput" />
                            <input type="submit" value='Update Tweet' className="formBtn" />
                        </form>
                        <span onClick={toggleEditing} className="formBtn cancelBtn">Cancel</span>
                    </>
                ) : (
                    <>
                        <h4>{tweetObj.text}</h4>
                        {tweetObj.attachmentUrl && <img src={tweetObj.attachmentUrl} /> }
                        {isOwner && (
                            <div className="nweet__actions">
                                <span onClick={onDeleteClick}><FontAwesomeIcon icon={faTrash} /></span>
                                <span onClick={toggleEditing}><FontAwesomeIcon icon={faPencilAlt} /></span>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    );
}

export default Tweet;