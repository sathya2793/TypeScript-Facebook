// defining a class
class FaceBook{

    constructor(private name : string,private email : string,private phone ?: number,public work ?: string[],public education ?: string[],public birthDay ?: string,private gender ?: string,public languages ?: string[],public lives ?: string,public relationship ?: string,public status ?: string,public friends ?: string[]){
        this.name = name
        this.email = email
        this.phone = phone
        this.work = work
        this.education = education
        this.birthDay = birthDay
        this.gender = gender
        this.languages = languages
        this.lives = lives
        this.relationship = relationship
        this.status = status
        this.friends = friends
    }// end constructor

    
    getName = () =>{
        return this.name
    }

    getEmail = () =>{
        return this.email
    }

    getPhoneNumber = () =>{
        return this.phone
    }

    getWorkDetails = () =>{
        return this.work
    }

    getEducationDetails = () =>{
        return this.education
    }

    getBday = () =>{
        return this.birthDay
    }

    getGender = () =>{
        return this.gender
    }

    getLivesIn = () =>{
        return this.lives
    }

    getLanguageKnow = () =>{
        return this.languages
    }
   
    getRelationship = () =>{
        return this.relationship
    }

    getStatus = () =>{
        return this.status
    }

    getNumber0fFriends = () =>{
        return this.friends
    }

    //setter
    setStatus  = (status:string) =>{
        this.status= status
    }

    //rest
    setFriends = (...friend:string[]) =>{
        let newMember= friend
        let TotalFriends :string[] = []
        TotalFriends = TotalFriends .concat(newMember)
        this.friends = TotalFriends 
    }

    // method
    Photos = () =>{
        console.log("These are photos uploaded by you")
    }

    Videos = () =>{
        console.log("These are videos uploaded by you")
    }

    CheckIns = () =>{
        console.log("You recented checked-Ins places")
    }

    Sports = () =>{
        console.log("These sports club have been liked")
    }

    Music = () =>{
        console.log("These music have been liked")
    }

    Movies = () =>{
        console.log("These movies have been liked")
    }

    TvShows = () =>{
        console.log("These tv shows have been liked")
    }

    Books = () =>{
        console.log("These books have been liked")
    }

    Apps = () =>{
        console.log("These apps have been liked")
    }

    likedPosts = () =>{
        console.log("These posts have been liked")
    }

    

}// end class 

let setCount0fFriends = (friends:any)=>{
  
    if(typeof friends == 'string'){
        return 'you have 1 friend'
    }
    else{
        let message = `you have ${friends.length} friends`
        return message
    }
}

let user = new FaceBook("sathya","some@gmail.com",9890002133,["CTS"],["MBA","B.tech"],"27-05-1993","male",["Tamil","English"],"salem","single","Smile forever",["Balu","sathya"])

//get data
console.log("User Name: "+user.getName())
console.log("Email: "+user.getEmail())
console.log("Phone: "+user.getPhoneNumber())
console.log("Work: "+user.getWorkDetails())
console.log("Edcation: "+user.getEducationDetails())
console.log("Bday: "+user.getBday())
console.log("Gender: "+user.getGender())
console.log("Language: "+user.getLanguageKnow())
console.log("Lives: "+user.getLivesIn())
console.log("Realationship: "+user.getRelationship())
let friends=user.getNumber0fFriends()
console.log("Number of friends: "+setCount0fFriends(friends))
console.log("Status: "+user.getStatus())

//function call
user.likedPosts()
user.Movies()
user.Music()
user.Photos()
user.Sports()
user.TvShows()
user.Videos()
user.Apps()
user.Books()
user.CheckIns()

//update the status
user.setStatus("Hello")
console.log("Updated Status: "+user.getStatus())

// rest parameter 
let events :string[] = []
let participation = (...people:string[]) =>{
    let newParticipation= people
    events = events .concat(newParticipation)	
    console.log("New events Lists: "+events)
    return events 
}
participation("balu","sathya","Raja")
participation("shree","surya")