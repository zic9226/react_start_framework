type LogoProps = {
    src: string
    alt: string
    size: number
}

export function Logo({ src, alt, size }: LogoProps) {
    return <img src={src} alt={alt} width={size} />
}