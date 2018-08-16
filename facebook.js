// defining a class
var FaceBook = /** @class */ (function () {
    function FaceBook(name, email, phone, work, education, birthDay, gender, languages, lives, relationship, status, friends) {
        var _this = this;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.work = work;
        this.education = education;
        this.birthDay = birthDay;
        this.gender = gender;
        this.languages = languages;
        this.lives = lives;
        this.relationship = relationship;
        this.status = status;
        this.friends = friends;
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getPhoneNumber = function () {
            return _this.phone;
        };
        this.getWorkDetails = function () {
            return _this.work;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.getBday = function () {
            return _this.birthDay;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLivesIn = function () {
            return _this.lives;
        };
        this.getLanguageKnow = function () {
            return _this.languages;
        };
        this.getRelationship = function () {
            return _this.relationship;
        };
        this.getStatus = function () {
            return _this.status;
        };
        this.getNumber0fFriends = function () {
            return _this.friends;
        };
        //setter
        this.setStatus = function (status) {
            _this.status = status;
        };
        //rest
        this.setFriends = function () {
            var friend = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                friend[_i] = arguments[_i];
            }
            var newMember = friend;
            var TotalFriends = [];
            TotalFriends = TotalFriends.concat(newMember);
            _this.friends = TotalFriends;
        };
        // method
        this.Photos = function () {
            console.log("These are photos uploaded by you");
        };
        this.Videos = function () {
            console.log("These are videos uploaded by you");
        };
        this.CheckIns = function () {
            console.log("You recented checked-Ins places");
        };
        this.Sports = function () {
            console.log("These sports club have been liked");
        };
        this.Music = function () {
            console.log("These music have been liked");
        };
        this.Movies = function () {
            console.log("These movies have been liked");
        };
        this.TvShows = function () {
            console.log("These tv shows have been liked");
        };
        this.Books = function () {
            console.log("These books have been liked");
        };
        this.Apps = function () {
            console.log("These apps have been liked");
        };
        this.likedPosts = function () {
            console.log("These posts have been liked");
        };
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.work = work;
        this.education = education;
        this.birthDay = birthDay;
        this.gender = gender;
        this.languages = languages;
        this.lives = lives;
        this.relationship = relationship;
        this.status = status;
        this.friends = friends;
    } // end constructor
    return FaceBook;
}()); // end class 
var setCount0fFriends = function (friends) {
    if (typeof friends == 'string') {
        return 'you have 1 friend';
    }
    else {
        var message = "you have " + friends.length + " friends";
        return message;
    }
};
var user = new FaceBook("sathya", "some@gmail.com", 9890002133, ["CTS"], ["MBA", "B.tech"], "27-05-1993", "male", ["Tamil", "English"], "salem", "single", "Smile forever", ["Balu", "sathya"]);
//get data
console.log("User Name: " + user.getName());
console.log("Email: " + user.getEmail());
console.log("Phone: " + user.getPhoneNumber());
console.log("Work: " + user.getWorkDetails());
console.log("Edcation: " + user.getEducationDetails());
console.log("Bday: " + user.getBday());
console.log("Gender: " + user.getGender());
console.log("Language: " + user.getLanguageKnow());
console.log("Lives: " + user.getLivesIn());
console.log("Realationship: " + user.getRelationship());
var friends = user.getNumber0fFriends();
console.log("Number of friends: " + setCount0fFriends(friends));
console.log("Status: " + user.getStatus());
//function call
user.likedPosts();
user.Movies();
user.Music();
user.Photos();
user.Sports();
user.TvShows();
user.Videos();
user.Apps();
user.Books();
user.CheckIns();
//update the status
user.setStatus("Hello");
console.log("Updated Status: " + user.getStatus());
// rest parameter 
var events = [];
var participation = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    var newParticipation = people;
    events = events.concat(newParticipation);
    console.log("New events Lists: " + events);
    return events;
};
participation("balu", "sathya", "Raja");
participation("shree", "surya");
