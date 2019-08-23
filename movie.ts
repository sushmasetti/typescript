
class Movie
{
public hero:String="Rajini";

}
class Movie1 extends Movie{
public director:String="shankar";
public movie:String="Robo";
}
var m = new Movie();
console.log(m.hero);

var m1 = new Movie1();
console.log(m1.movie);
console.log(m1.director);
