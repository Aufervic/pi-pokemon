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

  if(isNaN(id)){
    return " ---"
  }
  let sid = '0000'+id
  return sid.slice(sid.length-4)
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
    // primero color es más suave, el segundo es para bacgrounds
    "normal":["#dcdcdc", "#aca974"],
    "fighting":["#da7589", "#d36063"],
    "flying":["#bbc9e4", "#5eb9b2"],
    "poison":["#d6a2e4", "#611380"],
    "ground":["#e69a74", "#5f4632"],
    "rock":["#C9BB8A", "#776a3e"],
    "bug":["#bae05f", "#91ba2e"],
    "ghost":["#8291e0", "#472b53"],
    "steel":["#586079", "#586079"],
    "fire":["#ffb971", "#f67f0b"],
    "water":["#8cc4e2", "#08517a"],
    "grass":["#a8ff98", "#29c037"],
    "electric":["#ffe662", "#fffa24"],
    "psychic":["#ffa5da", "#f55792"],
    "ice":["#8cf5e4", "#1995a1"],
    "dragon":["#88a2e8", "#8a55fd"],
    "dark":["#8e8c94", "#4f4f4f"],
    "fairy":["#fdb9e9", "#f87ea7"],
    "unknown":["#gainsboro", "#fc0c0b"],
    "shadow":["#26de81", "#454545"],
}
const getTypeColors = (types, pos) =>{
  if(!pos) pos = 0
  if(types.length>1){
    return [TYPE_COLORS[types[0].name][pos], TYPE_COLORS[types[1].name][pos] ]
  }
  return [TYPE_COLORS[types[0].name][pos], TYPE_COLORS[types[0].name][pos] ]
}


const Helper = {
  capitalize,
  prettifyID,
  getImgType,
  getTypeColors,
};

export default Helper;
