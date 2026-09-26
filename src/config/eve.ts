/**
 * EVE identity configuration.
 *
 * Keep the underlying PocketPal runtime identifiers intact while EVE is
 * developed on the eve-dev branch. This lets us rebrand safely without
 * disrupting llama.rn/model loading or native project wiring.
 */
export const EVE = {
  name: 'EVE',
  fullName: 'Enhanced Virtual Entity',
  tagline: 'Private. Local. Yours.',
  greeting: 'EVE online. What are we working on?',
  localFirst: true,
} as const;

export type EveConfig = typeof EVE;
