class ScoreKeeper {
  constructor() {
    this.scoreA = 0;
  }

  scoreTeamA1() {
    this.scoreA += 1;
  }

  scoreTeamA2() {
    this.scoreA += 2;
  }

  scoreTeamA3() {
    this.scoreA += 3;
  }

  getScore() {
    return `00${this.scoreA}` + ':000';
  }
}

module.exports = ScoreKeeper