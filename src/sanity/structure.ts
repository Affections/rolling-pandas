import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Add your custom structure here
      // Example:
      // S.documentTypeListItem('homepage').title('Homepage'),
      // S.divider(),
      
      // Default: Show all document types
      ...S.documentTypeListItems(),
    ])
