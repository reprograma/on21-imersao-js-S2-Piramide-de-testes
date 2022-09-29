const filterCharacter = (character, name) => {
  return character.filter(char => char && char.name.includes(name))
}

module.exports = filterCharacter