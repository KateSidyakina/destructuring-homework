export default function getProps({ special }) {
  if (!special) {
    return [];
  }

  const extractedAttacks = special.map((
    {
      id, name, description = 'Описание недоступно', icon,
    },
  ) => (
    {
      id,
      name,
      description,
      icon,
    }
  ));

  return extractedAttacks;
}
