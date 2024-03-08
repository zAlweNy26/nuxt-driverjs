import { toValue, type MaybeRefOrGetter } from '#imports'
import { driver, type Config, type DriveStep } from 'driver.js'

type DriveStepRef = Omit<DriveStep, 'element'> & {
  element?: MaybeRefOrGetter<Element | string | undefined>
}

type ConfigRef = Omit<Config, 'steps'> & {
  steps?: DriveStepRef[]
}

const unrefSteps = (steps: DriveStepRef[]) => {
  return steps.map<DriveStep>((step) => {
    const { element, ...rest } = step
    return {
      element: toValue(element),
      ...rest
    }
  })
}

export default function useDriver(config?: ConfigRef) {
  const { steps, ...rest } = config || {}

  const drv = driver({
    ...rest,
    steps: steps ? unrefSteps(steps) : undefined
  })

  const highlight = (step: DriveStepRef) => drv.highlight(unrefSteps([step])[0])

  const setSteps = (steps: DriveStepRef[]) => drv.setSteps(unrefSteps(steps))

  return {
    ...drv,
    highlight,
    setSteps,
  }
}
