const filterCharacter = (characters, name) => {
    return characters.filter(char => char && char.name.includes(name));
  }

  module.exports = filterCharacter