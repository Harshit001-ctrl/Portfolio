import '@splinetool/viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
      };
    }
  }
}

export default function SplineBackground() {
  return (
    <div className="fixed  w-screen h-screen bg-black inset-0 z-0">
      <spline-viewer
        className="w-full h-full pointer-events-auto"
        url="https://prod.spline.design/tnncsZa3g99aVmfi/scene.splinecode"
      />
    </div>
  );
}