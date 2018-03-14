

export default class TennisGame {
    getRandomShotTarget() {
        // ieee standard dice roll
        // xkcd.com/221
        return 4;
    }

    getRandomShotType() {
        // ieee standard dice roll
        // xkcd.com/221
        var shotTypes = {
            0: "Forehand",
            1: "Backhand",
            2: "Serve"
        }

        key = Math.floor(Math.random() * 3);
        return shotTypes[key];
    }



    getShotResult(targetLoc, playerPosition, shotDirection, shotDistance) {
        // angle of 0 = straight right
        // angle of pi/2 = straight up
        var dx = shotDistance * Math.cos(shotDirection);
        var dy = shotDistance * Math.sin(shotDirection);

        var landedPosition = [playerPosition[0] + dx, playerPosition[1] + dy];

        return this.getAccuracy(landedPosition, targetLoc);
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
