export const conditionalStage = (condition: boolean, stage: any) => {
  if (Array.isArray(stage)) {
    return condition ? stage : []
  }

  return condition ? stage : {}
}
