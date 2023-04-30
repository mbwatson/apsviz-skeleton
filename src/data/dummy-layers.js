import { faker } from '@faker-js/faker'
import {
  randomColor,
  randomCycle,
  randomGrid,
  randomPoints,
  randomAdvisory,
  randomInstance,
  randomStormName,
} from './util'

const layerGenerator = n => {
  return [...Array(n).keys()].map(() => ({
    id:         faker.datatype.uuid(),
    name:       faker.lorem.sentence(2),
    visible:   false,
    opacity:    1.0,
    color:      randomColor(),
    date:       faker.date.past(),
    cycle:      randomCycle(),
    grid:       randomGrid(),
    advisory:   randomAdvisory(),
    stormName:  randomStormName(),
    instance:   randomInstance(),
    data:       randomPoints(10),
  }))
}


export const dummyLayers = layerGenerator(100)
console.log(dummyLayers)
