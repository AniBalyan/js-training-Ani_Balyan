let listOfHarassmentWords = ["idiot", "loser", "moron", "stupid", "dumb", "fool", "bully", "creep"];
let validateComment = function(comment) {
    if (typeof comment !== 'string') {
        return "Invalid input: Comment must be a string."
    }
    for (let i =0; i < listOfHarassmentWords.length; i++) {
        if (comment.toLowerCase().includes(listOfHarassmentWords[i].toLowerCase())) {
            return "This comment can't be posted as it contains the word: " + listOfHarassmentWords[i]
        }
   
    }
    return "Comment posted successfully! " + comment
  }
  console.log(validateComment("You are a creep"))
