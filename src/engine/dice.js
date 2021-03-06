import Engine from './'

export const roll = (max=6) => Engine.utils.getRandomInt(1, max)

export default {
  roll
}