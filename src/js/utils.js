import { ENEMY_VELOCITY_MIN, ENEMY_VELOCITY_MAX } from './constants'

export function getRandomEnemyStartingPos() {
  return Math.floor(Math.random() * (-100 + 10)) + 10;
}

export function getRandomEnemyVelocity() {
  return Math.floor(Math.random() * (ENEMY_VELOCITY_MAX - ENEMY_VELOCITY_MIN + 1)) + ENEMY_VELOCITY_MIN;
}
