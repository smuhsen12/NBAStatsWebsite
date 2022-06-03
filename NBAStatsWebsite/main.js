
//Loads Player Data
function loadPlayers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {      
        var players = JSON.parse(this.responseText);

        // get 'data' key inside response
        var playersData = players.data;

        // loop all the players
        document.getElementById("players").innerHTML +="<div class ='grid-container'></div>"
        // loop all the players
        for (var player of playersData) {
            document.querySelector("#players .grid-container").innerHTML +=  "<div class=grid-item> <center>" + 
            player["first_name"] + " " + player["last_name"] + 
            "<br /> " + 
            player["position"] + 
            "<br /> " +
            player["team"]["full_name"] + 
             "<br />" +
            player["height_feet"] + "'" + player["height_inches"] +
             "<br />" +
             player["weight_pounds"] + " lbs" +
            "</center> </div> </div> </column> </row>";
        } 
      }
    };

    xhttp.open("GET", "https://www.balldontlie.io/api/v1/players", true);
    xhttp.send();

  }


  //Loads Game Data
  function loadGames() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        var games = JSON.parse(this.responseText);

        // get 'data' key inside response
        var gamesData = games.data;

        // loop all the games
        document.getElementById("games").innerHTML +="<div class ='grid-container'></div>"
        // loop all the players
        for (var games of gamesData) {
            document.querySelector("#games .grid-container").innerHTML +=  "<div class=grid-item> <center>" + 
            games["home_team_score"] + " - " + games["visitor_team_score"] + 
            "<br /> " + 
            games["home_team"]["full_name"] + " vs " + games["visitor_team"]["full_name"]
             +
             "<br />"+
             games["date"]
             +
            "</center> </div> </div> </column> </row>";
        } 
      }
    };
    xhttp.open("GET", "https://www.balldontlie.io/api/v1/games?seasons[]=2021", true);
    xhttp.send();
  }

  //Loads Team Data
  function loadTeams() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        

        var teams = JSON.parse(this.responseText);

        // get 'data' key inside response
        var teamsData = teams.data;

        // loop all the teams
        for (var team of teamsData) {
            // print full name and abbreivation
            document.getElementById("teams").innerHTML += " <center> <br /> <center> " + team["full_name"] + ", " + team["abbreviation"] + ", " + team["conference"] ;
        }
      }
    };
    xhttp.open("GET", "https://www.balldontlie.io/api/v1/teams", true);
    xhttp.send();
  }


  //Loads Stats Data
  function loadStats() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var season_averages = JSON.parse(this.responseText);

        // get 'data' key inside response
        var seasonsData = season_averages.data;

        // loop all the teams
        for (var data of seasonsData) {
            // print full name and abbreivation
            document.getElementById("season_averages").innerHTML += "<br />" + data["player_id"] ;
        }
      }
    };
    xhttp.open("GET", "https://www.balldontlie.io/api/v1/season_averages", true);
    xhttp.send();
  }








