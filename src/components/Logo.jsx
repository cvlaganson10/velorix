export default function Logo({ size = 40 }) {
  return (
    <img
      src="/velorix-logo.jpg"
      alt="Velorix logo"
      width={size}
      height={size}
      style={{
        mixBlendMode: 'lighten',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
}
