// The CSS data files are imported as text (esbuild's text loader).
declare module "*.css" {
  const content: string;
  export default content;
}
