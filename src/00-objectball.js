function gameOject(){
    return{
        home:{
            teamName:"Brooklyn Nets",
            colors:[Black,White],
            players:{
                "Alan Anderson":{
                    Number:0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:1,
                },
                "Reggie Evans":{
                    Number:30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    SlamDunks:7,
                },
                "Brook Lopez":{
                    Number:11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:15,
                },
                "Mason Plumlee":{
                    Number:1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunks:5,
                },
                "Jason Terry":{
                    Number:31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunks:1,
                }


        }
    },
    away:{
        teamName:"Charlotte Hornets",
        colors:["Turquoise","Purple"],
        players:{
            "Jeff Adrien":{
                Number:4,
                    Shoe:18,
                    Points:10,
                    Rebounds:1,
                    Assists:1,
                    Steals:2,
                    Blocks:7,
                    SlamDunks:2,
            },
            "Bismak Biombo":{
                Number:0,
                    Shoe:16,
                    Points:12,
                    Rebounds:4,
                    Assists:7,
                    Steals:7,
                    Blocks:15,
                    SlamDunks:10,
            },
            "DeSagne Diop":{
                Number:2,
                    Shoe:14,
                    Points:24,
                    Rebounds:12,
                    Assists:12,
                    Steals:4,
                    Blocks:5,
                    SlamDunks:5,
            },
            "Ben Gordon":{
                Number:8,
                    Shoe:15,
                    Points:33,
                    Rebounds:3,
                    Assists:2,
                    Steals:1,
                    Blocks:1,
                    SlamDunks:0,
            },
            "Brendan Haywood":{
                Number:33,
                    Shoe:15,
                    Points:6,
                    Rebounds:12,
                    Assists:12,
                    Steals:22,
                    Blocks:5,
                    SlamDunks:12,
            }
        }
    }
}
} debugger


function homeTeamName(){
    return object['home']['teamName']
}

function homeTeam(){
    return gameOject().home;
}

function awayTeam(){
    return gameOject().away;
}

function player(){
    return Object.assign({},homeTeam().players, awayTeam().players);
}

function numPointScored(playerName){
    return player()[playerName].points;
}

function ShoeSize(playerName){
    return player()[playerName].Shoe;
}
function teamColors(nameOfTeam){
    return homeTeam().teamName === nameOfTeam ? homeTeam().colors :awayTeam().colors;
}

function teamName(){
    return [homeTeam().teamName, awayTeam().teamName];
}

function playerNumbers(nameOfTeam){
    const team = homeTeam().teamName === nameOfTeam ? homeTeam() : awayTeam();
    const teamPlayers = Object.entries(team.players);
    return teamPlayers.map(array => array[1].number);

}

function playerStats(playerName){
    return players()[playerName];
}

function bigShoeRebounds(){
    const playerArray = Object.values(players());
    const biggestShoe = playerArray.reduce((player1, player2) =>player1.shoe > player2.shoe ? player1 : player2);
    return biggestShoe.Rebounds;
}

function playerWithLongestName(){
    return Object.entries(players()).reduce((player1, player2) =>player1.length > player2.length ? player1 : player2)[0];
}

function mostPointsScored(){
    const playerArray = Object.entries(players());
    const mostPoints = playerArray.reduce((player1,player2)=> player1[1].points > player2[1].points ? player1 : player2)[0];
    return mostPoints[0];
}



function doesLongNameStealATon(){
    const playerArray = Object.entries(players());
    const playerWithMostSteals = playerArray.reduce((player1,player2)=> player1[1].steals > player2[1].steals ? player1 : player2);
    return playerWithMostSteals[0] === playerWithLongestName();
}