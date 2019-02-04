'use strict';

class Idea{
    //constructor for the Idea class @param name and description
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.comments = new Array();
    }

    //get the name the of Idea
    get getName(){
        return this.name;
    }

    //get the description of the idea
    get getDescription(){
        return this.description;
    }

    //get a array with all the comment for this idea
    get getComment(){
        return this.comments;
    }

    //push a comment into the array
    addComment(newComment){
        comments.push(newComment);
    }

    //get the position for the comment you want to remove, then remove it from the array
    removeComment(oldComment){
        let position = 0;
        
        for(let i = 0; i < comments.length; i++){
            if(comments[i].localeCompare(oldComment) === 0)
                position = i;
        }
        
        comments.splice(position);
    }
}

//export the class so it can be used elsewhere
export default Idea;