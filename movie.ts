
class Movie
{
public hero:String="Rajini";

}
class Movie1 extends Movie{
public director:String="shankar";
public movie:String="Robo";
}
var mv = new Movie();
console.log(mv.hero);

var mv1 = new Movie1();
console.log(mv1.movie);
console.log(mv1.director);
