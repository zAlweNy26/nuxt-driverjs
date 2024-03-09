import type { Config, DriveStep } from 'driver.js'
import type { MaybeRefOrGetter } from '#imports'

export type DriveStepRef = Omit<DriveStep, 'element'> & {
  element?: MaybeRefOrGetter<Element | string | undefined>
}

export type ConfigRef = Omit<Config, 'steps'> & {
  steps?: DriveStepRef[]
}
