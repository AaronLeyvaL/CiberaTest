export  function isValidWalk(walk: string[]){
    var directions = {
        N: 0,
        S: 0,
        E: 0,
        W: 0
      };
    
      walk.forEach(function (direction) {
        directions[direction]++;
      });
    
      var isHome = () => {
        return directions['N'] == directions['S'] && directions['E'] == directions['W'];
      }
      
      return walk.length === 10 && isHome();
}

