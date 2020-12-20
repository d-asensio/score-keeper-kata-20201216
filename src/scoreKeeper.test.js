const ScoreKeeper = require('./scoreKeeper')

it('initializes score to zero', () => {
  const scoreKeeper = new ScoreKeeper();
  expect(scoreKeeper.getScore()).toBe('000:000')
})

it('team A scores 1 point', ()=> {
  const scoreKeeper = new ScoreKeeper();
  scoreKeeper.scoreTeamA1();
  expect(scoreKeeper.getScore()).toBe('001:000')
})

it('team A scores 2 points', () => {
  const scoreKeeper = new ScoreKeeper();
  scoreKeeper.scoreTeamA2();
  expect(scoreKeeper.getScore()).toBe('002:000')
})

it('team A scores 3 points', () => {
  const scoreKeeper = new ScoreKeeper();
  scoreKeeper.scoreTeamA3();
  expect(scoreKeeper.getScore()).toBe('003:000');
})

it('team A scores multiple points', () => {
  const scoreKeeper = new ScoreKeeper();
  scoreKeeper.scoreTeamA1();
  scoreKeeper.scoreTeamA2();
  scoreKeeper.scoreTeamA3();
  scoreKeeper.scoreTeamA1();
  expect(scoreKeeper.getScore()).toBe('007:000')
})
