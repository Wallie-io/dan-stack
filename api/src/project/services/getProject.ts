import { Project } from '../project.model'
import { ID } from '../../utils'

export const getProject = (id: ID, brand: ID) => {
  if (!id) throw new Error('id parameter required')
  if (!brand) throw new Error('brand parameter required')
  Project.find({ id, brand })
}
