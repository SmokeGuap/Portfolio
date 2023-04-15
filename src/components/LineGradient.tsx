type LinerContext = {
  width?: string;
};
function LineGradient({ width = 'w-full' }: LinerContext) {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
}
export default LineGradient;
