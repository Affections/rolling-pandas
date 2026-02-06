import { type SchemaTypeDefinition } from 'sanity'

// Import your schemas here
import { homepage } from '../schemas/homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
  ],
}
