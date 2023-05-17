// Funciones útiles
import _normal from "../assets/types/normal.png";
import _fighting from "../assets/types/fighting.png";
import _flying from "../assets/types/flying.png";
import _poison from "../assets/types/poison.png";
import _ground from "../assets/types/ground.png";
import _rock from "../assets/types/rock.png";
import _bug from "../assets/types/bug.png";
import _ghost from "../assets/types/ghost.png";
import _steel from "../assets/types/steel.png";
import _fire from "../assets/types/fire.png";
import _water from "../assets/types/water.png";
import _grass from "../assets/types/grass.png";
import _electric from "../assets/types/electric.png";
import _psychic from "../assets/types/psychic.png";
import _ice from "../assets/types/ice.png";
import _dragon from "../assets/types/dragon.png";
import _dark from "../assets/types/dark.png";
import _fairy from "../assets/types/fairy.png";
import _unknown from "../assets/types/unknown.png";
import _shadow from "../assets/types/shadow.png";

const capitalize = (str) => {
  // mayúsclas la primera letra
  return str[0].toUpperCase() + str.slice(1);
};

const prettifyID = (id) => {
  return "00" + id;
};

let _TYPES = [];
const getImgType = (id) => {
  
  if (_TYPES.length) return _TYPES[id];

  _TYPES = _TYPES.concat([
    _normal,
    _fighting,
    _flying,
    _poison,
    _ground,
    _rock,
    _bug,
    _ghost,
    _steel,
    _fire,
    _water,
    _grass,
    _electric,
    _psychic,
    _ice,
    _dragon,
    _dark,
    _fairy,
    _unknown,
    _shadow,
  ]);
  
  return _TYPES[id];
};

const TYPE_COLORS = {
    "normal":"#dcdcdc",
    "fighting":"#da7589",
    "flying":"#bbc9e4",
    "poison":"#d6a2e4",
    "ground":"#e69a74",
    "rock":"#C9BB8A",
    "bug":"#bae05f",
    "ghost":"#8291e0",
    "steel":"#9fb8b9",
    "fire":"#ffb971",
    "water":"#8cc4e2",
    "grass":"#a8ff98",
    "electric":"#ffe662",
    "psychic":"#ffa5da",
    "ice":"#8cf5e4",
    "dragon":"#88a2e8",
    "dark":"#8e8c94",
    "fairy":"#fdb9e9",
    "unknown":"#gainsboro",
    "shadow":"#26de81",
  }

const getTypeColors = (types) =>{
  if(types.length>1){
    return [TYPE_COLORS[types[0].name], TYPE_COLORS[types[1].name] ]
  }
  return [TYPE_COLORS[types[0].name], TYPE_COLORS[types[0].name] ]
}
const Helper = {
  capitalize,
  prettifyID,
  getImgType,
  getTypeColors,
};

export default Helper;
