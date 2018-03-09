

export default class TennisGame {
    getRandomShotTarget() {
        // ieee standard dice roll
        // xkcd.com/221
        return 4;
    }

    getRandomShotType() {
        // ieee standard dice roll
        // xkcd.com/221
        return 4;
    }

    getShotResult(targetLoc, playerPosition, shotDirection, shotPower) {
        

        
    }

    getAccuracy(shotCoordinate, shotTarget) {
        let [x1, y1] = shotCoordinate
        let [x2, y2] = shotTarget
        // pythagorean theorem
        // sqrt(dx^2 + dy^2)
        distance = (((x1 - x2)**2) + ((y1 - y2)**2))**0.5
        if (distance < 5) {
          return "veryclose"
        }
        if (distance > 5 && distance <= 15) {
          return "close"
        }
        if (distance > 15 && distance <= 25) {
          return "average"
        }
        if (distance > 25) {
          return "far"
        }
      }
}
