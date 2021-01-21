import cherry from "../images/cherrybomb.png";
import chomper from "../images/chomper.png";
import fumeshroom from "../images/fumeshroom.png";
import hypnoshroom from "../images/hypnoshroom.png";
import kernelpult from "../images/kernelpult.png";
import magnetshroom from "../images/magnetshroom.png";
import melonpult from "../images/melonpult.png";
import peapod from "../images/peapod.png";
import peashooter from "../images/peashooter.png";
import snowpea from "../images/snowpea.png";
import sporeshroom from "../images/sporeshroom.png";
import sunflower from "../images/sunflower.png";
import sunshroom from "../images/sunshroom.png";
import tallnut from "../images/tallnut.png";
import torchwood from "../images/torchwood.png";
import wintermelon from "../images/wintermelon.png";


const cardsId = () => Array.from(Array(16).keys());

const cardsUrl = () => {
  return {
    0: cherry,
    1: chomper,
    2: fumeshroom,
    3: hypnoshroom,
    4: kernelpult,
    5: magnetshroom,
    6: melonpult,
    7: peapod,
    8: peashooter,
    9: snowpea,
    10: sporeshroom,
    11: sunflower,
    12: sunshroom,
    13: tallnut,
    14: torchwood,
    15: wintermelon,
  };
};

export { cardsId, cardsUrl };
