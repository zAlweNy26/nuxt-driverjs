import { toValue, type ConfigRef, type DriveStepRef } from '#imports'
import { driver, type DriveStep } from 'driver.js'

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
