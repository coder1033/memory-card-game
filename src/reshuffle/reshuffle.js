const reshuffle = (cards) => {
  let n = cards.length,
    temp;
  while (n) {
    let r = Math.floor(Math.random() * n--);

    temp = cards[r];
    cards[r] = cards[n];
    cards[n] = temp;
  }
  return cards;
};

export default reshuffle;
