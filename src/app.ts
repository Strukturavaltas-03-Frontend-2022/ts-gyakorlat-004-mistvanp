// Importáld be a HumanHero és TransformerHero osztályokat.


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
 export const humans: HumanHero[] = [
    { id: 0, name: "Reginleif", sex: "female", age: 28, health: 2000 },
    { id: 1, name: "Amanra", sex: "female", age: 40, health: 2500 },
    { id: 2, name: "Perseus", sex: "male", age: 30, health: 2200 },
  ];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
 export const transformers: TransformerHero[] = [
    {
      id: 0,
      name: "Kamol",
      wings: 0,
      wheels: 4,
      clan: "Ancient Weapon",
    },
    {
      id: 1,
      name: "Tutuka",
      wings: 2,
      wheels: 0,
      clan: "Ancient Weapon",
    },
    {
      id: 2,
      name: "Buruko",
      wings: 4,
      wheels: 4,
      clan: "Ancient Weapon",
    },
  ];